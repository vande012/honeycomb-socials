# Email Setup Guide

Setting up email for the consultation form is simple - you only need to add your Gmail app password!

## Quick Setup (2 minutes)

1. **Get your Gmail App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Sign in with your Gmail account
   - Select "Mail" and "Other (Custom name)"
   - Enter "Honeycomb Socials" as the name
   - Click "Generate"
   - Copy the 16-character password (no spaces)

2. **Add to your `.env.local` file:**
   ```env
   EMAIL_PASS=your-16-char-app-password-here
   ```

3. **That's it!** The form will now send emails.

## Optional Configuration

If you want to customize the email addresses:

```env
# Required - Your Gmail app password
EMAIL_PASS=your-16-char-app-password

# Optional - Email to send from (defaults to contact@honeycombsocials.com)
EMAIL_USER=your-email@gmail.com

# Optional - Email to receive submissions (defaults to EMAIL_USER)
CONTACT_EMAIL=contact@honeycombsocials.com
```

## How It Works

- **Owner Email**: Sent to `CONTACT_EMAIL` (or `EMAIL_USER` if not set) with form submission details
- **Client Confirmation**: Sent to the client's email address from the form
- **From Address**: Emails are sent from `EMAIL_USER` (or defaults to contact@honeycombsocials.com)

## Troubleshooting

**"Email service is not configured" error:**
- Make sure `EMAIL_PASS` is set in your `.env.local` file
- Restart your dev server after adding the env variable
- Verify the app password is correct (16 characters, no spaces)

**Emails not sending:**
- Check that 2-Step Verification is enabled on your Google account
- Verify the app password is correct
- Check your Gmail account for any security alerts

## Production Deployment

When deploying to production (Vercel, Railway, etc.), add the same environment variables:
- `EMAIL_PASS` (required)
- `EMAIL_USER` (optional)
- `CONTACT_EMAIL` (optional)

