"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { announcements } from "@/constants/navigation";

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () =>
    setIndex((i) => (i - 1 + announcements.length) % announcements.length);
  const next = () => setIndex((i) => (i + 1) % announcements.length);

  const current = announcements[index];

  const content = (
    <>
      <span className="announcement-text announcement-text--mobile">
        <strong>{current.textMobile}</strong>
      </span>
      <span className="announcement-text announcement-text--desktop">
        <strong>{current.text}</strong>
      </span>
    </>
  );

  return (
    <div className="announcement-bar" role="region" aria-label="Announcements">
      <div className="announcement-inner">
        <button
          type="button"
          onClick={prev}
          className="announcement-fader announcement-fader--left"
          aria-label="Previous announcement"
        >
          <svg
            className="announcement-fader__icon"
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
        </button>

        <div className="announcement-slides">
          <div
            key={index}
            className="announcement-slide"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {current.href ? (
              <Link href={current.href} className="announcement-content">
                {content}
              </Link>
            ) : (
              <div className="announcement-content">{content}</div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          className="announcement-fader announcement-fader--right"
          aria-label="Next announcement"
        >
          <svg
            className="announcement-fader__icon"
            viewBox="0 0 15 14"
            fill="none"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 7.00004H12.75M12.75 7.00004L8.66667 2.91675M12.75 7.00004L8.66667 11.0834"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
