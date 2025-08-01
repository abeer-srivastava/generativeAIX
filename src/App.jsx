import React, { useState, useEffect } from 'react'; // 1. Import useEffect
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // 2. Add this useEffect hook
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'services': return <Services setCurrentPage={setCurrentPage} />;
      case 'portfolio': return <Portfolio setCurrentPage={setCurrentPage} />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] w-full">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="w-full">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;