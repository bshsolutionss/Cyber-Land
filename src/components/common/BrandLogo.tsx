import Link from "next/link";
import { cn } from "@/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  inverted?: boolean;
};

/**
 * Custom geometric wordmark styled like the Kreo. brand identity:
 * bold rounded geometric font (Comfortaa), tight tracking, accent dot.
 */
export default function BrandLogo({
  className,
  href = "/",
  inverted = false,
}: BrandLogoProps) {
  const mark = (
    <span
      className={cn(
        "brand-logo",
        inverted && "brand-logo--inverted",
        className
      )}
      aria-label="Cyber Land"
    >
      <span className="brand-logo__text">
        cyber land
      </span>
      <span className="brand-logo__dot" aria-hidden>
        .
      </span>
    </span>
  );

  if (!href) return mark;

  return (
    <Link href={href} className="site-logo-link brand-logo-link" aria-label="Cyber Land home">
      {mark}
    </Link>
  );
}
