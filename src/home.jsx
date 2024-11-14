import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import foto1 from "./images/foto1.jpg";
import foto2 from "./images/foto2.jpg";
import foto3 from "./images/foto3.jpg";
import foto4 from "./images/foto4.jpg";
import foto5 from "./images/foto5.jpg";
import foto6 from "./images/foto6.jpg";
import foto7 from "./images/foto7.jpg";
import logo from "./images/logo.webp";
import {IniciarSesion} from './login'
import Carousel from 'react-bootstrap/Carousel';
import {NavHome, NavNegro} from './allNav'
import {Link} from 'react-router-dom'
import { FotoyVideo } from "./admin/administrador";

export function Home(){
  return(
    <>
      <NavNegro/>
      <NavHome/>
      <div className="d-flex">
        <div className="flex-fill"style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {
          <CarruselFotos/>
          }
        </div>
        <div className="flex-fill">
          {
            <IniciarSesion/>
          }
        </div>
      </div>
    </>
  )
}

export function CarruselFotos() {
  return (
    <div style={{ width: '500px', height: '500px' }}>
    <Carousel>
    <Carousel.Item interval={3000}>
      <img
              alt=""
              src={logo}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
              alt=""
              src={foto1}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
              alt=""
              src={foto2}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
              alt=""
              src={foto4}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
              alt=""
              src={foto5}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
              alt=""
              src={logo}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
              alt=""
              src={foto6}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}