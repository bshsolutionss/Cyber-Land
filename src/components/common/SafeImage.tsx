"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/utils";

const FALLBACK_SRC = "/images/product-fallback.svg";

type SafeImageProps = Omit<ImageProps, "onError" | "src"> & {
  src: string;
  fallbackSrc?: string;
};

/**
 * next/image wrapper with automatic fallback when remote/local src fails.
 */
export default function SafeImage({
  src,
  fallbackSrc = FALLBACK_SRC,
  alt,
  className,
  ...props
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);
  const [failed, setFailed] = useState(false);

  const isRemote =
    typeof currentSrc === "string" &&
    (currentSrc.startsWith("http://") || currentSrc.startsWith("https://"));

  return (
    <Image
      {...props}
      src={failed ? fallbackSrc : currentSrc}
      alt={alt}
      className={cn(className)}
      // Shopify CDN + remote assets load more reliably without optimizer
      unoptimized={isRemote || props.unoptimized}
      onError={() => {
        if (!failed) {
          setFailed(true);
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
