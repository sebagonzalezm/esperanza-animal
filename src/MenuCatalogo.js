// src/MenuCatalogo.js
import React, { useEffect, useState } from "react";
import { Dashboard } from "./Dashboard";
import Grid from "@material-ui/core/Grid";
import TarjetaPT from "./TarjetaPT";
import useStyles from "./styles";

export function MenuCatalogo() {
  const classes = useStyles();
  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    fetch("/catalogo.json")
      .then((response) => response.json())
      .then((data) => setCatalogo(data))
      .catch((error) => console.error("Error al cargar el catálogo:", error));
  }, []);

  return (
    <div className="d-flex">
      <Dashboard />
      <div className="d-flex align-items-center justify-content-center">
        <div className={classes.container}>
          <Grid container spacing={2}>
            {catalogo.map((producto) => (
              <Grid item key={producto.id}>
                <TarjetaPT producto={producto} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default MenuCatalogo;
