"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#services", label: "SERVICES", sectionId: "services" },
  { href: "#projects", label: "PROJECTS", sectionId: "projects" },
  { href: "#about", label: "ABOUT US", sectionId: "about" },
  { href: "#methodology", label: "METHODOLOGY", sectionId: "methodology" },
  { href: "#contact", label: "CONTACT", sectionId: "contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sectionIds = ["top", ...navLinks.map((link) => link.sectionId)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/85 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="#top" className="flex items-center">
          <Logo
            width={40}
            height={40}
            className="transition-opacity hover:opacity-80"
          />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} rounded-none bg-transparent px-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-foreground/75 transition-colors hover:bg-transparent hover:text-foreground`}
                >
                  <Link
                    href={link.href}
                    aria-current={
                      activeSection === link.sectionId ? "page" : undefined
                    }
                    className={
                      activeSection === link.sectionId
                        ? "text-primary"
                        : undefined
                    }
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex">
          <Button variant="cta" asChild>
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>
        </div>

        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-10 rounded-none border border-border/70 bg-background/80"
              >
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(88vw,22rem)] border-l border-border/70 px-6 py-6 shadow-2xl"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-3 pt-12">
                <div className="mb-3">
                  <div className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                    Explore
                  </div>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-semibold tracking-wide transition-colors hover:text-primary/70 ${
                      activeSection === link.sectionId ? "text-primary" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="cta" asChild className="mt-4 w-full">
                  <Link href="#contact">Let&apos;s Talk</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
