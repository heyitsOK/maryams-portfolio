"use server";

import { Resend } from "resend";

const recipient = "maryamkhan11211@gmail.com";
const recaptchaAction = "contact";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const apiKey = process.env.RESEND_API_KEY;
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaToken = getFormValue(formData, "recaptchaToken");

  if (!apiKey || !recaptchaSecret) {
    return { status: "error", message: "Contact form is not configured." };
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

  if (!recaptchaToken) {
    return { status: "error", message: "Please try again." };
  }

  try {
    const recaptchaResponse = await verifyRecaptcha(
      recaptchaSecret,
      recaptchaToken,
    );

    if (
      !recaptchaResponse.success ||
      recaptchaResponse.action !== recaptchaAction ||
      (recaptchaResponse.score ?? 0) < 0.5
    ) {
      return { status: "error", message: "Please try again." };
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { status: "error", message: "Please try again." };
  }

  const firstName = name.split(/\s+/)[0];
  const messagePreview = message.length > 160
    ? `${message.slice(0, 157)}...`
    : message;
  const resend = new Resend(apiKey);

  try {
    const [newMessage, confirmation] = await Promise.all([
      resend.emails.send({
        from: "noreply@maryamkhanmedia.com",
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
        from: "noreply@maryamkhanmedia.com",
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

type RecaptchaResponse = {
  success: boolean;
  score?: number;
  action?: string;
};

async function verifyRecaptcha(secret: string, token: string) {
  const body = new URLSearchParams({ secret, response: token });
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`reCAPTCHA verification failed with status ${response.status}`);
  }

  return (await response.json()) as RecaptchaResponse;
}