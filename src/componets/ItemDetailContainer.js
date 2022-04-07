import { MediationOutlined } from '@mui/icons-material'
import collar from './../img/imagenCollar.png'
import './ItemDetailContainer.css'
import {useEffect, useState} from 'react'
import { ItemDetail } from './ItemDetail'

const productoCollar = {
              nombre:"Collar Perro",
              precio: "$5000",
              stock: 10,
              descripcion: "Collar de perros para tamaño mediano",
              url: "https://http2.mlstatic.com/D_NQ_NP_727425-CBT45380498267_032021-O.jpg"
}

const getProductoCollar= () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(productoCollar)
    }, 1500);
  })
}

getProductoCollar()
.then((productoCollar) => console.log (productoCollar));
  
const ItemDetailContainer = () => {

  let [collar, setCollar] = useState({})
    useEffect(()=>{
      getProductoCollar().then((collar)=>{
        setCollar(collar)
        console.log(collar)
      }).catch(()=>{
        console.log("Error: Algo salio mal :(")
      })
  
    },[])



  return(
    <>
      <ItemDetail collar={collar}></ItemDetail>
     
  
    </>  
  )
}
   
export default ItemDetailContainer