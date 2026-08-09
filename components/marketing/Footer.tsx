import React from "react";
import Link from "next/link";
import { Logo } from "@/components/marketing/Logo";

const links = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-neutral-800">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between sm:gap-0">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Logo
              width={32}
              height={32}
              variant="light"
              className="text-white"
            />
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            &copy; 2026 Architectura Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
