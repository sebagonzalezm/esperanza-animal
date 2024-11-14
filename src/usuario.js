import { NavNegro } from "./allNav";
import { Dashboard } from "./Dashboard";
import Container from "@material-ui/core/Container";
import { CarruselFotos } from "./home";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { Box } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {Link, useNavigate} from 'react-router-dom'
import foto1 from "./alimentos/perros/champions dog adultos.avif";

export function MenuCatalogo() {
  return (
    <div className="d-flex">
      <Dashboard />
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ marginTop: "80px", marginLeft: "30px" }}>
          <Grid container spacing={2}>
            <Grid item xs={8} sm={6} md={4} lg={2} xl={2}>
              <TarjetaPT />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
              <TarjetaPT />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
              <TarjetaPT />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
              <TarjetaPT />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
              <TarjetaPT />
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
              <TarjetaPT />
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
              <TarjetaPT />
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
              <TarjetaPT />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
export function Conocenos() {
  return (
    <div className="d-flex" style={{ height: '100%' }}>
      <Dashboard />
      <div className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
        <CarruselFotos style={{ marginTop: "10px", marginBottom: "10px", flex: 1 }} />
        <div
          style={{
            marginTop: "70px",
            marginLeft: "10px",
            fontSize: "0.95rem", // Aumenta el tamaño de la fuente
            lineHeight: "1.6", // Espaciado entre líneas para mejorar la legibilidad
            maxWidth: "600px", // Limita el ancho máximo del texto para que no sea demasiado largo
            flex: 1, // Permite que este contenedor ocupe el mismo espacio disponible que el carrusel
            overflowY: "auto", // Añadir desplazamiento vertical si el texto es demasiado largo
            paddingRight: "10px", // Un poco de espacio a la derecha para que no se toque el borde
          }}
        ><p>
          Partimos como un grupo de personas interesadas en ayudar, pero con un toque diferente al sólo hecho de alimentar y reubicar mascotas. Queríamos darle una ESPERANZA concreta de salvación, rehabilitación y protección indefinida. Derribamos barreras burocráticas y sociales logrando formar esta ONG que comenzó apadrinando una agrupación comunal de la comuna de Cerro Navia, ACDA, de la cual éramos parte desde el año 2012, y con la experiencia adquirida pudimos abarcar otras comunas como La Reina, La Pintana y Peñalolén por ahora.
          </p>
          <p>
          Estamos mentalizad@s y trabajamos a diario, no sólo en salvar vidas de mascotas, sino que en educar, informar, contagiar y concientizar a la población para que en un futuro próximo todos puedan realizar la labor que hoy en día desarrollan un@s poc@s y para ello, dependemos de ti.
          </p>
          <p>
          Nuestro trabajo fundamentalmente está en terreno; en las calles de la capital y rincones de las comunas que hace años vemos y monitoreamos, sin embargo, las manos se hacen pocas y lamentablemente quedan much@s en el camino sin ayuda.
          </p>
          <p>
          Hoy tenemos bajo nuestro cuidado alrededor de 100 mascotas, entre perr@s y gat@s, que esperan por una familia que los apadrine-amadrine, cuide y/o adopte.
          </p>
          <p>
          Cabe destacar que NO tenemos refugio, dependemos exclusivamente de hogar temporales o transitorios que nos abren un espacio en sus casas y corazones para integrar a un@ recién rescatad@ y a medida que se concretan adopciones podemos seguir salvando vidas.
          </p>
          Aquí encontrarás variadas formas de ser parte de este proyecto y darle ESPERANZA a much@s animalit@s en peligro y sin hogar.
        </div>
      </div>
    </div>
  );
}

export function Carrito() {
  return (
    <div className="d-flex" >
      <Dashboard />
      <Grid container spacing={2} style={{ marginTop: "70px", marginLeft: "10px" }}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TarjetaMT />
        </Grid>
      </Grid>
    </div>
  );
}


function TarjetaPT() {
  return (
    <Card style={{ width: "200px", height: "400px" }}>
      <Card.Img variant="top" src= {foto1} style={{ width: "150px", height: "200px", objectFit: "cover" }}/> {/* Asegúrate de que la ruta sea correcta */}
      <Card.Body>
        <Card.Title>Champion Dog Adulto</Card.Title>
        <Card.Text>Alimento para Perro Adulto Carne y Pollo 15 kg</Card.Text>
        <Card.Text><strong>VALOR: $12.000</strong></Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default TarjetaPT;

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

function TarjetaMT() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={foto1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Champion Dog Adulto
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Alimento para Perro Adulto Carne y Pollo 15 kg
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Eliminar
        </Button>
        <Button size="small" color="primary" onClick={() => navigate()}>
        Agregar más
        </Button>
      </CardActions>
    </Card>
  );
}
