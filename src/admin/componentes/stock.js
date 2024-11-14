import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {useNavigate} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import foto1 from '../comida/champions dog adultos.avif'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        EsperanzaAnimal.cl
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function StockProductos() {
  const classes = useStyles();
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Stock de productos
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">  
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={foto1}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Champion Dog Adulto
                    </Typography>
                    <Typography>
                      <p>
                      Alimento para Perro Adulto Carne y Pollo 15 kg
                      </p>
                    <p>
                      Cantidad:15
                    </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => navigate()}>
                      Agregar stock
                    </Button>
                    <Button size="small" color="primary" onClick={() => navigate()}>
                      Quitar del catalogo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
export function Registro() {
    return (
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Detalle de compras</th>
              <th>Gasto Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sebastián González</td>
              <td>Champion Dog Adulto x1</td>
              <td>12000</td>

            </tr>
            <tr>
              <td>2</td>
              <td>Carlos Maliqueo</td>
              <td>Champion Dog Adulto x2</td>
              <td>24000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jozsef Reyes</td>
              <td>Champion Dog Adulto x1</td>
              <td>12000</td>
            </tr>
          </tbody>
        </Table>
        </div>
    )
}