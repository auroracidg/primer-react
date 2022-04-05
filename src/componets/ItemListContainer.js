import {useEffect, useState} from 'react'
import ItemList from './ItemList'

const productosIniciales = [
    {nombre: "Collar de Perro", valor: 100},
    {nombre: "Ropa Gato y Perro", valor: 350},
    {nombre: "Camas Mascotas", valor: 150}
  ]
  
const promesa = new Promise((respuesta, reject) => {
  setInterval(() => {
    respuesta(productosIniciales)
  }, 2000);
})


const ItemListContainer = () => {

  let [productos, setProductos] = useState([])

  useEffect(()=>{
    promesa.then((productos)=>{
      setProductos(productos)
      console.log(productos)
    }).catch(()=>{
      console.log("Error: Algo salio mal :(")
    })

  },[])

  return(
    <>
      <ItemList productos={productos}/>
    </>  
  )
}
   
export default ItemListContainer