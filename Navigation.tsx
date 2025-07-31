import React, { useState } from 'react';
import { Camera, Menu, X, Home, Image, Users, Compass } from 'lucide-react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (page: string) => {
    onNavigate(page as Page);
    setIsMobileMenuOpen(false);
  };

  const isActivePage = (page: Page) => currentPage === page;

  return (
    <nav className="bg-black/30 backdrop-blur-md border-b border-white/10 px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 transition-all duration-300">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-wide drop-shadow-lg hover:text-emerald-200 transition-colors duration-300">PixelCanvas</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavigation('home')}
            className={`flex items-center space-x-2 transition-all duration-300 font-medium relative group ${
              isActivePage('home') 
                ? 'text-emerald-300' 
                : 'text-white/90 hover:text-emerald-200'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 transition-all duration-300 ${
              isActivePage('home') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </button>
          <button 
            onClick={() => handleNavigation('collections')}
            className={`flex items-center space-x-2 transition-all duration-300 font-medium relative group ${
              isActivePage('collections') 
                ? 'text-emerald-300' 
                : 'text-white/90 hover:text-emerald-200'
            }`}
          >
            <Image className="w-4 h-4" />
            <span>Collections</span>
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 transition-all duration-300 ${
              isActivePage('collections') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </button>
          <button 
            onClick={() => handleNavigation('artists')}
            className={`flex items-center space-x-2 transition-all duration-300 font-medium relative group ${
              isActivePage('artists') 
                ? 'text-emerald-300' 
                : 'text-white/90 hover:text-emerald-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Artists</span>
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 transition-all duration-300 ${
              isActivePage('artists') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </button>
          <button 
            onClick={() => handleNavigation('explore')}
            className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-7 py-3 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 font-semibold transform hover:scale-105 hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4" />
            <span>Start Exploring</span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white/90 hover:text-emerald-200 transition-colors duration-300"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 animate-fade-in border-t border-white/10 bg-black/20 backdrop-blur-sm rounded-b-xl">
          <div className="flex flex-col space-y-3 pt-4">
            <button 
              onClick={() => handleNavigation('home')}
              className={`flex items-center space-x-3 transition-colors duration-300 font-medium py-2 ${
                isActivePage('home') 
                  ? 'text-emerald-300' 
                  : 'text-white/90 hover:text-emerald-200'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => handleNavigation('collections')}
              className={`flex items-center space-x-3 transition-colors duration-300 font-medium py-2 ${
                isActivePage('collections') 
                  ? 'text-emerald-300' 
                  : 'text-white/90 hover:text-emerald-200'
              }`}
            >
              <Image className="w-4 h-4" />
              <span>Collections</span>
            </button>
            <button 
              onClick={() => handleNavigation('artists')}
              className={`flex items-center space-x-3 transition-colors duration-300 font-medium py-2 ${
                isActivePage('artists') 
                  ? 'text-emerald-300' 
                  : 'text-white/90 hover:text-emerald-200'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Artists</span>
            </button>
            <button 
              onClick={() => handleNavigation('explore')}
              className="flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-7 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold w-fit mt-3"
            >
              <Compass className="w-4 h-4" />
              <span>Discover</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;