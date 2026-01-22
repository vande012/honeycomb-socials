import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Email Configuration Setup (Simplified)
 * 
 * Required:
 *   EMAIL_PASS - Your Gmail app password (get from: https://myaccount.google.com/apppasswords)
 * 
 * Optional:
 *   EMAIL_USER - Gmail address to send from (defaults to: contact@honeycombsocials.com)
 *   CONTACT_EMAIL - Email to receive submissions (defaults to EMAIL_USER)
 * 
 * Example .env.local:
 *   EMAIL_PASS=your-16-char-app-password
 *   # Optional:
 *   # EMAIL_USER=your-email@gmail.com
 *   # CONTACT_EMAIL=contact@honeycombsocials.com
 */

export const runtime = "nodejs";

// Rate limiting map (in-memory, consider using Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Clean up old rate limit entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (value.resetTime < now) {
      rateLimitMap.delete(key);
    }
  }
}, 600000); // 10 minutes

function getRateLimitKey(ip: string, email: string): string {
  return `${ip}:${email}`;
}

function checkRateLimit(ip: string, email: string): boolean {
  const key = getRateLimitKey(ip, email);
  const now = Date.now();
  const limit = rateLimitMap.get(key);

  // Allow 3 submissions per hour per IP+email combo
  const maxRequests = 3;
  const windowMs = 60 * 60 * 1000; // 1 hour

  if (!limit || limit.resetTime < now) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (limit.count >= maxRequests) {
    return false;
  }

  limit.count++;
  return true;
}

function sanitizeInput(input: string): string {
  // Remove any HTML tags and script content
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim();
}

async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  
  // If reCAPTCHA is not configured at all, allow submission (development mode)
  if (!secretKey && !siteKey) {
    console.warn("reCAPTCHA not configured - allowing submission without verification");
    return { success: true };
  }
  
  // If configured but no token provided, this might be an issue
  if (!token) {
    console.warn("No reCAPTCHA token provided - allowing submission (may be development or script load failure)");
    return { success: true }; // Graceful degradation
  }

  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY not configured - skipping verification");
    return { success: true }; // Allow submission if secret key not configured
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    if (!data.success) {
      return { success: false, error: "reCAPTCHA verification failed" };
    }

    // For reCAPTCHA v3, check the score (0.0 - 1.0)
    // Lower scores indicate likely bots, higher scores indicate likely humans
    const score = data.score || 0;
    if (score < 0.5) {
      return { success: false, error: "Suspicious activity detected", score };
    }

    return { success: true, score };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, error: "Failed to verify reCAPTCHA" };
  }
}

