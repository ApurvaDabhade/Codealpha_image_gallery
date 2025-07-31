import React from 'react';
import HeroSection from '../HeroSection';
import FilterButtons from '../FilterButtons';
import ViewToggle from '../ViewToggle';
import ImageGallery from '../ImageGallery';
import { useGallery } from '../../hooks/useGallery';
import { sampleImages, categories } from '../../utils/imageData';

interface HomePageProps {
  onImageClick: (image: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onImageClick }) => {
  const {
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
    viewMode,
    setViewMode,
    filteredImages
  } = useGallery(sampleImages);

  return (
    <>
      <HeroSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <main className="max-w-7xl mx-auto px-6 py-16 relative">
        <FilterButtons
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        
        <ImageGallery
          images={filteredImages}
          viewMode={viewMode}
          onImageClick={onImageClick}
        />
      </main>
    </>
  );
};

export default HomePage;