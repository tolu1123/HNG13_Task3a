"use client";

import React from "react";
import useCartStore from '@/hooks/useCartStore';
import CounterButton from "@/components/sharedUI/CounterButton";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";


function AddToCartContainer({ product }: { product: Product}) {
  const [quantity, setQuantity] = React.useState(1);
  const increment = () => setQuantity((prev) => prev + 1 );
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const addItem = useCartStore((state) => state.addItem);
  const handleAddToCart = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      image: product.image.mobile,
      price: product.price,
      quantity,
    });

    setQuantity(1);
  };
  return (
    <div className='flex flex-row gap-4 flex-wrap'>
      <CounterButton quantity={quantity} increment={increment} decrement={decrement} />
      <Button onClick={() => handleAddToCart()}>ADD TO CART</Button>
    </div>
  );
}

export default AddToCartContainer;
