import React from 'react';
import './AllProductsPage.css';

function AllProductsPage({ products = [], onAddToCart }) {
  return (
    <div className="products-page">
      <h2>🛍️ تمامی محصولات</h2>

      {products.length === 0 ? (
        <p className="no-products">محصولی برای نمایش وجود ندارد.</p>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="category">دسته: {product.category}</p>
              <p className="price">{product.price} تومان</p>
              <button onClick={() => onAddToCart(product)}>افزودن به سبد</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default AllProductsPage;
