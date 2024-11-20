import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import logo from '../assets/icons/logo.png';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(4); 

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <a 
      href={href} 
      className="relative group py-2"
    >
      <span className="text-gray-700 hover:text-[#f37a1f] transition-colors">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f37a1f] transition-all group-hover:w-full"></span>
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[#f37a1f] text-white px-6 py-2 text-sm text-center">
        Free delivery on orders above LKR 2000 | Same day delivery in Colombo
      </div>

      {/* Main header */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              className="mr-4 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <img src={logo} alt="BreadTalk Logo" className="w-32" />
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for breads, cakes..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 focus:border-[#f37a1f] focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#shop">Shop</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center text-gray-700 hover:text-[#f37a1f]">
              <User size={20} />
            </button>
            <button className="hidden md:flex items-center text-gray-700 hover:text-[#f37a1f]">
              <Heart size={20} />
            </button>
            <button className="relative flex items-center gap-2 bg-[#f37a1f] text-white px-4 py-2 rounded-full hover:bg-[#e16510] transition-colors">
              <ShoppingCart size={18} />
              <span className="hidden md:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-[#f37a1f] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border border-[#f37a1f]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-[#f37a1f] py-2">Home</a>
              <a href="#shop" className="text-gray-700 hover:text-[#f37a1f] py-2">Shop</a>
              <a href="#about" className="text-gray-700 hover:text-[#f37a1f] py-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-[#f37a1f] py-2">Contact</a>
            </nav>
            {/* Mobile Search */}
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for breads, cakes..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 focus:border-[#f37a1f] focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;