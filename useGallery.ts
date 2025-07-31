import { useState, useMemo } from 'react';
import { Image, ViewMode, Category } from '../types';

export const useGallery = (images: Image[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [lightboxImage, setLightboxImage] = useState<Image | null>(null);

  const filteredImages = useMemo(() => {
    let filtered = images;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(image => image.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(image =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.photographer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [images, activeCategory, searchTerm]);

  const openLightbox = (image: Image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setLightboxImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImage(filteredImages[prevIndex]);
  };

  return {
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
    viewMode,
    setViewMode,
    filteredImages,
    lightboxImage,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage
  };
};