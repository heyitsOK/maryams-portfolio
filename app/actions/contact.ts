"use server";

import { Resend } from "resend";

const recipient = "maryamkhan11211@gmail.com";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return { status: "error", message: "Email service is not configured." };
  }

  const name = getFormValue(formData, "name");
  const email = getFormValue(formData, "email");
  const message = getFormValue(formData, "message");

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Name, email, and message are required.",
    };
  }

  const firstName = name.split(/\s+/)[0];
  const messagePreview = message.length > 160
    ? `${message.slice(0, 157)}...`
    : message;
  const resend = new Resend(apiKey);

  try {
    const [newMessage, confirmation] = await Promise.all([
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: recipient,
        replyTo: email,
        template: {
          id: "new-message",
          variables: {
            sender_name: name,
            message_preview: messagePreview,
          },
        },
      }),
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        template: {
          id: "contact-confirmation",
          variables: {
            first_name: firstName,
            message,
          },
        },
      }),
    ]);

    if (newMessage.error || confirmation.error) {
      console.error("Resend email error:", newMessage.error ?? confirmation.error);
      return { status: "error", message: "Unable to send your message right now." };
    }

    return { status: "success", message: "Thanks, your message has been sent." };
  } catch (error) {
    console.error("Contact form error:", error);
    return { status: "error", message: "Unable to send your message right now." };
  }
}

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}