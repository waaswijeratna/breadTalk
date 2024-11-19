
import { Sparkles, ChefHat } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-white py-20 lg:py-24 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <Sparkles className="text-[#f37a1f] w-12 h-12" />
          <h1 className="text-4xl lg:text-5xl font-bold text-[#f37a1f] font-poppins">
            BreadTalk's Magic
          </h1>
        </div>
        <p className="text-xl text-gray-700 font-poppins leading-relaxed max-w-xl mx-auto lg:mx-0">
          Where artisan craftsmanship meets culinary passion. Each loaf is a canvas of tradition, handcrafted with love, baked fresh to tell a story of uncompromising quality and heritage.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="group flex items-center gap-3 bg-[#f37a1f] hover:bg-orange-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
            <ChefHat className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Explore Our Bakery
          </button>
        </div>
      </div>
     
      <div className="hidden lg:block w-1/2 pl-16 mt-8 lg:mt-0">
        <div className="relative w-full max-w-[500px] aspect-square mx-auto">
          <div className="absolute inset-0 bg-[#f37a1f] rounded-full animate-blob opacity-50 mix-blend-multiply filter blur-2xl"></div>
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://img.freepik.com/free-photo/smiling-young-female-cook-wearing-chef-uniform-holding-bread-cutting-her-thumb-up-with-copy-space_141793-37915.jpg?t=st=1732033172~exp=1732036772~hmac=5ab376d640abb8b79903fd208dd63b24eb5f60a36356e98a47ead1742f00c301&w=996"
              alt="Skilled Baker"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;