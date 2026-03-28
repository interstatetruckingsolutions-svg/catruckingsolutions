"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#why", label: "Why us" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQs" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-white"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="CA Trucking Solutions"
            width={160}
            height={48}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-white md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          className={`absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-brand-navy px-4 py-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 ${
            open ? "flex" : "hidden md:flex"
          }`}
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 rounded-full bg-brand-orange px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orange/90 md:mt-0"
            onClick={() => setOpen(false)}
          >
            Get in compliance
          </Link>
        </nav>
      </div>
    </header>
  );
}
