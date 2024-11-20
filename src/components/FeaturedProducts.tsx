import ProductCard from "./ProductCard";

const FeaturedProducts = () => (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ProductCard name="Classic Milk Bread" price={250} rating={4} imgUrl ="https://images8.alphacoders.com/656/656765.jpg" />
          <ProductCard name="Chocolate Cake" price={1200} rating={5} imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5uzd0MPG6toMfzoVmOIzJuKRmRyGxUyyUQ&s"/>
          <ProductCard name="Cheese Tart" price={350} rating={4} imgUrl="https://c4.wallpaperflare.com/wallpaper/396/959/702/strawberry-cheesecake-wallpaper-preview.jpg"/>
          <ProductCard name="Party Platter" price={2500} rating={5} imgUrl="https://media.istockphoto.com/id/114329367/photo/sandwich-tray.jpg?s=612x612&w=0&k=20&c=Ns2QlXZc37unLEabB_VjzGrRv9bUVX_HoKBoiP5PaUI="/>
        </div>
      </div>
    </section>
  );

  export default FeaturedProducts;