import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Navgo from './Nav';
import Footer from './Footer.js';
import Header from './Header.js';
import ShoppingCart from './Addtocart.js';


function App() {
  return (
    <div>
      <Header />
    <Router>
      <Navgo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product.js" element={<Product />} />
        <Route path="/Addtocart.js" element={<ShoppingCart />} />
      </Routes>
    </Router>
     <Footer />
     </div>
     
  );
  

}

export default App;