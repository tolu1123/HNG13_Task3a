import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import XX9Mark1Lg from "@/assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import XX9Mark1Md from "@/assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import XX9Mark1Sm from "@/assets/shared/mobile/image-xx99-mark-one-headphones.jpg";

function ProductRecommendation() {
  return (
    <section className='w-full font-manrope'>
      <div className='container flex flex-col gap-10 sm:gap-14 lg:gap-16'>
        <h4 className='text-center text-[1.5rem]/[150%] sm:text-[2rem]/[112.5%] tracking-[0.05356rem] sm:tracking-[0.07144rem] font-bold uppercase'>YOU MAY ALSO LIKE</h4>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-3 lg:gap-7.5'>
          <RecommendationCard />
          <RecommendationCard />
          <RecommendationCard />
        </div>
      </div>
    </section>
  );
}

export default ProductRecommendation;

function RecommendationCard() {
  return (
    <div className='flex flex-col gap-8 sm:gap-10'>
      <div className='relative aspect-327/120 sm:aspect-223/318 lg:aspect-350/318 rounded-lg overflow-hidden'>
        <Image
          src={XX9Mark1Lg}
          alt='XX99 MARK II headphones'
          className='w-full h-auto hidden lg:block object-cover object-center'
          fill
        />
        <Image
          src={XX9Mark1Md}
          alt='XX99 MARK II headphones'
          className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
          fill
        />
        <Image
          src={XX9Mark1Sm}
          alt='XX99 MARK II headphones'
          className='w-full h-auto block sm:hidden object-cover object-center'
          fill
        />
      </div>
      <div className='flex flex-col gap-8 items-center'>
        <h6 className='text-[1.5rem] font-bold tracking-[0.10713rem] uppercase'>XX9 Mark I</h6>
        <Button asChild>
          <Link href='#'>SEE PRODUCT</Link>
        </Button>
      </div>
    </div>
  );
}
