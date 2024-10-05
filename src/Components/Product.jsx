import React from 'react';

const Product = ({data, addToCard }) => {
  return (
    <div className='product-list'>
      {data.map((product) => (
        <div className='product-card' key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>price${product.price}</p>
          <button onClick={() => addToCard(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;