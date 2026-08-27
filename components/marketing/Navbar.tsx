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
        {/* Logo - Left */}
        <Link href="#top" className="flex items-center">
          <Logo
            width={40}
            height={40}
            className="transition-opacity hover:opacity-80"
          />
        </Link>

        {/* Navigation Links - Middle (Desktop) */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
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

        {/* CTA Button - Right (Desktop) */}
        <div className="hidden md:flex">
          <Button variant="cta" asChild>
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 pt-8">
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
