import React from 'react';
import { Category } from '../types';

interface FilterButtonsProps {
  categories: Category[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  const handleCategoryClick = (category: Category) => {
    onCategoryChange(category);
    console.log(`Filtering by category: ${category}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-2xl shadow-emerald-500/40'
              : 'bg-black/25 backdrop-blur-lg text-white border-2 border-white/30 hover:border-emerald-400/70 hover:text-emerald-200 hover:shadow-xl hover:shadow-emerald-400/25 hover:bg-black/40'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;