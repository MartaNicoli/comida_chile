import React from 'react';

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

export default Carrusel;