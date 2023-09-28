import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import ProductListing from './ProductListing'; 

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
