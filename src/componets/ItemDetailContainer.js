import collar from './../img/imagenCollar.png'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  return(
  <div className='css-container'>
    <img src= {collar} alt= "collar"></img>
    <h1 className='title-collar'>Collar De Perro</h1>
    <h2>$5.990</h2> 
    <h2> stock disponible: 10 </h2> 
  </div>  
  
  )
}
   
export default ItemDetailContainer