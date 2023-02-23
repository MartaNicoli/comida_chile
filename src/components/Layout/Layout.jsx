import  Navigation from "../../routes/Navigation/Navigation";
import Home from "../../pages/Home/Home";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import  Card  from "../Card/Card";


    

const Layout = () =>{
return (
<div>
    <Navigation/>
    <Outlet/>
    <Home/>
    <Card/>
    <Footer/>
 
</div>
)
}

export default Layout