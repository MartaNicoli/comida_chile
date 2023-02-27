import './App.css';
import Allroutes from './Routes/Allrouter/Allroutes';
//import Locales from './pages/Locales/Locales';
//import Home from './pages/Home/Home'; 
//import Delivery from './pages/Delivery/Delivery';
//import Login from './pages/Login/Login';
//import Menu from './pages/Menu/menu';
//import Reservas from './pages/Reservas/Reservas'; 
//import Users from './pages/Admin/users/User';
//import Layout from './components/Layout/Layout';



function App() {
  return (
    <div> 
      <Allroutes/>
      {/*<Routes>
        <Route path='/' element ={<Layout/>}/>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/menu' element ={<Menu/>}/>
        <Route path='/reservas' element ={<Reservas/>}/>
        <Route path='/locales' element ={<Locales/>}/>
        <Route path='/delivery' element ={<Delivery/>}/>
        <Route path='/admin/users' element ={<Users/>} />
  </Routes> */}
    </div>
  );
}



export default App
