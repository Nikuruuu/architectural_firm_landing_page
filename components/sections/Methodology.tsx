import React from "react";
import { Lightbulb, Globe, Compass } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const methods = [
  {
    number: "01",
    title: "Our Innovation",
    description:
      "Leveraging spatial computing and sustainable materials to pioneer designs that redefine how people interact with built environments.",
    icon: Lightbulb,
    iconBg: "bg-black",
    iconColor: "text-white",
  },
  {
    number: "02",
    title: "Our Experience",
    description:
      "With over 20 years of global experience, bringing together diverse perspectives to deliver projects that resonate across cultures.",
    icon: Globe,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    number: "03",
    title: "Our Approach",
    description:
      "A unified continuum: Design, Permitting, Construction — all under one roof for seamless delivery from concept to completion.",
    icon: Compass,
    iconBg: "bg-neutral-100",
    iconColor: "text-neutral-700",
  },
];

function Methodology() {
  return (
    <section id="methodology" className="bg-[#f8f8f8] py-24 lg:py-32">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex h-50 flex-col justify-center border-b border-neutral-200 p-8 lg:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            [04] Methodology
          </p>
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
            How We Build
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method) => {
            const Icon = method.icon;
            return (
              <div key={method.number} className="flex flex-col">
                {/* Icon Area */}
                <div
                  className={`flex h-80 items-center justify-center ${method.iconBg}`}
                >
                  <Icon
                    className={`size-20 ${method.iconColor}`}
                    strokeWidth={1}
                  />
                </div>

                {/* Text Content */}
                <div className="pt-6">
                  <Separator className="mb-6 bg-neutral-300" />
                  <p className="mb-2 text-xs font-medium text-muted-foreground">
                    {method.number}
                  </p>
                  <h3 className="mb-3 text-lg font-black uppercase tracking-wide text-foreground">
                    {method.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Methodology;
