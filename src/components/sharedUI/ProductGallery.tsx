import Image from "next/image";

import Gal1Lg from "@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
import Gal1Md from "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"
import Gal1Sm from "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"

import Gal2Lg from "@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
import Gal2Md from "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg"
import Gal2Sm from "@/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg"

import Gal3Lg from "@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
import Gal3Md from "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg"
import Gal3Sm from "@/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"


function ProductGallery() {
  return (
    <section className="w-full my-22 sm:my-30 lg:my-40"> 
      <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-4.5 sm:gap-y-5 lg:gap-x-7.5 lg:gap-y-8 px-5">
        <div className="relative col-span-1 aspect-327/174 sm:aspect-auto rounded-lg overflow-hidden">
          <Image
            src={Gal1Lg}
            alt='XX99 MARK II headphones'
            className='w-full h-auto hidden lg:block object-cover object-center'
            fill
          />
          <Image
            src={Gal1Md}
            alt='XX99 MARK II headphones'
            className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
            fill
          />
          <Image
            src={Gal1Sm}
            alt='XX99 MARK II headphones'
            className='w-full h-auto block sm:hidden object-cover object-center'
            fill
          />
        </div>
        <div className="relative col-span-1 aspect-327/174 sm:aspect-auto rounded-lg overflow-hidden">
          <Image
            src={Gal2Lg}
            alt='XX99 MARK II headphones'
            className='w-full h-auto hidden lg:block object-cover object-center'
            fill
          />
          <Image
            src={Gal2Md}
            alt='XX99 MARK II headphones'
            className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
            fill
          />
          <Image
            src={Gal2Sm}
            alt='XX99 MARK II headphones'
            className='w-full h-auto block sm:hidden object-cover object-center'
            fill
          />
        </div>
        <div className="relative col-span-1 sm:col-start-2 sm:row-start-1 sm:row-span-2 aspect-327/368 sm:395/368 lg:aspect-635/592 rounded-lg overflow-hidden">
          <Image
            src={Gal3Lg}
            alt='XX99 MARK II headphones'
            className='w-full h-auto hidden lg:block object-cover object-center'
            fill
          />
          <Image
            src={Gal3Md}
            alt='XX99 MARK II headphones'
            className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
            fill
          />
          <Image
            src={Gal3Sm}
            alt='XX99 MARK II headphones'
            className='w-full h-auto block sm:hidden object-cover object-center'
            fill
          />
        </div>
      </div>
    </section>
  )
}

export default ProductGallery