import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cart from './pages/Cart';
import Home from './pages/Home';
import './App.css';
function App() {
  /*Cart Management */
  const [cart, setCart] = useState([]);

  //This function will be used to add meal to card in all the app.
  const addTotCart = (product) => {
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
          addToCart={addTotCart}
          removeFromCart={removeFromCart} />} />
      </Routes>
    </div>
  );
}

export default App;
