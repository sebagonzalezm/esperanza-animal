// src/TarjetaPT.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useStyles from "./styles";

function TarjetaPT({ producto }) {
  const classes = useStyles();

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    // Obtenemos el carrito actual de localStorage o creamos uno vacío
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    
    // Verificamos si el producto ya está en el carrito
    const productoExistente = carritoActual.find(item => item.id === producto.id);
    
    if (productoExistente) {
      // Si el producto ya está en el carrito, aumentamos la cantidad
      productoExistente.quantity += 1;
    } else {
      // Si el producto no está en el carrito, lo añadimos con cantidad 1
      carritoActual.push({ ...producto, quantity: 1 });
    }

    // Guardamos el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carritoActual));
  };

  return (
    <Card className={classes.root}>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + producto.image}
        className={classes.media}
      />
      <Card.Body className={classes.body}>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text style={{ fontSize: "0.9rem", color: "#555" }}>
          {producto.description}
        </Card.Text>
        <Card.Text>
          <strong>VALOR: ${producto.price}</strong>
        </Card.Text>
        <div style={{ marginTop: "auto" }}>
          <Button
            variant="primary"
            className={classes.button}
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TarjetaPT;
