import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Hero_v1.svg"
        alt="Architectural design"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/35 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 py-12 lg:px-16 lg:py-16">
        {/* Main Content */}
        <div className="flex max-w-4xl flex-col gap-6 sm:gap-8">
          {/* Tagline - above heading */}
          <div className="flex items-center gap-3">
            <div className="h-6 w-px bg-white/80" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/90 sm:text-sm">
              Premium Industrial Design
            </p>
          </div>

          <h1 className="-tracking-[0.04em] text-5xl font-black uppercase italic leading-[0.92] text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Form
            <br />
            Follows
            <br />
            Function
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            We design bold, enduring spaces that balance precision, warmth, and
            material honesty.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="cta-fill"
              asChild
              size="lg"
              className="w-full bg-white text-black hover:bg-white/90 sm:w-auto"
            >
              <Link href="#services" className="flex items-center gap-2">
                View Services <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="cta"
              size="lg"
              asChild
              className="w-full border-white text-white hover:bg-white hover:text-black sm:w-auto"
            >
              <Link href="#projects">Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Bottom - Scroll Indicator */}
        <div className="mt-12 flex items-end">
          <Link
            href="#services"
            className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition-colors hover:text-white"
          >
            <span>Scroll</span>
            <span className="h-10 w-px bg-white/40 transition-colors group-hover:bg-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
