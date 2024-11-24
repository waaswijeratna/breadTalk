import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react"; // Import the cart and search icons
import logo from "../assets/icons/logo.png";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Search Text:", searchText);
  };

  return (
    <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center border-b border-gray-300">
      <img src={logo} alt="BreadTalk Logo" className="w-32" />
      <nav className="flex gap-8">
        <Link to="/" className="text-gray-600 hover:text-[#f37a1f]">Home</Link>
        <Link to="/about" className="text-gray-600 hover:text-[#f37a1f]">About Us</Link>
        <Link to="/shop" className="text-gray-600 hover:text-[#f37a1f]">Shop</Link>
        <Link to="/contact" className="text-gray-600 hover:text-[#f37a1f]">Contact</Link>
      </nav>
      <div className="relative flex items-center w-[300px]">
        <input
          type="text"
          placeholder="Search anything..."
          className="w-[98%] px-4 py-2 rounded-full bg-orange-500 text-white placeholder-gray-100 outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 top-0 h-full w-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-200"
        >
          <Search size={18} className="text-orange-500" />
        </button>
      </div>
      <button className="flex items-center gap-2 bg-[#f37a1f] text-white px-4 py-2 rounded-lg hover:bg-[#d6691a] ml-4">
        <ShoppingCart size={18} />
        Buy
      </button>
    </header>
  );
};

export default Header;
