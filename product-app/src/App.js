import React, { useState } from 'react';
import ProductList from './productList';
import './App.css';

function App() {
  const products = [
    { name: 'phone', category: 'Electronics', price: 800 },
    { name: 'smart-TV', category: 'Electronics', price: 2000 },
    { name: 'Laptop', category: 'Electronics', price: 3000 },
    { name: 'Scarf', category: 'Clothing', price: 10 },
    { name: 'Gloves', category: 'Clothing', price: 5 },
    { name: 'Jeans', category: 'Clothing', price: 90 },
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter(product => product.category === activeFilter);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="filter">
        <button onClick={() => handleFilterClick('All')}>All</button>
        <button onClick={() => handleFilterClick('Electronics')}>Electronics</button>
        <button onClick={() => handleFilterClick('Clothing')}>Clothing</button>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
