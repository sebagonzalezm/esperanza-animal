import {BrowserRouter, Routes,Route} from 'react-router-dom'
import * as React from 'react';
import Button from '@mui/material/Button';
import {Home} from './home'
import MenuCatalogo from './MenuCatalogo';
import Carrito from './Carrito';
import Conocenos from './Conocenos';
import {Registrar} from './registrar'
import { LoginAdmin, ManejoStock, AgregarProducto, MostrarLista, Resultados} from './admin/administrador'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<MenuCatalogo/>}/>
        <Route path='/iniciarsesion' element = {<Home/>} />
        <Route path='/carrito' element = {<Carrito/>}/>
        <Route path='/registrar' element = {<Registrar/>} />
        <Route path = '/admin/login' element = {<LoginAdmin/>} />
        <Route path = '/admin/stock' element = {<ManejoStock/>} />
        <Route path = '/admin/agregarproducto' element = {<AgregarProducto/>} />
        <Route path = '/admin/registrodecompras' element = {<Resultados/>}/>
        <Route path = '/conocenos' element = {<Conocenos/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}
