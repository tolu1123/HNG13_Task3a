import data from "@/assets/db.json";
import type { Product } from "@/lib/types";

export async function generateStaticParams() {
  const products = (data.data as Product[]);

  return products.map((product) => ({
    category: product.category,
    product: product.slug,
  }));
}


import AppHeader from "@/components/AppHeader";
import ProductFeaturesAndSpecs from "@/components/sharedUI/ProductFeaturesAndSpecs";
import ProductGallery from "@/components/sharedUI/ProductGallery";
import ProductHero from "@/components/sharedUI/ProductHero";
import ProductRecommendation from "@/components/sharedUI/ProductRecommendation";
import { notFound } from "next/navigation";
type Category = "earphones" | "headphones" | "speakers";

function isCategory(v: string): v is Category {
  return v === "earphones" || v === "headphones" || v === "speakers";
}

async function page({
  params,
}: {
  params: Promise<{ category: Category, product: string }>;
}) {
  const { category, product } = await params;

  const raw = data.data.find(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() &&
      p.slug.toLowerCase() === product.toLowerCase()
  );

  // runtime check to satisfy TypeScript's Product type
  if (!raw || !isCategory(raw.category)) {
    notFound();
  }

  const productData = raw as Product;

  return (
    <main className='w-full'>
      <AppHeader />
      <ProductHero product={productData} />
      <ProductFeaturesAndSpecs product={productData} />
      <ProductGallery productName={productData.name} gallery={productData.gallery} />
      <ProductRecommendation others={productData.others} />
    </main>
  );
}

export default page;
