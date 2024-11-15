// src/TarjetaMT.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useStyles from "./styles";

function TarjetaMT({ producto, eliminarProducto, agregarProducto }) {
  const classes = useStyles();

  return (
    <Card className={classes.rootTM}>
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
          <strong>Cantidad: {producto.quantity}</strong>
        </Card.Text>
        <Card.Text>
          <strong>Precio: ${producto.price}</strong>
        </Card.Text>
        <div className={classes.buttonContainer}>
          <Button
            size="small"
            color="primary"
            onClick={() => eliminarProducto(producto.id)}
          >
            Eliminar
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => agregarProducto(producto.id)}
          >
            Agregar más
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TarjetaMT;
