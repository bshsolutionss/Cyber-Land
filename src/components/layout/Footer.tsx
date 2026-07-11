"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  footerPolicies,
  footerQuickLinks,
  footerSocials,
} from "@/constants/navigation";
import { cn } from "@/utils";
import BrandLogo from "@/components/common/BrandLogo";

function FooterAccordion({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full md:w-auto md:min-w-[160px] xl:min-w-[200px]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-2 py-2 md:cursor-default md:pointer-events-none"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="heading text-base font-medium md:text-lg lg:text-xl">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform md:hidden",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <div className="site-footer">
        <footer className="page-width relative grid gap-10">
          <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-12">
            <FooterAccordion title="Quick Links">
              <ul className="flex flex-col gap-3 pb-4 pt-2">
                {footerQuickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="reversed-link text-sm leading-tight text-white/90 hover:text-white md:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            <FooterAccordion title="Socials">
              <ul className="flex flex-col gap-3 pb-4 pt-2">
                {footerSocials.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="reversed-link text-sm leading-tight text-white/90 hover:text-white md:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            <FooterAccordion title="Reach out to us:">
              <div className="flex flex-col gap-1 pb-4 pt-2">
                <a
                  href="tel:+919611507877"
                  className="text-sm leading-tight text-white/90 hover:text-white md:text-base"
                >
                  +91 9611507877
                </a>
                <a
                  href="mailto:help@cyberland.com"
                  className="text-sm leading-tight text-white/90 hover:text-white md:text-base"
                >
                  help@cyberland.com
                </a>
              </div>
            </FooterAccordion>
          </div>
        </footer>
      </div>

      <div className="footer-copyright">
        <div className="page-width page-width--full flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
          <div className="credits flex items-center gap-2 text-center text-sm text-white/90">
            <span>©&nbsp;2026</span>
            <BrandLogo inverted className="scale-90" />
          </div>
          <ul className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {footerPolicies.map((p) => (
              <li key={p.label}>
                <Link
                  href={p.href}
                  className="reversed-link text-xs text-white/80 hover:text-white"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
