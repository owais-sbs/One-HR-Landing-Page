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

const RECIPIENTS = ['info@onepathsolutions.com', 'khan500823@gmail.com'];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function resolveMailConfig() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  const from = process.env.SMTP_FROM || process.env.EMAIL_FROM || (user ? `"One HR Contact" <${user}>` : undefined);
  return { host, port, user, pass, from };
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function buildHtml(p: Required<Omit<ContactPayload, 'services'>> & { services: string[] }) {
  const servicesHtml =
    p.services.length > 0
      ? p.services
          .map(
            (s) =>
              `<span style="display:inline-block;background:#e0f2fe;color:#0369a1;padding:4px 10px;border-radius:999px;font-size:12px;margin:2px 4px 2px 0;">${escapeHtml(
                s
              )}</span>`
          )
          .join('')
      : '<em style="color:#64748b">No services selected</em>';

  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f1f5f9;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(2,6,23,0.08);">
      <div style="background:linear-gradient(135deg,#0ea5e9 0%,#3b82f6 100%);padding:28px 32px;color:#ffffff;">
        <h1 style="margin:0;font-size:22px;font-weight:700;letter-spacing:-0.01em;">New Contact Inquiry</h1>
        <p style="margin:6px 0 0;font-size:13px;opacity:0.9;">One HR — Landing Page Contact Form</p>
      </div>
      <div style="padding:28px 32px;color:#0f172a;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#64748b;width:130px;">Full name</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(p.name)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;font-weight:600;"><a href="mailto:${encodeURIComponent(p.email)}" style="color:#0369a1;text-decoration:none;">${escapeHtml(p.email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Company</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(p.company) || '<em style="color:#94a3b8;font-weight:400;">—</em>'}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;vertical-align:top;">Services</td><td style="padding:8px 0;">${servicesHtml}</td></tr>
        </table>
        <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e2e8f0;">
          <p style="margin:0 0 8px;color:#64748b;font-size:13px;">Message</p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;white-space:pre-wrap;line-height:1.6;color:#0f172a;font-size:14px;">${escapeHtml(p.message)}</div>
        </div>
      </div>
      <div style="background:#f8fafc;padding:16px 32px;color:#94a3b8;font-size:12px;border-top:1px solid #e2e8f0;">
        Sent automatically from the One HR landing page contact form.
      </div>
    </div>
  </div>`;
}

export async function POST(request: Request) {
  const requestId = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    console.error(`[contact:${requestId}] invalid JSON body`);
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const company = (body.company || '').trim();
  const services = Array.isArray(body.services) ? body.services.map((s) => String(s)).filter(Boolean) : [];
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

  const { host, port, user, pass, from } = resolveMailConfig();

  if (!user || !pass) {
    console.error(
      `[contact:${requestId}] Missing mail env vars. Expected SMTP_USER/SMTP_PASS or EMAIL_USER/EMAIL_PASS.`
    );
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact the site administrator.' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const html = buildHtml({ name, email, company, services, message });
  const text = [
    `New Contact Inquiry`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '—'}`,
    `Services: ${services.length ? services.join(', ') : '—'}`,
    ``,
    `Message:`,
    message,
  ].join('\n');

  try {
    console.log(
      `[contact:${requestId}] Sending mail via host=${host} port=${port} as=${user} to=${RECIPIENTS.join(',')}`
    );
    await transporter.sendMail({
      from,
      to: RECIPIENTS.join(', '),
      replyTo: `"${name}" <${email}>`,
      subject: `New One HR enquiry from ${name}${company ? ` (${company})` : ''}`,
      text,
      html,
    });
    console.log(`[contact:${requestId}] Mail sent successfully`);
  } catch (err) {
    console.error(`[contact:${requestId}] sendMail failed:`, err);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
