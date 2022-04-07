import React from "react";
import './Header.css'
import logo from './../img/logovet.png'
import IconoDelCarrito from '@mui/icons-material/ShoppingCart';
import { ListItem } from "@mui/material"
import { NavLink,Link } from "react-router-dom";

const Header = (props) => {

    return(
        <div className="wrap-nav">
        <NavLink to="/" ><img src= {logo} alt= "logo"></img></NavLink>
            
            <h1 className= "" >Clinica Veterinaria gomid.</h1>

            <nav>
               <NavLink to="categorias/reserva">Reserva de horas</NavLink>
               <NavLink to="/accesorios">Accesorios</NavLink>
               <NavLink to="categorias/contacto">Contacto</NavLink>
            </nav>

            {props.children}
       

       </div>
    )
}


export default Header