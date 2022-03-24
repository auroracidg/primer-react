import React from "react";
import './Header.css'
import logo from './../img/logovet.png'
import IconoDelCarrito from '@mui/icons-material/ShoppingCart';
import { ListItem } from "@mui/material"


const Header = () => {

    

    return(

        <div>
       
            <img src= {logo} alt= "logo"></img>

            <h1 className= "" >Clinica Veterinaria gomid.</h1>

            <nav>
               <a href="#">Reserva de horas</a>
               <a href="#">Accesorios</a>
               <a href="#">Contacto</a>
            </nav>

           
       

       </div>
    )
}


export default Header