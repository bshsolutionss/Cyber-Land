"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function LiveDemoFab() {
  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector(".site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button
        type="button"
        className={footerVisible ? "ask-cyber-fab ask-cyber-fab--hidden" : "ask-cyber-fab"}
        onClick={() => setOpen(true)}
        aria-hidden={footerVisible}
        tabIndex={footerVisible ? -1 : 0}
      >
        <MessageCircle className="h-4 w-4" fill="currentColor" strokeWidth={0} />
        Ask Cyber
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="live-demo-panel rounded-2xl bg-white p-5 shadow-2xl"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="heading text-lg font-medium">
                  Get expert shopping help now
                </h3>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mb-4 text-sm text-black/60">{siteConfig.support.hours}</p>
              <a
                href={siteConfig.support.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-full"
              >
                <MessageCircle className="h-4 w-4" />
                Chat with Our Support Team
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
