import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Hero_v1.svg"
        alt="Architectural design"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 py-12 lg:px-16 lg:py-16">
        {/* Main Content */}
        <div className="flex flex-col gap-8">
          {/* Tagline - above heading */}
          <div className="flex items-center gap-3">
            <div className="h-6 w-0.75 bg-white" />
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-white">
              Premium Industrial Design
            </p>
          </div>

          <h1 className="-tracking-[0.04em] text-6xl font-black uppercase italic leading-[0.9] text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Form
            <br />
            Follows
            <br />
            Function
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="cta-fill"
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link href="/services" className="flex items-center gap-2">
                View Services <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="cta"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/projects">Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Bottom - Scroll Indicator */}
        <div className="flex items-end mt-12">
          <p className="rotate-90 text-xs font-medium uppercase tracking-[0.2em] text-white">
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
