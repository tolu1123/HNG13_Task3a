export async function generateStaticParams() {
  return [
    { category: "headphones" },
    { category: "earphones" },
    { category: "speakers" },
  ];
}

import Hero from '@/components/headphones/Hero'
import Products from '@/components/headphones/Products'
import DB from "@/assets/db.json";
import { Product } from '@/lib/types';


async function page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params;
  // Serialize JSON data
  const products = JSON.parse(JSON.stringify(DB));
  const categoryData = products.data.filter(
    (item: Product) => item.category === category
  );

  return (
    <main className="w-full min-h-screen">
      <Hero  category={category} />
      <Products products={categoryData}/>
    </main>
  )
}

export default page