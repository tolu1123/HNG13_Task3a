import { Product, IncludeItem } from '@/lib/types';

function ProductFeaturesAndSpecs({product}: { product: Product }) {
  const features = product.features.split('\n').filter(val => val.trim() !== "")
  return (
    <section className="w-full font-manrope my-22 sm:my-30 lg:my-40">
      <div className="container flex flex-col lg:flex-row gap-22 sm:gap-30 lg:gap-[7.81rem]">
        <div className="">
          <div className="lg:max-w-158.75 flex flex-col gap-6 sm:gap-8">
            <h4 className="text-[1.5rem]/[150%] sm:text-[2rem]/[112.5%] tracking-[0.05356rem] sm:tracking-[0.07144rem] font-bold uppercase">FEATURES</h4>
            <div className="flex flex-col gap-6 lg:gap-8 text-black/50">
              <p className="">
                {features[0]}
              </p>
              <p className="">
                {features[1]}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
            <h4 className="text-[1.5rem]/[150%] sm:text-[2rem]/[112.5%] tracking-[0.05356rem] sm:tracking-[0.07144rem] font-bold uppercase">IN THE BOX</h4>
            <div className="">
              {product.includes.map((item) => (
                <FollowComes key={item.item} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeaturesAndSpecs


function FollowComes({item}: {item: IncludeItem}) {
  return (
    <p className="flex gap-6 text-[0.9375rem]/[166.667%]">
      <span className="inline-block text-orange font-bold">{item.quantity}x</span>
      <span className="text-black/50">{item.item}</span>
    </p>
  )
}