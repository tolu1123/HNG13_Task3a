import ProductsComponent from "@/components/headphones/ProductsComponent";

import { Product } from "@/lib/types";

function Products({ products }: { products: Product[] }) {
  return (
    <main className='w-full mt-16 mb-30 sm:my-30 lg:my-40'>
      <div className='container space-y-30 lg:space-y-40'>
        {products.map((product, index) => (
          <ProductsComponent key={product.name} product={product} index={index} />
        ))}
      </div>
    </main>
  );
}

export default Products;
