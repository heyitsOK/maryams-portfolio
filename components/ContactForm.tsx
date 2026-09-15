
'use client'

function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = (data.get("name") as string) || "";
  const email = (data.get("email") as string) || "";
  const message = (data.get("message") as string) || "";
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  return (
    <form onSubmit={handleContactSubmit} className="space-y-4">
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
              <button
                type="submit"
                className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
              >
                Send message
              </button>
              <p className="text-xs text-ink/40">
                This opens your email app so you can send the message directly.
              </p>
            </form>
  )
}