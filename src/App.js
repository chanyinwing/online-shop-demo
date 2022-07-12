import ProductList from "./ProductList";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";
import {CartContext} from "./CartContext"; 
import {useState} from 'react'

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>

      <CartContext.Provider value={{cartItems, setCartItems}}>

        <nav>
          <Link to="/">Home Page</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/product" element={<ProductDetail/>}>
            <Route path=":id" element={<ProductDetail/>}/>
          </Route>
          <Route path="*" element={<p>The page is no longer exist</p>}/>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
