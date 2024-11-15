// src/Carrito.js
import React, { useEffect, useState } from "react";
import { Dashboard } from "./Dashboard";
import Grid from "@material-ui/core/Grid";
import TarjetaMT from "./TarjetaMT";
import useStyles from "./styles";

export function Carrito() {
  const classes = useStyles();
  const [carrito, setCarrito] = useState([]);

  // Cargar el carrito desde localStorage al inicio
  useEffect(() => {
    cargarCarrito();
  }, []);

  const cargarCarrito = () => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  };

  // Función para eliminar (o reducir cantidad de) un producto del carrito
  const eliminarProducto = (id) => {
    const carritoActualizado = carrito
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null;
        }
        return item;
      })
      .filter(Boolean);

    setCarrito(carritoActualizado);
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
  };

  // Función para agregar más cantidad de un producto en el carrito
  const agregarProducto = (id) => {
    const carritoActualizado = carrito.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCarrito(carritoActualizado);
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
  };

  // Función para calcular el precio total del carrito
  const calcularPrecioTotal = () => {
    return carrito.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="d-flex" style={{ width: "100%" }}>
      {/* Columna izquierda para el Dashboard */}
      <div style={{ flex: "0 0 250px" }}>
        <Dashboard />
      </div>

      {/* Columna derecha para el carrito y el precio total */}
      <div style={{ flex: "1", padding: "20px", marginTop: "60px" }}> {/* Ajustamos marginTop */}
        {/* Ventana de precio total en la parte superior y centrada */}
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            border: "2px solid #ddd",
            borderRadius: "8px",
            marginBottom: "20px",
            margin: "0 auto",
          }}
        >
          Precio Total: ${calcularPrecioTotal()}
        </div>

        {/* Lista de productos en el carrito */}
        <Grid container spacing={2} style={{ margin: "0 auto" }}>
          {carrito.map((producto) => (
            <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <TarjetaMT
                producto={producto}
                eliminarProducto={eliminarProducto}
                agregarProducto={agregarProducto}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Carrito;
