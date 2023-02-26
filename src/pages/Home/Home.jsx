import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../Imagenes/Slide1.jpg';
import Slide2 from '../Imagenes/Slide2.jpg';
import Slide3 from '../Imagenes/Slide3.jpg';
import './Home.css';


  const Home = () =>{
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="Carousel"
        src={Slide1}
        alt="Imagen1"
      />
      <Carousel.Caption>
        <h3>Contamos con comedores privados</h3>
        <p>En nuestros comedores encontrarás la privacidad para una reunión de trabajo o citas romanticas</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="Carousel"
        src={Slide2}
        alt="Imagen2"
      />

      <Carousel.Caption>
        <h3>Te esperamos</h3>
        <p>Ven a pasar un rato agradable junto amigos y familiares</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="Carousel"
        src={Slide3}
        alt="Imagen3"
      />

      <Carousel.Caption>
        <h3>Celebra tus fechas especiales junto a  nosotros</h3>
        <p>
          Te daremos la mejor atención.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

)
}


export default Home

 



{/*<div className="container" style={{ margintop:40, marginBotom:40 }}>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slide1} className="d-block w-100" alt="imagen1"/>
          </div>
          <div className="carousel-item">
            <img src={Slide2} className="d-block w-100" alt="imagen2"/>
          </div>
          <div className="carousel-item">
            <img src={Slide3} className="d-block w-100" alt="imagen3"/>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
 
*/}



{/*function Home({images}) {
  return (
    <Carousel>
      {images ? images.map(image => (
        <Carousel.Item key={image.id}>
          <h1>Mi Carrusel</h1>
          <img
            className="Carousel"
            src={images.imageUrl}
            alt={images.altText}
          />
        </Carousel.Item>
      )) :null}
    </Carousel>
  );
}

export default Home







{/*function Home() {
  const images = [
    { src: '../Imagenes/Slide1.jpg', alt: 'imagen1' },
    { src: '../Imagenes/Slide2.jpg', alt: 'imagen2' },
    { src: '../Imagenes/Slide3.jpg', alt: 'imagen3' },
  ];

  return (
    <div>
      <h1>Mis Imagenes</h1>
      <Carrusel images={images} />
    </div>
  );
}

export default Home;*/}