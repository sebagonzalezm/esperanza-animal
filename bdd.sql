-- Crear la base de datos
CREATE DATABASE tienda;

-- Seleccionar la base de datos
\c tienda;

-- Crear tabla usuarios
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    correo VARCHAR(255) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    rol VARCHAR(50) NOT NULL
);

-- Crear tabla productos
CREATE TABLE productos (
    id_producto SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    precio NUMERIC(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    imagen_url VARCHAR(255) NOT NULL
);

-- Crear tabla compras
CREATE TABLE compras (
    id_compra SERIAL PRIMARY KEY,
    id_usuario INTEGER NOT NULL,
    fecha_compra TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    total NUMERIC(10, 2) NOT NULL,
    CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Crear tabla detalles de compra
CREATE TABLE detallescompra (
    id_detalle SERIAL PRIMARY KEY,
    id_compra INTEGER NOT NULL,
    id_producto INTEGER NOT NULL,
    cantidad INTEGER NOT NULL,
    subtotal NUMERIC(10, 2) NOT NULL,
    CONSTRAINT fk_compra FOREIGN KEY (id_compra) REFERENCES compras(id_compra),
    CONSTRAINT fk_producto FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- Insertar datos en la tabla usuarios
INSERT INTO usuarios (correo, contrasena, nombre, apellido, rol)
VALUES
('juan.perez@example.com', 'password123', 'Juan', 'Perez', 'cliente'),
('maria.lopez@example.com', 'password456', 'Maria', 'Lopez', 'admin');

-- Insertar datos en la tabla productos
INSERT INTO productos (nombre, descripcion, precio, stock, imagen_url)
VALUES
('Croquetas Premium', 'Alimento premium para perros', 45.50, 100, '/images/croquetas.jpg'),
('Pelota para mascotas', 'Pelota de juguete para perros', 15.00, 200, '/images/pelota.jpg');

-- Insertar datos en la tabla compras
INSERT INTO compras (id_usuario, total)
VALUES
(1, 60.50),
(2, 15.00);

-- Insertar datos en la tabla detallescompra
INSERT INTO detallescompra (id_compra, id_producto, cantidad, subtotal)
VALUES
(1, 1, 1, 45.50),
(1, 2, 1, 15.00),
(2, 2, 1, 15.00);
