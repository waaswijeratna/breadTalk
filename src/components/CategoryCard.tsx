// CategoryCard.tsx
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  items: string;
}

const CategoryCard = ({ title, image, items }: CategoryCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{items} items</p>
    <button className="text-[#f37a1f] flex items-center hover:underline">
      Browse Category <ChevronRight className="w-4 h-4 ml-1" />
    </button>
  </div>
);

export default CategoryCard;
