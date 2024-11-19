import { useState } from 'react';

type Dish = {
  name: string;
  price: string;
  description: string;
  image: string;
};

const dishes: Dish[] = [
  {
    name: 'Coconut Donut',
    price: '$18.00',
    description: 'A delicious coconut-flavored donut topped with sweet coconut flakes.',
    image: '/dish1.jpg',
  },
  {
    name: 'Egg Bun',
    price: '$16.00',
    description: 'A soft and fluffy bun filled with creamy egg custard.',
    image: '/dish2.jpg',
  },
  {
    name: 'Choco Cake',
    price: '$20.00',
    description: 'A rich and moist chocolate cake perfect for any sweet tooth.',
    image: '/dish3.jpg',
  },
];

const SpecialDishes = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (dishName: string) => {
    setFavorites((prev) => ({
      ...prev,
      [dishName]: !prev[dishName],
    }));
  };

  return (
    <section className="h-[100vh]  p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
        Standout Dishes From Our Menu
      </h2>
      <div className="flex">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="relative bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow max-w-[260px] mx-auto"
          >
            <button
              className={`absolute top-0 right-0 text-2xl bg-red-500  ${favorites[dish.name] ? 'text-white' : 'text-gray-400'
                } rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none px-4 py-2`}
              onClick={() => toggleFavorite(dish.name)}
              aria-label="Toggle Favorite"
            >
              ♥
            </button>


            {/* Image */}
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <h3 className="text-md font-bold mb-1">{dish.name}</h3>
            <p className="text-gray-500 text-sm mb-3">{dish.description}</p>
            <p className="text-red-500 font-bold text-sm">{dish.price}</p>
          </div>
        ))}
      </div>
      {/* Go to Shop Button */}
      <div className="text-center mt-16">
        <button className="px-8 py-4 bg-orange-500 text-white text-sm font-bold rounded-md hover:bg-red-600 transition-all">
          Go to Shop
        </button>
      </div>
    </section>
  );
};

export default SpecialDishes;
