"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type Category = "all" | "residential" | "commercial";

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Loft",
    category: "residential" as Category,
    image: "/Proj_Res_v1.svg",
    year: "2025",
  },
  {
    id: 2,
    title: "Crystal Pavilion",
    category: "commercial" as Category,
    image: "/Proj_Res_v2.svg",
    year: "2024",
  },
  {
    id: 3,
    title: "Urban Facade Complex",
    category: "commercial" as Category,
    image: "/Proj_Res_v3.svg",
    year: "2024",
  },
  {
    id: 4,
    title: "Skyline Terrace",
    category: "residential" as Category,
    image: "/Proj_Res_v4.svg",
    year: "2023",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[#111111] py-24">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              [02] Portfolio
            </p>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white sm:text-6xl">
              Selected Works
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            {filters.map((f) => (
              <Button
                key={f.value}
                variant="cta"
                size="sm"
                onClick={() => setActiveFilter(f.value)}
                className={`rounded-none border-neutral-500 text-xs font-bold uppercase tracking-widest ${
                  activeFilter === f.value
                    ? "bg-white text-black border-white hover:bg-white hover:text-black"
                    : "text-white hover:bg-white hover:text-black"
                }`}
              >
                {f.label}
              </Button>
            ))}
          </div>
        </div>

        <Separator className="mt-8 mb-10 bg-neutral-700" />

        {/* Bento Grid */}
        <div className="grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => {
            // Bento sizing: first item tall, last item wide
            const spanClass =
              index === 0
                ? "row-span-2"
                : index === filtered.length - 1 && filtered.length > 2
                  ? "sm:col-span-2"
                  : "";

            return (
              <div
                key={project.id}
                className={`group relative cursor-pointer overflow-hidden ${spanClass}`}
              >
                {/* Image with grayscale → color on hover */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale-0 md:grayscale transition-all duration-700 ease-in-out md:group-hover:grayscale-0 md:group-hover:scale-105"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />

                {/* Project info (visible on hover) */}
                <div className="absolute inset-x-0 bottom-0 translate-y-0 md:translate-y-4 p-6 opacity-100 md:opacity-0 transition-all duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-neutral-300">
                    {project.category} — {project.year}
                  </p>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Button
            variant="cta"
            size="lg"
            className="rounded-none border-neutral-500 text-white hover:bg-white hover:text-black text-xs font-bold uppercase tracking-widest px-12"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
