

const categories = [
  { name: 'Cake', icon: './assets/images/bun.png' },
  { name: 'Sandwich', icon: '/assets/icons/sandwich.svg' },
  { name: 'Cookies', icon: '/assets/icons/cookies.svg' },
  { name: 'Bread', icon: '/assets/icons/bread.svg' },
];

const CategoryMenu = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="text-center p-4 bg-gray-100 rounded-lg">
            <img src={category.icon} alt={category.name} className="mx-auto w-16 h-16 mb-2" />
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryMenu;
