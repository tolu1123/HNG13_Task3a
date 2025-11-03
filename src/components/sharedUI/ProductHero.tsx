import Image from 'next/image';
import { Button } from '@/components/ui/button';

import XX9Mark2Lg from '@/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import XX9Mark2Md from '@/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg';
import XX9Mark2Sm from '@/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';
import CounterButton from '@/components/sharedUI/CounterButton';
function ProductHero() {
  return (
    <section className='font-manrope'>
      <div className='container products flex flex-col sm:flex-row lg:grid lg:grid-cols-2 gap-8 sm:gap-[4.31rem] lg:gap-[7.81rem] sm:items-center'>
        <div className='relative w-full aspect-square sm:aspect-281/480 lg:aspect-540/560 rounded-lg overflow-hidden '>
          <Image
            src={XX9Mark2Lg}
            alt='XX99 MARK II headphones'
            className='w-full h-auto hidden lg:block object-cover object-center'
          />
          <Image
            src={XX9Mark2Md}
            alt='XX99 MARK II headphones'
            className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
          />
          <Image
            src={XX9Mark2Sm}
            alt='XX99 MARK II headphones'
            className='w-full h-auto block sm:hidden object-cover object-center'
          />
        </div>

        <div className='w-full flex justify-start lg:items-center'>
          <div className='flex flex-col items-start'>
            <p className='text-orange text-sm sm:text-[0.75rem] lg:text-sm not-italic font-normal leading-[normal] tracking-[0.625rem] sm:tracking-[0.53569rem] lg:tracking-[0.625rem] uppercase'>
              NEW PRODUCT
            </p>
            <h3 className='text-black  text-[1.75rem] leading-[100%] sm:leading-[114.286%] lg:text-[2.5rem]/[110%] font-bold uppercase tracking-[0.0625rem] sm:tracking-[0.08931rem] text-left mt-4 mb-8'>
              XX99 Mark II Headphones
            </h3>
            <p className='text-black/50 justify-start text-[0.9375rem]/[166.667%] font-normal text-left '>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p className='uppercase font-bold tracking-[0.08038rem] text-[1.125rem] text-black mt-8 mb-[2.94rem]'>
              $2,999
            </p>
            <div className="flex flex-row gap-4 flex-wrap">
              <CounterButton />
              <Button>ADD TO CART</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductHero;
