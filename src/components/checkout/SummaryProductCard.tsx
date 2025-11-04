import Image from "next/image"
import Img from "@/assets/cart/image-xx99-mark-two-headphones.jpg";

function SummaryProductCard() {
  return (
    <div className="flex gap-4 items-center font-manrope">
      <div className="size-16 aspect-square relative rounded-lg overflow-hidden">
        <Image src={Img} alt="XX9 MKII" fill className="object-center object-cover"/>
      </div>
      <div className="grow flex justify-between">
        <div className="">
          <p className="text-[0.9375rem]/[166.667%] font-bold ">XX99 MKII</p>
          <p className="text-[0.875rem]/[178.571%] font-bold text-black/50">$ 2,999</p>
        </div>
        <p className="text-[0.9375rem]/[166.667%] font-bold text-black/50">X1</p>
      </div>
    </div>
  )
}

export default SummaryProductCard