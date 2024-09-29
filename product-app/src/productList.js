import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-area">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
