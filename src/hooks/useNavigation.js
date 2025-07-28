import { useState, useCallback } from 'react';

export const useNavigation = (initialPage = 'home') => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  }, []);
  
  const isCurrentPage = useCallback((page) => {
    return currentPage === page;
  }, [currentPage]);
  
  return {
    currentPage,
    navigateTo,
    isCurrentPage,
    setCurrentPage
  };
};