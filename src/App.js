
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/SingleProduct';
import Cart from './components/Cart';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { ProductProvider } from './components/context/ProductsContext';


function App() {
  return (
<ProductProvider>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='product' element={<Products/>}/>
      <Route path='product/:id' element={<Product/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
  </Router>
</ProductProvider>
  );
}

export default App;
