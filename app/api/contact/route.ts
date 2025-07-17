export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set API key and check for required env vars
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const MAIL_TO = process.env.MAIL_TO;

if (!SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not set in environment variables.');
}
if (!MAIL_TO) {
  console.error('MAIL_TO is not set in environment variables.');
}
if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(req: NextRequest) {
  try {
    if (!SENDGRID_API_KEY || !MAIL_TO) {
      return NextResponse.json({ error: 'Server email configuration error.' }, { status: 500 });
    }
    const { fullName, companyName, email, role, interest } = await req.json();

    console.log('Received form submission:', { fullName, companyName, email, role, interest });

    if (!fullName || !companyName || !email || !interest) {
      console.log('Missing required fields.');
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const msg = {
      to: MAIL_TO,
      from: MAIL_TO, // Must be a verified sender for free accounts
      subject: 'New Contact Form Submission',
      text: `New contact form submission:\n\nFull Name: ${fullName}\nCompany Name: ${companyName}\nEmail: ${email}\nRole/Department: ${role || ''}\nInterested In: ${interest}`,
      html: `<h2>New Contact Form Submission</h2>
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Company Name:</b> ${companyName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Role/Department:</b> ${role || ''}</p>
        <p><b>Interested In:</b> ${interest}</p>`
    };

    console.log('Composed email message:', msg);

    await sgMail.send(msg);

    console.log('Email sent successfully.');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}