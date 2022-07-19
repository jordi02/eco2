import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useParams } from 'react-router-dom';

function App() {
  return (<>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<ItemListContainer />} />
        <Route path="/ItemDetail" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
