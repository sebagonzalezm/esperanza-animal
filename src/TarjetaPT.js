// src/TarjetaPT.js
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useStyles from "./styles";

function TarjetaPT({ producto }) {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExistente = carritoActual.find(item => item.id === producto.id);

    if (productoExistente) {
      productoExistente.quantity += 1;
    } else {
      carritoActual.push({ ...producto, quantity: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carritoActual));

    // Mostrar el modal de confirmación
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
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

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Producto Agregado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¡{producto.title} se ha agregado al carrito con éxito!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Continuar comprando
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TarjetaPT;
