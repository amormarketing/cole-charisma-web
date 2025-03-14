import type { APIRoute } from 'astro';

import { internalErrorParser } from '@/utils/internal-error-parser';
import { transporter, EMAIL_ACCOUNT, emailTemplate } from '@/utils/mail';

// const EMAIL_RECEPTOR = import.meta.env.EMAIL_RECEPTOR;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');
  const message = data.get('message');
  const subject = data.get('subject');

  if (!name || !email || !message || !subject || !phone) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields',
      }),
      { status: 400 }
    );
  }

  const mailOptions = {
    from: EMAIL_ACCOUNT,
    to: email.toString(),
    subject: 'C&C WEBSITE CONTACT FORM: ' + email,
    html: emailTemplate(name.toString(), email.toString(), phone.toString(), message.toString(), subject.toString()),
  };

  try {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        throw new Error(error.message);
      }
    });

    return new Response(
      JSON.stringify({
        message: 'Success!',
      }),
      { status: 200 }
    );
  } catch (e) {
    const error = internalErrorParser(e);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
