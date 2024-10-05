import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Product from "./Components/Product";
import Cards from "./Components/Cards";

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const addToCard = (product) => {
    const isItemInCart = inputValue.find((item) => item.id === product.id);
    if (isItemInCart) {
      alert("Item already in cart!");
    } else {
      setInputValue([...inputValue, product]);
    }
  };

  const removeFromCart = (id) => {
    setInputValue(inputValue.filter((item) => item.id !== id));
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <Navbar inputValue={inputValue.length} toggleModal={toggleModal} />
      <Product data={data} addToCard={addToCard} />
      {isModalOpen && (
        <Cards
          inputValue={inputValue}
          removeFromCart={removeFromCart}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default App;
