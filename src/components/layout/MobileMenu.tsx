"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav, mobileNavExtras } from "@/constants/navigation";
import { useUI } from "@/hooks/useUI";

const EASE_DRAWER: [number, number, number, number] = [0.7, 0, 0.2, 1];
const EASE_PRIMARY: [number, number, number, number] = [0.3, 1, 0.3, 1];

export default function MobileMenu() {
  const { mobileMenuOpen, closeMobileMenu } = useUI();
  const [submenu, setSubmenu] = useState<{
    label: string;
    children: { label: string; href: string }[];
  } | null>(null);

  useEffect(() => {
    if (!mobileMenuOpen) setSubmenu(null);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const close = () => {
    closeMobileMenu();
    setSubmenu(null);
  };

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          <motion.div
            className="drawer-overlay drawer-overlay--start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: EASE_DRAWER }}
            onClick={close}
          />
          <motion.aside
            className="menu-drawer drawer-panel drawer-panel--start"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: EASE_DRAWER }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="menu-drawer__header">
              {submenu ? (
                <button
                  type="button"
                  className="menu-drawer__back"
                  onClick={() => setSubmenu(null)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 14"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.33333 2.91675L2.25 7.00004M2.25 7.00004L6.33333 11.0834M2.25 7.00004H12.75"
                    />
                  </svg>
                  <span>{submenu.label}</span>
                </button>
              ) : (
                <span className="menu-drawer__title" />
              )}
              <button
                type="button"
                className="menu-drawer__close"
                onClick={close}
                aria-label="Close"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  fill="none"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15L15 5M5 5L15 15"
                  />
                </svg>
              </button>
            </div>

            <nav className="menu-drawer__nav" role="navigation">
              <AnimatePresence mode="wait" initial={false}>
                {!submenu ? (
                  <motion.ul
                    key="main"
                    className="menu-drawer__list"
                    initial={{ x: 0, opacity: 1 }}
                    exit={{ x: -24, opacity: 0 }}
                    transition={{ duration: 0.375, ease: EASE_PRIMARY }}
                  >
                    {mainNav.map((item) => (
                      <li key={item.label}>
                        {item.children?.length ? (
                          <button
                            type="button"
                            className="menu-drawer__item menu-drawer__item--parent"
                            onClick={() =>
                              setSubmenu({
                                label: item.label,
                                children: item.children!,
                              })
                            }
                          >
                            {item.label}
                            <svg
                              className="menu-drawer__chevron"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              aria-hidden
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 4l6 6-6 6"
                              />
                            </svg>
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className="menu-drawer__item"
                            onClick={close}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                    {mobileNavExtras.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="menu-drawer__item"
                          onClick={close}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                ) : (
                  <motion.ul
                    key="sub"
                    className="menu-drawer__list"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 40, opacity: 0 }}
                    transition={{ duration: 0.375, ease: EASE_PRIMARY }}
                  >
                    {submenu.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="menu-drawer__item"
                          onClick={close}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </nav>

            <div className="menu-drawer__footer">
              <Link
                href="/account/login"
                className="btn btn-primary menu-drawer__footer-btn"
                onClick={close}
              >
                Log in
              </Link>
              <Link
                href="/pages/track-order"
                className="btn btn-primary menu-drawer__footer-btn"
                onClick={close}
              >
                Track Order
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
