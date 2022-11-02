import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart"; 
import { useSelector } from 'react-redux';

function App() {
  const {isCartOpen} = useSelector((state) => state.cart);
  return (
    <>
      <Router>      
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/shop"} element={<Shop />} />
          <Route path={"/product/:id"} element={<ProductPage />} />
        </Routes>

        {isCartOpen && <Cart />}
      </Router>
    </>
  );
}

export default App;
