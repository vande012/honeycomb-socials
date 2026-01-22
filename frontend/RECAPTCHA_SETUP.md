# Google reCAPTCHA v3 Setup Guide

This application uses Google reCAPTCHA v3 for spam prevention on the consultation form (`/audit` page).

## What is reCAPTCHA v3?

reCAPTCHA v3 is an invisible CAPTCHA that works in the background without user interaction. It assigns a score (0.0 to 1.0) to each request based on user behavior:
- **Score 1.0**: Very likely a human
- **Score 0.5**: Threshold (configurable)
- **Score 0.0**: Very likely a bot

## Setup Instructions

### 1. Get Your reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **Create** or **+** to register a new site
3. Fill in the form:
   - **Label**: `Honeycomb Socials` (or your preferred name)
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add your domains:
     - `honeycombsocials.com`
     - `www.honeycombsocials.com`
     - `localhost` (for local development)
   - Accept the terms and click **Submit**

4. You'll receive two keys:
   - **Site Key** (public): Used in frontend code
   - **Secret Key** (private): Used in backend verification

### 2. Configure Environment Variables

Add the following to your `.env.local` file:

```bash
# Google reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Important Notes:**
- The `NEXT_PUBLIC_` prefix makes the site key available in the browser (required for reCAPTCHA)
- The secret key should NEVER be exposed in client-side code
- Never commit these keys to version control

### 3. Test the Implementation

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/audit` page
3. Fill out and submit the form
4. Check the browser console for any reCAPTCHA errors
5. Check your server logs to see the reCAPTCHA score

### 4. Score Threshold Configuration

The current threshold is set to **0.5** in `frontend/app/api/consultation/route.ts`:

```typescript
if (score < 0.5) {
  return { success: false, error: "Suspicious activity detected", score };
}
```

**Adjusting the Threshold:**
- **Lower threshold (0.3-0.4)**: More lenient, fewer false positives, but may allow some spam
- **Higher threshold (0.6-0.7)**: Stricter, blocks more bots, but may reject legitimate users
- **Recommended**: Start with 0.5 and adjust based on your traffic patterns

## How It Works

### Frontend Flow (`/audit` page)

1. reCAPTCHA script loads when the page mounts
2. When user submits the form:
   - Form validation runs
   - reCAPTCHA generates a token with action `submit_consultation`
   - Token is sent to backend along with form data

### Backend Flow (`/api/consultation`)

1. Receives form data + reCAPTCHA token
2. Sends token to Google's verification API
3. Google returns:
   - `success`: Whether verification passed
   - `score`: Human likelihood score (0.0 - 1.0)
   - `action`: The action name (should match frontend)
4. If score >= 0.5, form submission continues
5. If score < 0.5, request is rejected with security error

## Graceful Degradation

The implementation includes graceful degradation:

- **If reCAPTCHA keys are not configured**: Warning is logged, but forms still work
- **If reCAPTCHA script fails to load**: Form submission continues without token
- **If verification API is down**: Backend logs error and allows submission (configurable)

This ensures the site remains functional even if reCAPTCHA has issues.

## Monitoring & Debugging

### Check reCAPTCHA Score

In your server logs, you'll see:
```
reCAPTCHA verification failed: Suspicious activity detected Score: 0.3
```

### View reCAPTCHA Analytics

1. Go to [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Select your site
3. View analytics dashboard showing:
   - Request volume
   - Score distribution
   - Suspicious activity patterns

### Common Issues

**Issue**: "reCAPTCHA verification failed"
- **Cause**: Secret key not configured or incorrect
- **Fix**: Verify `RECAPTCHA_SECRET_KEY` in `.env.local`

**Issue**: "grecaptcha is not defined"
- **Cause**: Site key not configured or script failed to load
- **Fix**: Verify `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` in `.env.local`

**Issue**: High rejection rate for legitimate users
- **Cause**: Threshold too high
- **Fix**: Lower the score threshold from 0.5 to 0.4 or 0.3

## Production Checklist

- [ ] reCAPTCHA v3 keys obtained from Google
- [ ] Environment variables configured in production
- [ ] Correct domain added to reCAPTCHA admin console
- [ ] Form tested in production environment
- [ ] Monitoring dashboard reviewed for score distribution
- [ ] Threshold adjusted based on real traffic patterns

## Additional Resources

- [reCAPTCHA v3 Documentation](https://developers.google.com/recaptcha/docs/v3)
- [Best Practices for reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3#interpreting_the_score)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)

