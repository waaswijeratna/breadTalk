import { ShoppingCart } from 'lucide-react'; // Import the cart icon
import logo from '../assets/icons/logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center border-b border-gray-300">
      <img src={logo} alt="BreadTalk Logo" className="w-32" />
      <nav className="flex gap-8">
        <a href="#home" className="text-gray-600 hover:text-black">Home</a>
        <a href="#about" className="text-gray-600 hover:text-black">About Us</a>
        <a href="#blog" className="text-gray-600 hover:text-black">Blog</a>
        <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
      </nav>
      <button className="flex items-center gap-2 bg-[#f37a1f] text-white px-4 py-2 rounded-lg hover:bg-[#d6691a]">
        <ShoppingCart size={18} />
        Buy
      </button>
    </header>
  );
};

export default Header;
