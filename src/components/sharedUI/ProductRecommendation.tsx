import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import data from "@/assets/db.json";
import { Product, OtherProduct } from "@/lib/types";

const products = data.data as Product[];

export function addCategoryToOthers(others: OtherProduct[]) {
  return others.map((other) => {
    const found = products.find((p) => p.slug === other.slug);

    return {
      ...other,
      category: found ? found.category : "unknown",
    };
  });
}


function ProductRecommendation({others}: {others: OtherProduct[]}) {
  const enrichedOthers = addCategoryToOthers(others);
  return (
    <section className='w-full font-manrope'>
      <div className='container flex flex-col gap-10 sm:gap-14 lg:gap-16'>
        <h4 className='text-center text-[1.5rem]/[150%] sm:text-[2rem]/[112.5%] tracking-[0.05356rem] sm:tracking-[0.07144rem] font-bold uppercase'>YOU MAY ALSO LIKE</h4>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-3 lg:gap-7.5'>
          {enrichedOthers.map(other => <RecommendationCard key={other.slug} other={other} />)}
        </div>
      </div>
    </section>
  );
}

export default ProductRecommendation;

function RecommendationCard({other}: {other: OtherProduct & {category: string}}) {
  return (
    <div className='flex flex-col gap-8 sm:gap-10'>
      <div className='relative aspect-327/120 sm:aspect-223/318 lg:aspect-350/318 rounded-lg overflow-hidden'>
        <Image
          src={other.image.desktop.slice(1)}
          alt={other.name}
          className='w-full h-auto hidden lg:block object-cover object-center'
          fill
        />
        <Image
          src={other.image.tablet.slice(1)}
          alt={other.name}
          className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
          fill
        />
        <Image
          src={other.image.mobile.slice(1)}
          alt={other.name}
          className='w-full h-auto block sm:hidden object-cover object-center'
          fill
        />
      </div>
      <div className='flex flex-col gap-8 items-center'>
        <h6 className='text-[1.5rem] font-bold tracking-[0.10713rem]'>{other.name}</h6>
        <Button asChild>
          <Link href={`/${other.category}/${other.slug}`}>SEE PRODUCT</Link>
        </Button>
      </div>
    </div>
  );
}
