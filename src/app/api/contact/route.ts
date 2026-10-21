import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  services?: string[];
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUPPORT_EMAIL = 'info@onepathsolutions.com';
const SUPPORT_PHONE = '+91 96523 01382';
const SITE_URL = 'https://one-hr.onepathsolutions.com';

function resolveMailConfig() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || 587);
  const secure =
    String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || port === 465;
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass =
    process.env.SMTP_PASSWORD ||
    process.env.SMTP_PASS ||
    process.env.EMAIL_PASS;
  const from =
    process.env.SMTP_FROM ||
    process.env.EMAIL_FROM ||
    (user ? `One HR <${user}>` : undefined);
  const notifyTo =
    process.env.SMTP_NOTIFY_TO ||
    process.env.CONTACT_NOTIFY_TO ||
    'onepathbs@gmail.com';

  return { host, port, secure, user, pass, from, notifyTo };
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

function brandLogo() {
  return `
    <div style="font-family:${FONT};font-size:26px;line-height:1;letter-spacing:-0.02em;text-align:left;">
      <span style="color:#ffffff;font-weight:400;">One </span><span style="color:#ffffff;font-weight:800;">HR</span><span style="display:inline-block;width:8px;height:8px;background:#2582ff;border-radius:1.5px;margin-left:3px;vertical-align:6px;"></span>
    </div>`;
}

function submissionRows(
  rows: { label: string; value: string; isEmail?: boolean }[]
) {
  return rows
    .map((row, i) => {
      const border =
        i === rows.length - 1 ? '' : 'border-bottom:1px solid #eceff3;';
      let valueHtml = escapeHtml(row.value || '—');
      if (row.isEmail && row.value) {
        valueHtml = `<a href="mailto:${escapeHtml(row.value)}" style="color:#2563eb;text-decoration:none;font-weight:600;">${escapeHtml(row.value)}</a>`;
      }
      return `
        <tr>
          <td style="padding:18px 4px;${border}width:118px;vertical-align:top;color:#9ca3af;font-size:13px;font-weight:500;font-family:${FONT};">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding:18px 4px;${border}vertical-align:top;color:#111827;font-size:15px;font-weight:600;line-height:1.55;font-family:${FONT};word-break:break-word;">
            ${valueHtml}
          </td>
        </tr>`;
    })
    .join('');
}

