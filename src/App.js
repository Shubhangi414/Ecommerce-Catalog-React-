import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';


function App() {
  return (
    <>
  
 <Router>
 <Navbar />
      <Routes>

        <Route path="/" element={<Layout/>} />
        <Route path='home' element={<Home/>}/>
        <Route path='product' element={<Products/>}/>
        <Route path='product/:id' element={<Product/>}/>
        <Route path='cart' element={<Cart/>}/>
       
      </Routes>
    </Router>

    </>
  );
}

export default App;
