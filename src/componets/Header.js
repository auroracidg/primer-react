import React from "react";
import './Header.css'
import logo from './../img/logovet.png'
import IconoDelCarrito from '@mui/icons-material/ShoppingCart';

const Header = () =>{

    return(

        <div>
       
            <img src= {logo} alt= "logo"></img>

            <h1>Clinica Veterinaria gomid</h1>

            <nav>
               <a href="#">Reserva de horas</a>
               <a href="#">Accesorios</a>
               <a href="#">Contacto</a>
            </nav>

            <IconoDelCarrito color="secondary"/>

       </div>
    )
}


export default Header