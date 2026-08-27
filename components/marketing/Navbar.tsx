import React from "react";
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
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About Us" },
  { href: "#methodology", label: "Methodology" },
];

function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Logo
            width={32}
            height={32}
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
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex">
          <Button
            variant="cta"
            size="sm"
            asChild
            className="min-w-36 border-foreground/80 px-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em]"
          >
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
                    className="border-b border-border/50 pb-4 text-2xl font-semibold uppercase tracking-[0.14em] transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  variant="cta"
                  asChild
                  className="mt-6 w-full border-foreground/80 text-sm font-semibold uppercase tracking-[0.18em]"
                >
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
