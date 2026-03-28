"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const lines: string[] = [
      "CA Trucking Solutions — contact request",
      "",
      `Name: ${fd.get("name") ?? ""}`,
      `Company: ${fd.get("company") ?? ""}`,
      `USDOT/MC: ${fd.get("authority") ?? ""}`,
      `Email: ${fd.get("email") ?? ""}`,
      `Phone: ${fd.get("phone") ?? ""}`,
      "",
      "Truck info:",
      String(fd.get("trucks") ?? ""),
      "",
      "Services:",
    ];
    if (fd.get("svc_irp")) lines.push("- IRP");
    if (fd.get("svc_ifta")) lines.push("- IFTA");
    if (fd.get("svc_insurance")) lines.push("- Insurance");
    if (fd.get("svc_other")) lines.push("- Other");
    lines.push("", "Message:", String(fd.get("message") ?? ""));

    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent(
      `Compliance quote request — ${fd.get("name") || "CA Trucking"}`
    );
    window.location.href = `mailto:info@catruckingsolutions.com?subject=${subject}&body=${body}`;
    setStatus("If your email app did not open, email info@catruckingsolutions.com directly.");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-10 max-w-2xl space-y-6"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-brand-navy">
          <span className="mb-1.5 block">Full name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-brand-orange/0 transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          <span className="mb-1.5 block">Company</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          <span className="mb-1.5 block">USDOT / MC #</span>
          <input
            name="authority"
            type="text"
            inputMode="numeric"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          <span className="mb-1.5 block">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="sm:col-span-2 block text-sm font-medium text-brand-navy">
          <span className="mb-1.5 block">Phone</span>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="sm:col-span-2 block text-sm font-medium text-brand-navy">
          <span className="mb-1.5 block">Truck info (year, make, VIN, gross weight)</span>
          <textarea
            name="trucks"
            rows={3}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <fieldset className="sm:col-span-2 rounded-lg border border-slate-200 bg-slate-50/80 p-4">
          <legend className="px-1 text-sm font-medium text-brand-navy">
            Services interested in
          </legend>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-700">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="svc_irp" value="yes" className="rounded border-slate-300 text-brand-orange focus:ring-brand-orange" />
              IRP
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="svc_ifta" value="yes" className="rounded border-slate-300 text-brand-orange focus:ring-brand-orange" />
              IFTA
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="svc_insurance" value="yes" className="rounded border-slate-300 text-brand-orange focus:ring-brand-orange" />
              Insurance
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="svc_other" value="yes" className="rounded border-slate-300 text-brand-orange focus:ring-brand-orange" />
              Other
            </label>
          </div>
        </fieldset>
        <label className="sm:col-span-2 block text-sm font-medium text-brand-navy">
          <span className="mb-1.5 block">Message / questions</span>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
      </div>
      <p className="text-xs text-slate-500">
        Submit opens your email client with your details—connect a secure form endpoint for
        production.
      </p>
      <button
        type="submit"
        className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-orange/90"
      >
        Send request
      </button>
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}
