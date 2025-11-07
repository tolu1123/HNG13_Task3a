"use client";

// import { useEffect, useState } from "react";
import useCartStore from "@/hooks/useCartStore";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { DialogClose } from "@radix-ui/react-dialog";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { CartItem } from "@/hooks/useCartStore";
import Cart from "@/assets/carts.svg";

function CartDialog() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-transparent hover:bg-transparent focus:bg-transparent p-0! flex justify-end'>
          <Image src={Cart} alt='Cart' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] font-manrope'>
        <DialogHeader className='mt-7'>
          <div className='flex flex-row justify-between'>
            <DialogTitle>
              Cart {items.length > 0 && `(${items.length})`}
            </DialogTitle>
            {items.length > 0 && (
              <p
                className='text-orange underline cursor-pointer'
                onClick={clearCart}
              >
                Remove all
              </p>
            )}
          </div>
          <DialogDescription className='sr-only'>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        {items.length > 0 ? (
          <div className='flex flex-col gap-6'>
            {items.map((item) => (
              <CartItemContainer key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <p className='text-center my-8'>Your cart is empty.</p>
        )}
        {items.length > 0 && (
          <div className='flex justify-between items-center'>
            <p className='text-black/50'>Total</p>
            <p className='font-bold text-[1.125rem]'>${total.toFixed(2)}</p>
          </div>
        )}
        {items.length > 0 && (
          <DialogFooter className="w-full">
            {/* <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose> */}
            <Button asChild className="w-full">
              <Link href='/checkout'>Checkout</Link>
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default CartDialog;

function CartItemContainer({ item }: { item: CartItem }) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  return (
    <div className='flex items-center justify-between'>
      <div className='size-16 relative rounded-lg overflow-hidden'>
        <Image
          fill
          src={item.image.slice(1)}
          alt={item.name}
          className='object-fit object-cover'
        />
      </div>
      <div className='grow flex items-center justify-between ml-4'>
        <div className=''>
          <p className='text-[0.9375rem]/[166.67%] font-bold'>{item.name}</p>
          <p className='text-black/50 text-[0.875rem]/[178.57%]'>
            ${item.price.toFixed(2)}
          </p>
        </div>
        <div className='flex items-center gap-2 bg-gray px-2 py-1'>
          <button
            onClick={() =>
              updateQuantity(item.slug, Math.max(1, item.quantity - 1))
            }
            className='p-1 hover:text-orange-500 text-black/25'
          >
            <Minus className='h-3 w-3' />
          </button>
          <span className='w-5 text-center text-sm font-semibold'>
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
            className='p-1 hover:text-orange-500 text-black/25'
          >
            <Plus className='h-3 w-3' />
          </button>
        </div>
      </div>
    </div>
  );
}
