import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Products from './components/products';
import AddProduct from './components/addproduct';

function App() {
  return (   
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <footer>
        <p>Scandiweb Test assignment</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
