import Image from "next/image"
import { CartItem } from "@/hooks/useCartStore";

function SummaryProductCard({ item}: { item: CartItem}) {
  return (
    <div className="flex gap-4 items-center font-manrope">
      <div className="size-16 aspect-square relative rounded-lg overflow-hidden">
        <Image src={item.image.slice(1)} alt={item.name} fill className="object-center object-cover"/>
      </div>
      <div className="grow flex justify-between">
        <div className="">
          <p className="text-[0.9375rem]/[166.667%] font-bold ">{item.name}</p>
          <p className="text-[0.875rem]/[178.571%] font-bold text-black/50">${item.price.toFixed(2)}</p>
        </div>
        <p className="text-[0.9375rem]/[166.667%] font-bold text-black/50">X{item.quantity}</p>
      </div>
    </div>
  )
}

export default SummaryProductCard