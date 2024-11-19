const categories = [
    { name: 'Buns and pastries', icon: '/bun.png' },
    { name: 'Cakes and sweets', icon: '/cake.png' },
    { name: 'Platters', icon: '/platter.png' },
];

const MainCategories = () => {
    return (
        <section className="h-[100vh] bg-white flex flex-col justify-center items-center ">
            <div className="text-4xl font-bold text-gray-700 mb-4">Our Categories</div>
            <div className="text-lg text-gray-400 mb-12">
                This is our main selection of categories, carefully curated to suit your preferences.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className=" cursor-pointer w-60 h-60 border border-gray-300 rounded-lg flex flex-col justify-between items-center p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
                    >
                        <img src={category.icon} alt={category.name} className="w-40 h-40" />
                        <h3 className="text-gray-700 text-center  font-medium">{category.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MainCategories;
