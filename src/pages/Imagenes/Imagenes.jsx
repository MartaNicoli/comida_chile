import React from 'react';
import Home from '../Home/Home';



function Imagenes() {
  const images = [
    {
      id: 1,
      imageUrl: './Images/Slide1.jpg',
      altText: 'Image 1'
    },
    {
      id: 2,
      imageUrl: './Images/Slide2.jpg',
      altText: 'Image 2'
    },
    {
      id: 3,
      imageUrl: './Images/Slide3.jpg',
      altText: 'Image 3'
    }
  ];

  return (
    <div>
      <Home images={images}/>
    </div>
  );
}

export default Imagenes

  







/*import React from 'react';

function Carrusel(props) {
  const images = props.images.map((image, index) => (
    <img key={index} src={image.src} alt={image.alt} />
  ));

  return (
    <div>
      {images}
    </div>
  );
}

export default Carrusel;*/