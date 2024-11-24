import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="rounded-lg flex flex-col items-center">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-[40vh] object-cover rounded"
      />
      <h3 className="text-gray-800 mt-4 text-lg font-semibold text-center">{product.name}</h3>
      <p className="text-gray-500 text-center">${product.price}</p>
    </div>
  );
};

export default ProductCard;
