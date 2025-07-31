import { useState } from 'react';
import { Page } from '../types';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    console.log(`Navigating to ${page} page`);
    
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    currentPage,
    navigateTo
  };
};