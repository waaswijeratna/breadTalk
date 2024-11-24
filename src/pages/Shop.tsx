import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard"; // Assuming ProductCard is in the components folder

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Cakes and sweets");

  useEffect(() => {
    // Hardcoded data for now
    const hardcodedProducts: Product[] = [
      // Buns and pastries
      {
        id: 1,
        name: "Butter Croissant",
        price: 50,
        imageUrl: "/bun.png",
        category: "Buns and pastries",
      },
      {
        id: 2,
        name: "Cheese Danish",
        price: 75,
        imageUrl: "/bun.png",
        category: "Buns and pastries",
      },
      {
        id: 3,
        name: "Garlic Bread",
        price: 30,
        imageUrl: "/bun.png",
        category: "Buns and pastries",
      },
      {
        id: 4,
        name: "Cinnamon Roll",
        price: 60,
        imageUrl: "/bun.png",
        category: "Buns and pastries",
      },
      // Cakes and sweets
      {
        id: 5,
        name: "Pink Flower Gold Leaf Cakepop",
        price: 90,
        imageUrl: "/cake.png",
        category: "Cakes and sweets",
      },
      {
        id: 6,
        name: "Chocolate Drip Cake",
        price: 120,
        imageUrl: "/cake.png",
        category: "Cakes and sweets",
      },
      {
        id: 7,
        name: "Red Velvet Cupcake",
        price: 50,
        imageUrl: "/cake.png",
        category: "Cakes and sweets",
      },
      {
        id: 8,
        name: "Blue Velvet Cupcake",
        price: 230,
        imageUrl: "/cake.png",
        category: "Cakes and sweets",
      },
      // Platters
      {
        id: 9,
        name: "Fruit Platter",
        price: 300,
        imageUrl: "/platter.png",
        category: "Platters",
      },
      {
        id: 10,
        name: "Cheese Platter",
        price: 400,
        imageUrl: "/platter.png",
        category: "Platters",
      },
      {
        id: 11,
        name: "Charcuterie Platter",
        price: 500,
        imageUrl: "/cake.png",
        category: "Platters",
      },
      {
        id: 12,
        name: "Dessert Platter",
        price: 350,
        imageUrl: "/bun.png",
        category: "Platters",
      },
      {
        id: 13,
        name: "Cheese Danish",
        price: 75,
        imageUrl: "/bun.png",
        category: "Buns and pastries",
      },
    ];
    setProducts(hardcodedProducts);

    // Uncomment below to fetch from the backend API
    /*
    fetch("products/productCat")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
    */
  }, []);

  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="p-8">

        {/* Category Selector */}
        <div className="flex justify-center mb-8">
          {["Buns and pastries", "Cakes and sweets", "Platters"].map((category) => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xl px-4 py-2 mb-8 mx-2 font-medium cursor-pointer uppercase ${
                selectedCategory === category
                  ? " text-orange-500"
                  : " text-gray-600"
              } hover:text-orange-300`}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
