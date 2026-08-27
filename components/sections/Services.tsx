import React from "react";
import Link from "next/link";
import { ArrowRight, Home, Building2, Map } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    number: "01",
    title: "Residential",
    description:
      "Bespoke living spaces that harmonize with their surroundings. We design homes that are both sanctuaries and statements.",
    items: ["Private Villas", "Apartment Complexes", "Interior Renovations"],
    href: "/services/residential",
  },
  {
    number: "02",
    title: "Commercial",
    description:
      "Workspaces that inspire productivity and collaboration. Innovative designs for offices, retail, and hospitality.",
    items: ["Corporate HQs", "Retail Flagships", "Boutique Hotels"],
    href: "/services/commercial",
  },
  {
    number: "03",
    title: "Urban Planning",
    description:
      "Shaping the future of cities. Sustainable, community-focused master planning for large-scale developments.",
    items: ["Master Planning", "Landscape Design", "Public Spaces"],
    href: "/services/urban-planning",
  },
];

function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Main Grid Container - This creates the continuous vertical lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-neutral-200 border-y border-neutral-200">
          {/* --- COLUMN 1 --- */}
          <div className="flex flex-col group relative">
            {/* Header Area (Top Half) - The border-b creates the continuous horizontal line */}
            <div className="h-50 border-b border-neutral-200 p-8 lg:p-12 flex flex-col justify-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                [01] Expertise
              </p>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
                Our
                <br />
                Services
              </h2>
            </div>

            {/* Card Area (Bottom Half) */}
            <div className="p-8 lg:p-12 grow hover:bg-white transition-colors duration-500">
              <Link
                href={services[0].href}
                className="absolute inset-0 z-10 hidden md:block"
              >
                <span className="sr-only">Explore</span>
              </Link>
              <div className="flex items-start justify-between mb-12">
                <span className="text-xs font-medium text-muted-foreground">
                  {services[0].number}
                </span>
                <Home
                  strokeWidth={3}
                  className="size-6 text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-black"
                />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wide text-foreground mb-6">
                {services[0].title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-10 min-h-20">
                {services[0].description}
              </p>
              <Separator className="bg-neutral-200 mb-8" />
              <ul className="space-y-4">
                {services[0].items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-wide text-foreground opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="underline underline-offset-4">
                  Explore {services[0].title}
                </span>
                <ArrowRight className="ml-2 size-4" />
              </div>
            </div>
          </div>

          {/* --- COLUMN 2 --- */}
          <div className="flex flex-col group relative">
            {/* Empty Header Space */}
            <div className="h-50 border-b border-neutral-200 p-8 lg:p-12"></div>

            {/* Card Area */}
            <div className="p-8 lg:p-12 grow hover:bg-white transition-colors duration-500">
              <Link
                href={services[1].href}
                className="absolute inset-0 z-10 hidden md:block"
              >
                <span className="sr-only">Explore</span>
              </Link>
              <div className="flex items-start justify-between mb-12">
                <span className="text-xs font-medium text-muted-foreground">
                  {services[1].number}
                </span>
                <Building2
                  strokeWidth={3}
                  className="size-6 text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-black"
                />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wide text-foreground mb-6">
                {services[1].title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-10 min-h-20">
                {services[1].description}
              </p>
              <Separator className="bg-neutral-200 mb-8" />
              <ul className="space-y-4">
                {services[1].items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-wide text-foreground opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="underline underline-offset-4">
                  Explore {services[1].title}
                </span>
                <ArrowRight className="ml-2 size-4" />
              </div>
            </div>
          </div>

          {/* --- COLUMN 3 --- */}
          <div className="flex flex-col group relative">
            {/* Link Header Space */}
            <div className="h-50 border-b border-neutral-200 p-8 lg:p-12 flex items-center justify-start md:justify-end">
              <Link
                href="/services"
                className="relative z-20 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors"
              >
                Full Service List <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Card Area */}
            <div className="p-8 lg:p-12 grow hover:bg-white transition-colors duration-500">
              <Link
                href={services[2].href}
                className="absolute inset-0 z-10 hidden md:block"
              >
                <span className="sr-only">Explore</span>
              </Link>
              <div className="flex items-start justify-between mb-12">
                <span className="text-xs font-medium text-muted-foreground">
                  {services[2].number}
                </span>
                <Map
                  strokeWidth={3}
                  className="size-6 text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-black"
                />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wide text-foreground mb-6">
                {services[2].title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-10 min-h-20">
                {services[2].description}
              </p>
              <Separator className="bg-neutral-200 mb-8" />
              <ul className="space-y-4">
                {services[2].items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-wide text-foreground opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="underline underline-offset-4">
                  Explore {services[2].title}
                </span>
                <ArrowRight className="ml-2 size-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
