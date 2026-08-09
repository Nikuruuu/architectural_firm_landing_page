import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "14", label: "Global Awards" },
];

function AboutUs() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column — Text Content */}
          <div className="flex flex-col justify-between">
            {/* Label & Heading */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                [03] The Firm
              </p>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
                Architects of
                <br />
                Modern Living
              </h2>
            </div>

            {/* Description */}
            <div className="mt-8 max-w-lg space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Founded in 2010, Architectura has established itself as a leader
                in minimalist industrial design. We believe that architecture
                should be honest, functional, and deeply connected to its
                context.
              </p>
              <p>
                Our team of 40+ architects, designers, and thinkers works
                collaboratively to push the boundaries of what is possible. We
                strip away the unnecessary to reveal the essence of space.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10">
              <Separator className="mb-8 bg-neutral-200" />
              <div className="flex gap-16">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-black tracking-tight text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Link */}
            <Link
              href="/team"
              className="group/link mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:text-neutral-500"
            >
              Meet the Team
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>

          {/* Right Column — Image */}
          <div className="relative h-100 sm:h-125 lg:h-162.5">
            {/* Decorative border frame — rendered first so it sits behind the image */}
            <div className="absolute -bottom-4 -left-4 h-2/3 w-2/3 border border-neutral-300 sm:-bottom-6 sm:-left-6" />
            <Image
              src="/About_Us.svg"
              alt="Architects working on blueprints"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
