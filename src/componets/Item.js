import './Item.css'

const Item = (props) => {
  return(
    <>
     
      <div className='style-productos'>
      <p>{props.producto.nombre}</p>
      <p>{props.producto.valor}</p>
      <img src={props.producto.url}/>
      <button type="button">Añadir al carrito!</button>
      </div>
    </>  
  
  )
}
   
export default Item