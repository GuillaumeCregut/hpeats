import Footer from './components/footer/Footer'
import Scroll from "./components/scroll/Scroll";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cart from './pages/Cart';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import './App.css';
import MealDetails from "./components/meals/MealDetails";




function App() {
    
  /*Cart Management */
  const [cart, setCart] = useState([]);
  const [shippinPrice, setShippinPrice] = useState(0);
  const updateShippingPrice = (newPrice) => {
    setShippinPrice(newPrice)
  }
  /*User management */
  const initialUser = {
    id: 0,
    name: "unknown",
    firstName: "",
    distance: 0,
    password: '',
    image: ''
  }
  const [userlogged, setUserLogged] = useState(false);
  const [user, setUser] = useState(initialUser);
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
        <Route exact path="/" element={<Home user={user}
          addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" element={<Cart cartItems={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          shippinPrice={shippinPrice}
          setShippinPrice={updateShippingPrice}
          userLogged={userlogged}
          user={user}
        />} />
        <Route path="/user" element={<UserPage
          userLogged={userlogged}
          setUserLogged={setUserLogged}
          user={user}
          setUser={setUser}
          defaultUser={initialUser}
          cart={cart}
        />}
        />
        <Route path="mealInfos/:id" element={<MealDetails
          addToCart={addToCart}
          cart={cart}
        />}
        />
        
        <Route path="mealInfos/:id" element={<MealDetails addToCart={addToCart} />} />
      </Routes>


      <Scroll />
      <Footer />

    </div>
  );
}

export default App;
