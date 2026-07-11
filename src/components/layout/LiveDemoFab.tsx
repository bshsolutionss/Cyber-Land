"use client";

import { useState } from "react";
import { MessageCircle, Video, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function LiveDemoFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="live-video-tab"
        onClick={() => setOpen(true)}
        aria-label="Live Product Demo"
      >
        <Video className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <button
        type="button"
        className="ask-krea-fab"
        onClick={() => setOpen(true)}
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
              className="fixed bottom-24 right-5 z-[52] w-[min(100vw-2rem,340px)] rounded-2xl bg-white p-5 shadow-2xl"
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
              <p className="mb-4 text-sm text-black/60">Mon - Sat : 10am - 7pm</p>
              <a
                href="https://wa.me/919611507877"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-full"
              >
                <MessageCircle className="h-4 w-4" />
                Chat with Our Support Team
              </a>
              <p className="mt-3 text-center text-xs font-medium text-[#685aca]">
                Live Video Shopping
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
