import React, { useEffect, useState } from "react";
import { Dashboard } from "./Dashboard";
import Grid from "@material-ui/core/Grid";
import TarjetaMT from "./TarjetaMT";
import useStyles from "./styles";

// Importar el SDK de PayPal
import { PayPalButtons } from "@paypal/react-paypal-js";

export function Carrito() {
  const classes = useStyles();
  const [carrito, setCarrito] = useState([]);

  // Cargar el carrito desde localStorage al inicio
  useEffect(() => {
    cargarCarrito();
  }, []);

  const cargarCarrito = () => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log("Carrito cargado desde localStorage:", carritoGuardado); // Diagnóstico
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
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado)); // Guardar en localStorage
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
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado)); // Guardar en localStorage
  };

  // Calcular el precio total como número
  const calcularPrecioTotal = () => {
    console.log("Carrito usado en calcularPrecioTotal:", carrito); // Diagnóstico
    return carrito.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity, 10) || 0;
      console.log(`Producto: ${item.title}, Precio: ${price}, Cantidad: ${quantity}`); // Diagnóstico
      return total + price * quantity;
    }, 0);
  };

  // Formatear el precio para mostrarlo como USD
  const formatearComoUSD = (precio) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(precio);
  };

  // Crear la orden para PayPal
  const createOrder = (data, actions) => {
    console.log("Carrito actual al crear la orden:", carrito); // Diagnóstico

    const total = calcularPrecioTotal();
    if (total <= 0) {
      console.error("El monto total debe ser mayor a cero.");
      alert("El carrito está vacío o el total es incorrecto.");
      return;
    }

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD", // Cambiado a USD
            value: total.toFixed(2), // Redondea a 2 decimales
          },
        },
      ],
    });
  };

  // Capturar la orden después de la aprobación
  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Transacción completada por ${details.payer.name.given_name}`);
      // Limpia el carrito después de la compra
      setCarrito([]);
      localStorage.removeItem("carrito");
    });
  };

  return (
    <div className="d-flex" style={{ width: "100%" }}>
      {/* Columna izquierda para el Dashboard */}
      <div style={{ flex: "0 0 250px" }}>
        <Dashboard />
      </div>

      {/* Columna derecha para el carrito y el precio total */}
      <div style={{ flex: "1", padding: "20px", marginTop: "60px" }}>
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

        {/* Ventana de precio total */}
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
            margin: "20px auto",
          }}
        >
          Precio Total: {formatearComoUSD(calcularPrecioTotal())}
        </div>

        {/* Botón de PayPal */}
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "20px auto",
            textAlign: "center",
          }}
        >
          {carrito.length > 0 ? (
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onError={(err) => console.error("Error en PayPal:", err)}
            />
          ) : (
            <p>El carrito está vacío.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carrito;
