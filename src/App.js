import ProductList from "./ProductList";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home Page</Link>
      <Link to="/checkout">Checkout</Link>

      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/product" element={<ProductDetail/>}>
          <Route path=":id" element={<ProductDetail/>}/>
        </Route>
        <Route path="*" element={<p>The page is no longer exist</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
