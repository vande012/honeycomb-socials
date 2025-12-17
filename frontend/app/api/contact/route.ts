import { NextRequest, NextResponse } from "next/server";

// We deploy without email/sheets env vars for now, so keep this route as a safe stub.
// When you're ready, re-enable the full Nodemailer + Google Sheets implementation below.
export const runtime = "nodejs";

export async function POST(_request: NextRequest) {
  return NextResponse.json(
    {
      ok: false,
      error:
        "Contact form is not configured yet (EMAIL/GOOGLE env vars not set).",
    },
    { status: 501 }
  );
}

/**
 * FULL IMPLEMENTATION (disabled until env vars are set)
 *
 * - Requires: nodemailer, googleapis
 * - Env:
 *   EMAIL_USER
 *   EMAIL_PASS
 *   CONTACT_EMAIL (optional)
 *   GOOGLE_CLIENT_EMAIL
 *   GOOGLE_PRIVATE_KEY
 *   GOOGLE_SHEET_ID
 *
 * Paste the previous implementation here when ready.
 */