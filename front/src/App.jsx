
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import NavBar from './componentes/Header/navBar/NavBar';
import Footer from './componentes/Main/footer/Footer';
import Home from './componentes/Main/home/Home'
import Shop from './componentes/Main/shop/Shop'
import ShoppingCart from './componentes/Header/shoppingCart/ShoppingCart';
import Lista_deseos from './componentes/Header/lista_deseos/Lista_deseos';
import Modal_users from './componentes/Main/form_users/Modal_users';
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allProducts } from './redux/action'
import axios from 'axios'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        const data = response.data;

        if (data) {
          dispatch(allProducts(data));
        } else {
          window.alert('No se encontraron datos');
        }
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (

    <div>
      <NavBar />
      <Routes>
        <Route path='*' element={<Home />}></Route>
        <Route path='/shop_notebook' element={<Shop prop="COLECCIÓN NOTEBOOK" />}></Route>
        <Route path='/shop_smartphone' element={<Shop prop="COLECCIÓN SMARTPHONES" />}></Route>
        <Route path='/shop_accesories' element={<Shop prop="COLECCIÓN ACCESORIES" />}></Route>
        <Route path='/shop_camera' element={<Shop prop="COLECCIÓN CAMERAS" />}></Route>
        <Route path='/shop_all' element={<Shop prop="TODAS LAS COLECCIONES" />}></Route>
        <Route path='/lista_deseos' element={<Lista_deseos />}></Route>
        <Route path='/shopping_cart' element={<ShoppingCart />}></Route>
      </Routes>
      <Modal_users />
      <Footer />

    </div>


  )
}

export default App
