import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: "zentrix.system.de@gmail.com",
    subject: "Kontaktformular Zentrix System",
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}