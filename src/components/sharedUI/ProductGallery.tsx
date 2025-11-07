import Image from "next/image";
import { Gallery } from "@/lib/types";

function ProductGallery({productName, gallery}: {productName: string, gallery: Gallery}) {
  return (
    <section className="w-full my-22 sm:my-30 lg:my-40"> 
      <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-4.5 sm:gap-y-5 lg:gap-x-7.5 lg:gap-y-8 px-5">
        <div className="relative col-span-1 aspect-327/174 sm:aspect-auto rounded-lg overflow-hidden">
          <Image
            src={gallery.first.desktop.slice(1)}
            alt={productName}
            className='w-full h-auto hidden lg:block object-cover object-center'
            fill
          />
          <Image
            src={gallery.first.tablet.slice(1)}
            alt={productName}
            className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
            fill
          />
          <Image
            src={gallery.first.mobile.slice(1)}
            alt={productName}
            className='w-full h-auto block sm:hidden object-cover object-center'
            fill
          />
        </div>
        <div className="relative col-span-1 aspect-327/174 sm:aspect-auto rounded-lg overflow-hidden">
          <Image
            src={gallery.second.desktop.slice(1)}
            alt={productName}
            className='w-full h-auto hidden lg:block object-cover object-center'
            fill
          />
          <Image
            src={gallery.second.tablet.slice(1)}
            alt={productName}
            className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
            fill
          />
          <Image
            src={gallery.second.mobile.slice(1)}
            alt={productName}
            className='w-full h-auto block sm:hidden object-cover object-center'
            fill
          />
        </div>
        <div className="relative col-span-1 sm:col-start-2 sm:row-start-1 sm:row-span-2 aspect-327/368 sm:395/368 lg:aspect-635/592 rounded-lg overflow-hidden">
          <Image
            src={gallery.third.desktop.slice(1)}
            alt={productName}
            className='w-full h-auto hidden lg:block object-cover object-center'
            fill
          />
          <Image
            src={gallery.third.tablet.slice(1)}
            alt={productName}
            className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
            fill
          />
          <Image
            src={gallery.third.mobile.slice(1)}
            alt={productName}
            className='w-full h-auto block sm:hidden object-cover object-center'
            fill
          />
        </div>
      </div>
    </section>
  )
}

export default ProductGallery