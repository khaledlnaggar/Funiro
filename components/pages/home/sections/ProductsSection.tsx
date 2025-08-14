"use client";

import { products } from "@/shared/data/products";
import { Product } from "@/shared/interfaces/product.interface";
import ProductCard from "@/shared/ui/ProductCard";
import { useState } from "react";

const ProductsSection = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const handleShowMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 8, products.length));
  };

  const hasMoreProducts = visibleProducts < products.length;

  return (
    <section className="container-max section-padding py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl   font-bold text-black mb-4">Our Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {products.slice(0, visibleProducts).map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMoreProducts && (
        <div className="text-center">
          <button onClick={handleShowMore} className="btn-secondary px-8 py-3">
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
