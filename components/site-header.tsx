'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { ArrowRight, ArrowLeftRight, BarChart2, BookOpen, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Knowledge Hub', icon: BookOpen, href: '/' },
  { label: 'Stats', icon: BarChart2, href: 'https://www.eurooo.xyz/stats', external: true },
  { label: 'Swap', icon: ArrowLeftRight, href: 'https://www.swap.eurooo.xyz/', external: true },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 items-center justify-between px-4">

        {/* Logo */}
        <a href="https://www.eurooo.xyz/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/images/logo-eurooo-new.png"
            alt="eurooo.xyz"
            width={56}
            height={56}
            className="h-10 w-10 md:h-14 md:w-14 rounded-lg object-cover"
          />
          <span className="text-xl font-semibold tracking-tight">eurooo.xyz</span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-2">

          <ThemeToggle />

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.swap.eurooo.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 h-9 rounded-md px-3 text-sm font-medium border border-border bg-background hover:bg-secondary/50 transition-colors"
            >
              Swap <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.eurooo.xyz/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 h-9 rounded-md px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 transition-colors"
            >
              Earn <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Hamburger */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block transition-all duration-200 ${open ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`}>
                <Menu className="h-5 w-5" />
              </span>
              <span className={`block transition-all duration-200 ${open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute'}`}>
                <X className="h-5 w-5" />
              </span>
            </button>

            {/* Desktop floating dropdown */}
            <div
              className={`hidden md:block absolute top-full right-0 mt-2 w-52 rounded-xl border border-border/60 bg-background shadow-xl shadow-black/10 overflow-hidden transition-all duration-200 ease-out origin-top-right ${
                open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
              }`}
            >
              <nav className="flex flex-col gap-0.5 p-2">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2.5 rounded-lg hover:bg-secondary/50"
                      onClick={() => setOpen(false)}
                    >
                      <link.icon className="h-4 w-4 shrink-0" />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2.5 rounded-lg hover:bg-secondary/50"
                      onClick={() => setOpen(false)}
                    >
                      <link.icon className="h-4 w-4 shrink-0" />
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile full-width dropdown */}
      <div
        className={`md:hidden border-border/40 bg-background/95 backdrop-blur overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100 border-t' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2.5 rounded-lg hover:bg-secondary/50"
                onClick={() => setOpen(false)}
              >
                <link.icon className="h-4 w-4 shrink-0" />
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2.5 rounded-lg hover:bg-secondary/50"
                onClick={() => setOpen(false)}
              >
                <link.icon className="h-4 w-4 shrink-0" />
                {link.label}
              </Link>
            )
          )}
          {/* Mobile CTAs */}
          <div className="flex items-center gap-2 pt-2 border-t border-border/40 mt-1">
            <a
              href="https://www.swap.eurooo.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1 h-9 rounded-md px-3 text-sm font-medium border border-border bg-background hover:bg-secondary/50 transition-colors"
              onClick={() => setOpen(false)}
            >
              Swap <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.eurooo.xyz/app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1 h-9 rounded-md px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={() => setOpen(false)}
            >
              Earn <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
