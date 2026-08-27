"use client";

import React from "react";
import { Instagram, Twitter, Linkedin, Clock } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const projectTypes = [
  "Residential",
  "Commercial",
  "Urban Planning",
  "Interior Design",
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1a1a1a] py-24 scroll-mt-20"
    >
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none">
        <h2 className="mt-4 text-[8rem] sm:text-[12rem] lg:text-[16rem] font-black uppercase tracking-tight text-white/3 leading-none">
          Contact
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div className="flex flex-col justify-between gap-12">
            {/* Heading */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                [05] Start a Project
              </p>
              <h2 className="-tracking-[0.04em] text-5xl sm:text-6xl lg:text-7xl font-black uppercase italic leading-[0.95] text-white">
                Let&apos;s Build
                <br />
                Something
                <br />
                Iconic.
              </h2>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-8">
              {/* Visit Us */}
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                  Visit Us
                </p>
                <p className="text-sm leading-relaxed text-neutral-300">
                  123 Industrial Ave, Suite 400
                  <br />
                  New York, NY 10013
                </p>
              </div>

              {/* Contact */}
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                  Contact
                </p>
                <p className="text-sm leading-relaxed text-neutral-300">
                  <a
                    href="mailto:hello@architectura.com"
                    className="transition-colors hover:text-white"
                  >
                    hello@architectura.com
                  </a>
                  <br />
                  <a
                    href="tel:+15551234567"
                    className="transition-colors hover:text-white"
                  >
                    +1 (555) 123-4567
                  </a>
                </p>
              </div>

              {/* Hours */}
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                  <Clock className="inline-block size-3.5 mr-1.5 -mt-0.5" />
                  Hours
                </p>
                <div className="text-sm leading-relaxed text-neutral-300 space-y-0.5">
                  <p>Mon – Fri: 9:00 AM – 5:00 PM</p>
                  <p>Sat – Sun: Closed</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-all hover:border-white hover:text-white"
                  >
                    <social.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-md bg-[#232323] p-6 sm:p-10 lg:p-12">
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* First Name / Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="border-b border-neutral-600 bg-transparent px-0 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="border-b border-neutral-600 bg-transparent px-0 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="border-b border-neutral-600 bg-transparent px-0 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-white"
                />
              </div>

              {/* Project Type */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
                  Project Type
                </label>
                <select
                  className="appearance-none border-b border-neutral-600 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors focus:border-white cursor-pointer"
                  defaultValue="Residential"
                >
                  {projectTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-[#232323] text-white"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="resize-none border-b border-neutral-600 bg-transparent px-0 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-white"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-4 w-full rounded-sm bg-white py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-neutral-200 active:bg-neutral-300"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
