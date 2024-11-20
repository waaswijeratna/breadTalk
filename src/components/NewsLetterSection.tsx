const NewsletterSection = () => (
    <section className="py-16 bg-[#f37a1f]">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Subscribe to get special offers and updates</p>
        <div className="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-2 rounded-full text-gray-900"
          />
          <button className="bg-white text-[#f37a1f] px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );

  export default NewsletterSection;