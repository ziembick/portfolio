import { NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY!;
const SENDGRID_SENDER_EMAIL = 'pauloziembick@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = bodySchema.parse(body);

    const emailData = {
      personalizations: [
        {
          to: [{ email: 'pauloziembick@gmail.com' }],
          subject: `New message from ${name}`,
        },
      ],
      from: { email: SENDGRID_SENDER_EMAIL },
      content: [
        {
          type: 'text/plain',
          value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
      ],
    };

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Mensagem enviada com sucesso!' });
    } else {
      const error = await response.json();
      console.error('SendGrid error:', error);
      return NextResponse.error();
    }
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}


// import axios from "axios";
// import { NextResponse } from "next/server";
// import { z } from "zod";

// const bodySchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   message: z.string(),
// });

// const WEBHOOK_URL = process.env.WEBHOOK_URL!;

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, message } = bodySchema.parse(body);

//     const messageData = {
//       embeds: [
//         {
//           title: `Mensagem Contato`,
//           color: 0x4984f5,
//           fields: [
//             {
//               name: `Nome`,
//               value: name,
//               inline: true,
//             },
//             {
//               name: `Email:`,
//               value: email,
//               inline: true,
//             },
//             {
//               name: `Mensagem:`,
//               value: message,
//             },
//           ],
//         },
//       ],
//     };

//     await axios.post(WEBHOOK_URL, messageData)

//     return NextResponse.json({
//         message: 'Mensagem enviada com sucesso!'
//     })
//   } catch (err) {
//     console.error(err);
//     return NextResponse.error();
//   }
// }
