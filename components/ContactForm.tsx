
'use client'

import Script from "next/script";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready(callback: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
}

async function getRecaptchaToken() {
  if (!recaptchaSiteKey || !window.grecaptcha) {
    return null;
  }

  return new Promise<string | null>((resolve) => {
    window.grecaptcha?.ready(() => {
      window.grecaptcha
        ?.execute(recaptchaSiteKey, { action: "contact" })
        .then(resolve)
        .catch(() => resolve(null));
    });
  });
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    async (previousState: ContactFormState, formData: FormData) => {
      const recaptchaToken = await getRecaptchaToken();

      if (!recaptchaToken) {
        return { status: "error", message: "Please try again." } as ContactFormState;
      }

      formData.set("recaptchaToken", recaptchaToken);
      return sendContactMessage(previousState, formData);
    },
    initialState,
  );

  return (
    <>
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      )}
      <form action={formAction} className="space-y-4">
      <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-purple"
              />
      <input
                name="email"
                type="email"
                placeholder="Email address"
                required
                className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-purple"
              />
      <textarea
                name="message"
                rows={4}
                placeholder="Tell me about the story…"
                required
                className="w-full resize-none rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-purple"
              />
      <SubmitButton />
      {state.status === "success" && (
        <p className="text-sm text-botanical" role="status">
          {state.message}
        </p>
      )}
      {state.status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {state.message}
        </p>
      )}
      </form>
    </>
  )
}