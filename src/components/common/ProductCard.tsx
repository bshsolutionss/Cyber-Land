"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import type { Product } from "@/types";
import SafeImage from "@/components/common/SafeImage";
import { useCart } from "@/hooks/useCart";
import { calcDiscount, cn, formatPrice } from "@/utils";

type Props = {
  product: Product;
  className?: string;
  priority?: boolean;
};

export default function ProductCard({ product, className, priority }: Props) {
  const { addItem } = useCart();
  const discount = calcDiscount(product.price, product.compareAtPrice);

  const cta = () => {
    if (!product.available) {
      if (product.amazonLink) {
        return (
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm btn-full"
            onClick={(e) => e.stopPropagation()}
          >
            Buy on Amazon
          </a>
        );
      }
      return (
        <Link
          href={`/products/${product.handle}?notify=1`}
          className="btn btn-secondary btn-sm btn-full"
          onClick={(e) => e.stopPropagation()}
        >
          Notify me when it&apos;s available
        </Link>
      );
    }
    if (product.hasVariants) {
      return (
        <Link
          href={`/products/${product.handle}`}
          className="btn btn-primary btn-sm btn-full"
          onClick={(e) => e.stopPropagation()}
        >
          Choose options
        </Link>
      );
    }
    return (
      <button
        type="button"
        className="btn btn-primary btn-sm btn-full"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product);
        }}
      >
        Add to cart
      </button>
    );
  };

  return (
    <article className={cn("product-card group", className)}>
      <div className="product-card__media">
        {!product.available ? (
          <span className="badge-oos">Out of stock</span>
        ) : discount > 0 ? (
          <span className="badge-save">Save {discount}%</span>
        ) : null}

        {product.rating != null && (
          <span className="product-card__rating absolute right-2 top-2 z-[2] rounded bg-white/90 px-1.5 py-0.5 shadow-sm backdrop-blur-sm">
            <Star className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
            {product.rating.toFixed(1)}
          </span>
        )}

        <Link
          href={`/products/${product.handle}`}
          className="absolute inset-0 z-[1]"
        >
          <span className="sr-only">View {product.title}</span>
        </Link>

        <SafeImage
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          priority={priority}
        />

        <div className="absolute bottom-2 left-2 right-2 z-[2] translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100">
          {cta()}
        </div>
      </div>

      <div className="product-card__info">
        <Link href={`/products/${product.handle}`}>
          <h3 className="product-card__title">{product.title}</h3>
        </Link>
        <div className="product-card__price">
          <span className="product-card__price-sale">
            Sale price {formatPrice(product.price)}
          </span>
          {product.compareAtPrice > product.price && (
            <>
              <span className="product-card__price-mrp">
                MRP {formatPrice(product.compareAtPrice)}
              </span>
              {discount > 0 && (
                <span className="product-card__discount">{discount}% OFF</span>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