function validateInput(data: any): { isValid: boolean; error?: string } {
  // Check required fields
  const required = ["name", "email", "businessName", "businessType", "message"];
  for (const field of required) {
    if (!data[field] || typeof data[field] !== "string" || !data[field].trim()) {
      return { isValid: false, error: `Missing required field: ${field}` };
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { isValid: false, error: "Invalid email format" };
  }

  // Validate phone format (optional, but if provided must be valid)
  if (data.phone && typeof data.phone === "string" && data.phone.trim()) {
    const phoneRegex = /^[\d\s\-\+\(\)\.]+$/;
    const cleanedPhone = data.phone.replace(/\D/g, "");
    if (!phoneRegex.test(data.phone) || cleanedPhone.length < 10) {
      return { isValid: false, error: "Invalid phone format" };
    }
  }

  // Check for suspicious patterns (XSS attempts, etc.)
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /data:text\/html/i,
  ];

  const allText = `${data.name} ${data.email} ${data.phone || ""} ${data.businessName} ${data.businessType} ${data.message}`;
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(allText)) {
      return { isValid: false, error: "Invalid content detected" };
    }
  }

  // Validate lengths
  if (data.name.length > 100) {
    return { isValid: false, error: "Name is too long" };
  }
  if (data.email.length > 255) {
    return { isValid: false, error: "Email is too long" };
  }
  if (data.phone && data.phone.length > 50) {
    return { isValid: false, error: "Phone number is too long" };
  }
  if (data.businessName.length > 200) {
    return { isValid: false, error: "Business name is too long" };
  }
  if (data.message.length > 2000) {
    return { isValid: false, error: "Message is too long" };
  }

  return { isValid: true };
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { ok: false, error: "Invalid request format" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(body.recaptchaToken || '');
    if (!recaptchaResult.success) {
      console.warn('reCAPTCHA verification failed:', recaptchaResult.error, 'Score:', recaptchaResult.score);
      return NextResponse.json(
        { 
          ok: false, 
          error: "Security verification failed. Please try again." 
        },
        { status: 400 }
      );
    }

    // Validate input
    const validation = validateInput(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { ok: false, error: validation.error || "Validation failed" },
        { status: 400 }
      );
    }

    // Check rate limit
    if (!checkRateLimit(ip, body.email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: body.phone ? sanitizeInput(body.phone) : "",
      businessName: sanitizeInput(body.businessName),
      businessType: sanitizeInput(body.businessType),
      message: sanitizeInput(body.message),
    };

    // Email configuration - simplified setup
    // Only EMAIL_PASS (Gmail app password) is required
    // EMAIL_USER defaults to contact@honeycombsocials.com if not set
    // CONTACT_EMAIL defaults to EMAIL_USER if not set
    const emailPass = process.env.EMAIL_PASS;
    const emailUser = process.env.EMAIL_USER || "contact@honeycombsocials.com";
    const contactEmail = process.env.CONTACT_EMAIL || emailUser;

    if (!emailPass) {
      console.error("Email configuration missing: EMAIL_PASS is required");
      return NextResponse.json(
        {
          ok: false,
          error: "Email service is not configured. Please add EMAIL_PASS to your environment variables.",
        },
        { status: 503 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email to owner
    const ownerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f1e1c;">New Consultation Request</h2>
        <div style="background-color: #fafafa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          ${sanitizedData.phone ? `<p><strong>Phone:</strong> ${sanitizedData.phone}</p>` : ''}
          <p><strong>Business Name:</strong> ${sanitizedData.businessName}</p>
          <p><strong>Business Type:</strong> ${sanitizedData.businessType}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${sanitizedData.message}</p>
        </div>
      </div>
    `;

    const ownerEmailText = `
New Consultation Request

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
${sanitizedData.phone ? `Phone: ${sanitizedData.phone}\n` : ''}Business Name: ${sanitizedData.businessName}
Business Type: ${sanitizedData.businessType}

Message:
${sanitizedData.message}
    `;

    // Email to client (confirmation)
    const blogUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.honeycombsocials.com'}/blog`;
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f1e1c;">Thank You for Your Interest!</h2>
        <p>Hi ${sanitizedData.name},</p>
        <p>Thank you for reaching out to Honeycomb Socials. I've received your consultation request and I'm excited to learn more about ${sanitizedData.businessName}.</p>
        <p>I'll review your information and get back to you within 24-48 hours to schedule a call and discuss how I can help elevate your social media presence.</p>
        <p>In the meantime, feel free to check out my <a href="${blogUrl}" style="color: #c9a86a;">blog at honeycombsocials.com/blog</a> for tips and inspiration!</p>
        <p>Best regards,<br>Maggie Vandehey</p>
      </div>
    `;

    const clientEmailText = `
Thank You for Your Interest!

Hi ${sanitizedData.name},

Thank you for reaching out to Honeycomb Socials. I've received your consultation request and I'm excited to learn more about ${sanitizedData.businessName}.

I'll review your information and get back to you within 24-48 hours to schedule a call and discuss how I can help elevate your social media presence.

In the meantime, feel free to check out my blog at honeycombsocials.com/blog for tips and inspiration!

Best regards,
Maggie Vandehey
    `;

    // Send emails
    await Promise.all([
      // Email to owner
      transporter.sendMail({
        from: `"Honeycomb Socials" <${emailUser}>`,
        to: contactEmail,
        replyTo: sanitizedData.email,
        subject: `New Consultation Request from ${sanitizedData.name}`,
        text: ownerEmailText,
        html: ownerEmailHtml,
      }),
      // Confirmation email to client
      transporter.sendMail({
        from: `"Honeycomb Socials" <${emailUser}>`,
        to: sanitizedData.email,
        subject: "Thank You for Your Consultation Request",
        text: clientEmailText,
        html: clientEmailHtml,
      }),
    ]);

    return NextResponse.json({ ok: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}

