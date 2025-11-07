import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"
import { Product } from "@/lib/types"
function ProductsComponent({product, index}: { product: Product, index: number }) {
  return (
    <div className='products flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-13 lg:gap-32'>
          <div className={`relative w-full aspect-327/352 sm:aspect-689/352 lg:aspect-540/560 rounded-lg overflow-hidden ${index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}`}>
            <Image
              fill
              src={product.categoryImage.desktop.slice(1)}
              alt={product.name}
              className='w-full h-auto hidden lg:block object-cover object-center'
            />
            <Image
              fill
              src={product.categoryImage.tablet.slice(1)}
              alt={product.name}
              className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
            />
            <Image
              fill
              src={product.categoryImage.mobile.slice(1)}
              alt={product.name}
              className='w-full h-auto block sm:hidden object-cover object-center'
            />
          </div>

          <div className='flex justify-center lg:justify-start lg:items-center'>
            <div className='space-y-8 sm:max-w-143 lg:max-w-111.25 flex flex-col items-center lg:items-start'>
              <p className='text-orange text-sm not-italic font-normal leading-[normal] tracking-[0.625rem] uppercase'>NEW PRODUCT</p>
              <h3 className='text-black text-3xl sm:text-4xl sm:leading-10 font-bold tracking-wide sm:tracking-wider text-center lg:text-left sm:max-w-66'>
                {product.name}
              </h3>
              <p className='text-black/50 justify-start text-base font-normal leading-6 text-center lg:text-left'>
                {product.description}
              </p>
              <Button asChild>
                <Link href={`/${product.category}/${product.slug}`}>
                SEE PRODUCT
                </Link>
              </Button>
            </div>
          </div>
        </div>
  )
}

export default ProductsComponent