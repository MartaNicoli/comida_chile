import React from 'react';


const Footer = () => {
  return (
    <div className="container text-white bg-dark" >
      <footer className="py-3 my-4 " >
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Inicio</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Horarios</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Menu</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Reservas</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Delivery</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Acerca De</a></li>
          </ul>
      

        <p className="text-center text-white">&copy; 2023 Company, Inc</p>

      </footer>
    </div>
  )
}

export default Footer