import { Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Bienvenue à HPEats !</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
