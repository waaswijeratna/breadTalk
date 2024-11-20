import { Clock, Heart, Truck } from "lucide-react";

const FeaturesSection = () => (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Truck className="w-12 h-12 text-[#f37a1f] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Island-wide Delivery</h3>
            <p className="text-gray-600">Free delivery for orders above LKR 2000</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-[#f37a1f] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
            <p className="text-gray-600">Baked fresh every morning</p>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 text-[#f37a1f] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">100% satisfaction guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );

  export default FeaturesSection;