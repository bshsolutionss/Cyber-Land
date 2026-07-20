import HeroSlider from "@/components/sections/HeroSlider";
import CategoryGrid from "@/components/sections/CategoryGrid";
import ProductSection from "@/components/sections/ProductSection";
import ShopTheLook from "@/components/sections/ShopTheLook";
// import InstagramSection from "@/components/sections/InstagramSection";
import { getProductsByCollection, products } from "@/features/products";

export default function HomePage() {
  const keyboards = getProductsByCollection("mechanical-keyboards");
  const mice = getProductsByCollection("gaming-mouse-and-mousepad");
  const audio = getProductsByCollection("audio-video-and-lights");
  const bigDeals = products
    .filter((p) => {
      const d = Math.round(
        ((p.compareAtPrice - p.price) / p.compareAtPrice) * 100
      );
      return d >= 45;
    })
    .slice(0, 5);

  return (
    <>
      <HeroSlider />
      <CategoryGrid />
      <ProductSection title="Gaming Keyboards" products={keyboards} />
      <ProductSection title="Gaming Mouse" products={mice} />
      <ShopTheLook />
      <ProductSection title="Audio and Video" products={audio} />
      <ProductSection title="Big Deals:" products={bigDeals} />
      {/* <InstagramSection /> */}
    </>
  );
}
