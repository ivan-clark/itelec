import React from 'react';
import Header from './Header'; // Updated import path
import Footer from './Footer'; // Updated import path
import ProductListing from './ProductListing'; // Updated import path

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductListing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
