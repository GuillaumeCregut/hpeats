import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cart from './pages/Cart';
import Home from './pages/Home';
import './App.css';

function App() {
  /*Cart Management */
  const [cart, setCart] = useState([]);
  const [shippinPrice, setShippinPrice] = useState(0);
  //This function will be used to add meal to card in all the app.
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(cart.map(item => item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }
  //This function will remove item from cart
  const removeFromCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter(
        (item) => item.id !== product.id
      ));
    }
    else {
      setCart(cart.map(item => item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item));
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cartItems={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          shippinPrice={shippinPrice}
          setShippinPrice={setShippinPrice}
        />} />
      </Routes>
    </div>
  );
}

export default App;

 /*{/*import React from 'react';
import './App.css';
import CarouselComponent from "./components/carousel.component";

function App() {
  return (
    <div className="App">
      <CarouselComponent />
    </div>
  );
}

export default App;}*/
