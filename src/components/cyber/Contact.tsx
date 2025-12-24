'use client';

import { useEffect, useRef, useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(20, 'Please provide details (min 20 chars)'),
  website: z.string().max(0).optional(),
  formStart: z.number(),
});

export type ContactBody = z.infer<typeof schema>;

export default function Contact() {
  const [status, setStatus] = useState<null | {
    type: 'success' | 'error';
    message: string;
  }>(null);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [start, setStart] = useState<number>(0);

  useEffect(() => setStart(Date.now()), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    const form = new FormData(e.currentTarget);
    const body: ContactBody = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      message: String(form.get('message') || ''),
      website: String(form.get('website') || ''),
      formStart: start,
    } as any;

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      setStatus({
        type: 'error',
        message: parsed.error.errors[0]?.message || 'Invalid input',
      });
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json();
      if (!res.ok || !json.success)
        throw new Error(json.message || 'Request failed');
      setStatus({
        type: 'success',
        message: "We received your request. We'll get back within 24h.",
      });
      formRef.current?.reset();
      setStart(Date.now());
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong';
      setStatus({ type: 'error', message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto glass rounded-glass p-6">
          <h2 className="text-3xl font-display font-semibold text-center">
            Request a Security Audit
          </h2>
          <p className="text-center text-muted-foreground mt-2">
            Secure contact form. No spam. No nonsense.
          </p>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="mt-6 space-y-4"
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-glass bg-background/60 border px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-glass bg-background/60 border px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              />
            </div>
            <div className="hidden" aria-hidden>
              <label htmlFor="website" className="block text-sm mb-1">
                Company
              </label>
              <input
                id="website"
                name="website"
                type="text"
                className="w-full rounded-glass bg-background/60 border px-3 py-2"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <input type="hidden" name="formStart" value={start} />
            <div>
              <label htmlFor="message" className="block text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-glass bg-background/60 border px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-glass px-4 py-2 bg-primary text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {submitting ? 'Sending...' : 'Send'}
            </button>
            {status && (
              <div
                role="status"
                className={`text-sm text-center ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
              >
                {status.message}
              </div>
            )}
            <div className="mt-2 flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span
                aria-label="ISO 27001 certified"
                className="px-2 py-1 rounded-full bg-foreground/5"
              >
                ISO 27001
              </span>
              <span
                aria-label="SOC 2 compliant"
                className="px-2 py-1 rounded-full bg-foreground/5"
              >
                SOC 2
              </span>
              <span
                aria-label="GDPR ready"
                className="px-2 py-1 rounded-full bg-foreground/5"
              >
                GDPR
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
