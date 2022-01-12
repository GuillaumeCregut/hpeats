import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue à HPEats !</h1>
      <Routes> 

        <Route exact path="/" element={<Home />} />
       
      </Routes>
      </div>
  );
}

export default App;