function buildEmailHtml(opts: {
  title: string;
  greeting: string;
  intro: string;
  rows: { label: string; value: string; isEmail?: boolean }[];
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#eef1f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#eef1f5;padding:28px 14px;">
    <tr>
      <td align="center">
        <!-- Outer curved card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e5e7eb;">
          <!-- Header -->
          <tr>
            <td style="background:#0b1220;padding:26px 34px;border-radius:20px 20px 0 0;">
              ${brandLogo()}
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 34px 8px;font-family:${FONT};background:#ffffff;">
              <h1 style="margin:0 0 18px;font-size:28px;line-height:1.25;font-weight:700;color:#111827;">${escapeHtml(opts.title)}</h1>
              <p style="margin:0 0 8px;font-size:15px;line-height:1.6;color:#374151;">${escapeHtml(opts.greeting)}</p>
              <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#6b7280;">${escapeHtml(opts.intro)}</p>

              <!-- Submission card with curved corners -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:16px;background:#fafbfc;">
                <tr>
                  <td style="padding:8px 22px 6px;">
                    <p style="margin:14px 0 4px;font-size:11px;font-weight:700;letter-spacing:0.14em;color:#2563eb;text-transform:uppercase;font-family:${FONT};">Your submission</p>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      ${submissionRows(opts.rows)}
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:28px 0 8px;font-size:14px;line-height:1.7;color:#6b7280;">
                If you need anything urgently, reach us at
                <a href="mailto:${SUPPORT_EMAIL}" style="color:#2563eb;text-decoration:underline;">${SUPPORT_EMAIL}</a>
                or
                <a href="tel:+919652301382" style="color:#2563eb;text-decoration:underline;">${SUPPORT_PHONE}</a>.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 34px 0;background:#ffffff;"></td>
          </tr>

          <!-- Footer: left-aligned like One School, curved bottom corners -->
          <tr>
            <td style="background:#0b1220;padding:26px 34px 28px;text-align:left;border-radius:0 0 20px 20px;">
              ${brandLogo()}
              <p style="margin:14px 0 0;font-size:12px;line-height:1.7;color:#94a3b8;font-family:${FONT};text-align:left;">
                <a href="${SITE_URL}" style="color:#94a3b8;text-decoration:none;">onepathsolutions.com</a>
                &nbsp;·&nbsp;
                <a href="mailto:${SUPPORT_EMAIL}" style="color:#94a3b8;text-decoration:none;">${SUPPORT_EMAIL}</a>
                &nbsp;·&nbsp;
                <a href="tel:+919652301382" style="color:#94a3b8;text-decoration:none;">${SUPPORT_PHONE}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildPlainText(opts: {
  title: string;
  greeting: string;
  intro: string;
  rows: { label: string; value: string }[];
}) {
  return [
    opts.title,
    '',
    opts.greeting,
    opts.intro,
    '',
    'YOUR SUBMISSION',
    ...opts.rows.map((r) => `${r.label}: ${r.value || '—'}`),
    '',
    `If you need anything urgently, reach us at ${SUPPORT_EMAIL} or ${SUPPORT_PHONE}.`,
  ].join('\n');
}

export async function POST(request: Request) {
  const requestId = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const company = (body.company || '').trim();
  const services = Array.isArray(body.services)
    ? body.services.map((s) => String(s)).filter(Boolean)
    : [];
  const message = (body.message || '').trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const { host, port, secure, user, pass, from, notifyTo } = resolveMailConfig();

  if (!user || !pass || !from) {
    console.error(`[contact:${requestId}] Missing SMTP credentials`);
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact the site administrator.' },
      { status: 500 }
    );
  }

  const rows = [
    { label: 'Name', value: name },
    { label: 'Email', value: email, isEmail: true },
    { label: 'Company', value: company || '—' },
    { label: 'Services', value: services.length ? services.join(', ') : '—' },
    { label: 'Message', value: message },
  ];

  const clientHtml = buildEmailHtml({
    title: 'Your request is noted',
    greeting: `Hi ${name},`,
    intro:
      'Thank you for contacting One HR. Your request has been received and our team will get back to you shortly.',
    rows,
  });
  const clientText = buildPlainText({
    title: 'Your request is noted',
    greeting: `Hi ${name},`,
    intro:
      'Thank you for contacting One HR. Your request has been received and our team will get back to you shortly.',
    rows,
  });

  const receiverHtml = buildEmailHtml({
    title: 'New contact request',
    greeting: 'Hello One HR team,',
    intro: `A new enquiry was submitted on the One HR website by ${name}.`,
    rows,
  });
  const receiverText = buildPlainText({
    title: 'New contact request',
    greeting: 'Hello One HR team,',
    intro: `A new enquiry was submitted on the One HR website by ${name}.`,
    rows,
  });

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  try {
    console.log(
      `[contact:${requestId}] Sending client+receiver mail via ${host}:${port} as=${user} notify=${notifyTo}`
    );

    await Promise.all([
      transporter.sendMail({
        from,
        to: email,
        subject: 'Your One HR request is noted',
        text: clientText,
        html: clientHtml,
      }),
      transporter.sendMail({
        from,
        to: notifyTo,
        replyTo: `"${name}" <${email}>`,
        subject: `New One HR enquiry from ${name}${company ? ` (${company})` : ''}`,
        text: receiverText,
        html: receiverHtml,
      }),
    ]);

    console.log(`[contact:${requestId}] Both emails sent successfully`);
  } catch (err) {
    console.error(`[contact:${requestId}] sendMail failed:`, err);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
