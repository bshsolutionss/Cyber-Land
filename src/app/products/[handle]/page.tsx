import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductByHandle,
  getRelatedProducts,
  products,
} from "@/features/products";
import ProductDetail from "@/features/products/components/ProductDetail";
import ProductSection from "@/components/sections/ProductSection";

type Props = { params: Promise<{ handle: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return { title: "Product not found" };
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  const related = getRelatedProducts(product, 5);

  return (
    <>
      <ProductDetail product={product} />
      {related.length > 0 && (
        <ProductSection title="You may also like" products={related} />
      )}
    </>
  );
}
