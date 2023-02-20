import Locales from '../../pages/Locales/Locales';
import Home from '../../pages/Home/Home'; 
import Delivery from '../../pages/Delivery/Delivery';
import Login from '../../pages/Login/Login';
import Menu from '../../pages/Menu/menu';
import Reservas from '../../pages/Reservas/Reservas'; 
import Users from '../../pages/Admin/users/User';
import Layout from '../../components/Layout/Layout';
import { Routes , Route } from 'react-router-dom';
import  Card  from '../../components/Card/Card';


const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Layout/>}>
            <Route path='/locales' element={<Locales/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/delivery' element={<Delivery/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/reservas' element={<Reservas/>}/>
            <Route path='/users' element={<Users/>}/>     
            <Route path='/card' element={<Card/>}/>  
        </Route>
    </Routes>
  )
}

export default Allroutes