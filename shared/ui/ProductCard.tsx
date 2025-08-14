import Image from "next/image";
import { Heart, Share2, RotateCcw } from "lucide-react";
import { ProductCardProps } from "../interfaces/product.interface";

const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="group relative bg-neutral-200  overflow-hidden card-shadow">
      {/* Product Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-medium px-2 py-2 rounded-full">
              New
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs font-medium p-2 rounded-full">
              -{discountPercentage}%
            </span>
          )}
        </div>
      </div>
      {/* Hover Actions */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center space-y-4">
          <button className="btn-primary">Add to cart</button>
          <div className="flex items-center justify-center space-x-4 text-white">
            <button className="flex items-center space-x-1 text-sm hover:text-primary-300">
              <Share2 size={16} />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-1 text-sm hover:text-primary-300">
              <RotateCcw size={16} />
              <span>Compare</span>
            </button>
            <button className="flex items-center space-x-1 text-sm hover:text-primary-300">
              <Heart size={16} />
              <span>Like</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="  font-semibold text-lg text-black">{product.name}</h3>
        <p className="text-neutral-600 text-sm">{product.description}</p>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-lg text-black">
            Rp {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-neutral-400 line-through text-sm">
              Rp {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
