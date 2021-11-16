import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'aboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
