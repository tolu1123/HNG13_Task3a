import { Button } from "@/components/ui/button";
import { BiPlus, BiMinus } from "@/icons";
import { Input } from "@/components/ui/input";

function CounterButton({ quantity, increment, decrement }: { quantity: number; increment: () => void; decrement: () => void; }) {
  
  return (
    <Button className="w-fit! bg-gray hover:bg-gray p-0!">
      <span className="inline-flex justify-center items-center h-full text-black/25 hover:text-orange py-2 pl-4 pr-0.5" onClick={decrement}>
        <BiMinus />
      </span>
      <Input value={quantity} readOnly max={10} className="w-fit! aspect-square h-[calc(100%-0.5rem)] border-none border-0! shadow-none! outline-none caret-orange text-black" />
      <span className="inline-flex text-black/25 hover:text-orange py-2 pl-0.5 pr-4" onClick={increment}>
        <BiPlus />
      </span>
    </Button>
  )
}

export default CounterButton