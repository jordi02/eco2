import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartContext from './components/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
function App() {
  return (<>
    <CartContext>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route index path="/" element={<ItemListContainer />} />
          <Route path="/category/:id  " element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart/" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext>
  </>
  );
}

export default App;
