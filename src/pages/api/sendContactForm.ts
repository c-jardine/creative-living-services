// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ContactFormEmailTemplate } from "@/components/ContactForm";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const senderEmail = process.env.CONTACT_FORM_SENDER_EMAIL as string;
const receiverEmail = process.env.CONTACT_FORM_RECEIVER_EMAIL as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await resend.emails.send({
    from: `Creative Living Services <${senderEmail}>`,
    to: [receiverEmail],
    subject: "Message received from contact form",
    react: ContactFormEmailTemplate(req.body),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
}
