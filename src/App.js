import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as React from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // Importar el PayPalScriptProvider
import MenuCatalogo from './MenuCatalogo';
import Carrito from './Carrito';
import { Home } from './home';
import Conocenos from './Conocenos';
import { Registrar } from './registrar';
import { LoginAdmin, ManejoStock, AgregarProducto, MostrarLista, Resultados } from './admin/administrador';

export function App() {
  return (
    // Envuelve la aplicación con PayPalScriptProvider
    <PayPalScriptProvider options={{ "client-id": "AdGhYsMHOXFNuZaeGvMmk6pSey-h_H-6iPL_YtK_taVVIEm6tXjLy-3rfS61yX_M8K_e4t9bT3YbBqYw", currency: "USD" }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MenuCatalogo />} />
          <Route path='/iniciarsesion' element={<Home />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/registrar' element={<Registrar />} />
          <Route path='/admin/login' element={<LoginAdmin />} />
          <Route path='/admin/stock' element={<ManejoStock />} />
          <Route path='/admin/agregarproducto' element={<AgregarProducto />} />
          <Route path='/admin/registrodecompras' element={<Resultados />} />
          <Route path='/conocenos' element={<Conocenos />} />
        </Routes>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}

