
const dishes = [
  { name: 'Strawberry Milkshake', price: '$18.00', rating: '4.9', image: '/assets/images/dish1.png' },
  { name: 'Delicious Fat With Cheese', price: '$16.00', rating: '4.8', image: '/assets/images/dish2.png' },
  { name: 'Delicious Little Biscuits', price: '$20.00', rating: '4.9', image: '/assets/images/dish3.png' },
];

const SpecialDishes = () => {
  return (
    <section className="py-8 bg-yellow-50">
      <h2 className="text-2xl font-bold text-center mb-8">Standout Dishes From Our Menu</h2>
      <div className="container mx-auto grid grid-cols-3 gap-4">
        {dishes.map((dish) => (
          <div key={dish.name} className="bg-white p-4 rounded-lg shadow">
            <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-bold">{dish.name}</h3>
            <p className="text-gray-500">{dish.price}</p>
            <span className="text-yellow-500">{dish.rating} ⭐</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialDishes;
