import type { Metadata } from "next";
import {
  collectionMeta,
  getProductsByCollection,
} from "@/features/products";
import CollectionView from "@/features/collections/components/CollectionView";

type Props = { params: Promise<{ handle: string }> };

export async function generateStaticParams() {
  return Object.keys(collectionMeta).map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const meta = collectionMeta[handle] ?? {
    title: handle.replace(/-/g, " "),
  };
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;
  const meta = collectionMeta[handle] ?? {
    title: handle.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    description: undefined,
  };
  const items = getProductsByCollection(handle);

  return (
    <CollectionView
      title={meta.title}
      description={meta.description}
      products={items}
      handle={handle}
    />
  );
}
