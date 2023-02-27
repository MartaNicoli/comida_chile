import Locales from '../../Pages/Locales/Locales';
import Home from '../../Pages/Home/Home'; 
import Login from '../../Pages/Login/Login';
import Reservas from '../../Pages/Reservas/Reservas'; 
import Users from '../../Pages/Admin/users/User';
import Layout from '../../components/Layout/Layout';
import { Routes , Route } from 'react-router-dom';
import Card from '../../components/Card/Card';
import AcercaDe from '../../components/AcercaDe/AcercaDe';
import Menu from '../../Pages/Menu/Menu';






const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Layout/>}>
            <Route path='/locales' element={<Locales/>}/>
            <Route path='/comida_chile' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/reservas' element={<Reservas/>}/>
            <Route path='/users' element={<Users/>}/>     
            <Route path='/card' element={<Card/>}/>  
            <Route path='/AcercaDe' element={<AcercaDe/>}/> 
  
        </Route>
    </Routes>
  )
}

export default Allroutes