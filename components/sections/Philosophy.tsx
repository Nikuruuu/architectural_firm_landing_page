import React from "react";

function Philosophy() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Philosophy
            </p>
          </div>

          <div className="md:col-span-9">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
              We Create
              <br />
              Spaces That Breathe
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
              We create spaces that breathe. Our approach blends raw industrial
              aesthetics with refined minimalism, crafting environments that
              stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
