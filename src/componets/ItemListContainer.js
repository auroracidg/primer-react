import {useEffect, useState} from 'react'
import ItemList from './ItemList'

const productosIniciales = [
    {nombre: "Collar de Perro", valor: 100, url:"https://cdn.shopify.com/s/files/1/0280/2053/9497/products/Collar-broche-dorado-verde-dorado-1_540x.jpg?v=1629429532" },
    {nombre: "Ropa Gato y Perro", valor: 350, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspKGZxMvJju3CSrM2vkbuSODH6v9_TL1007N5C9riPDBhqfMgPiUPgrhgApSg6X2EbIg&usqp=CAU"},
    {nombre: "Camas Mascotas", valor: 150, url:"https://m.media-amazon.com/images/I/81ZFlW1cpKL._AC_SX466_.jpg"},
    {nombre: "Perfumes mascotas", valor: 15, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKEwo8U7mLhzXIRcsn37gweMS_ujtfApVcv52Zy33dSfeW-juZklla0GcmU0Y2QRSGUc&usqp=CAU"},
    {nombre: "Juguetes mascotas", valor: 10, url:"https://m.media-amazon.com/images/I/51xn0pV+FfL._SL500_.jpg"},
    {nombre: "Arnes gatos y perros", valor: 23, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhFRvmTiX3uCNMq5z2HKd3lmq7KH4n9oo6A&usqp=CAU"}
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