
// ProductCard.tsx
import { Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  rating: number;
  imgUrl: string;
}

const ProductCard = ({ name, price, rating, imgUrl }: ProductCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
    <img src={imgUrl} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
    <p className="text-[#f37a1f] font-bold text-xl">LKR {price.toFixed(2)}</p>
    <button className="mt-4 w-full bg-[#f37a1f] text-white py-2 rounded-full hover:bg-orange-600 transition-colors">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;