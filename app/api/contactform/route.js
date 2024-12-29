import { Resend } from "resend";

const resend = new Resend("re_MNh8seNE_4CttJjV5S3H88JNckWeXDvin");

export async function POST(request) {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "aaplv2@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });

  return Response.json({ data: "hola" });
}
