import React from "react";

function Philosophy() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Label */}
          <div className="md:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Philosophy
            </p>
          </div>

          {/* Statement */}
          <div className="md:col-span-9">
            <p className="text-3xl font-normal leading-[tight] tracking-tighter text-foreground sm:text-4xl lg:text-5xl lg:leading-tight">
              We create spaces that breathe. Our approach blends{" "}
              <strong className="font-bold underline underline-offset-4">
                raw industrial aesthetics
              </strong>{" "}
              with refined minimalism, crafting environments that stand the test
              of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
