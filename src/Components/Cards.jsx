import React from "react";

const Cards = ({ inputValue, removeFromCart, toggleModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Your Card</h2>
        {inputValue.length === 0 ? (
          <p>Your Card is Empty.</p>
        ) : (
          inputValue.map((item) => (
            <div key={item.id} className="card-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p> ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove From Card
              </button>
            </div>
          ))
              )}
              <button onClick={toggleModal}>Close</button>
      </div>
    </div>
  );
};

export default Cards;
