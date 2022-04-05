const Item = (props) => {
  return(
    <>
      <p>{props.producto.nombre}</p>
      <p>{props.producto.valor}</p>
    </>  
  
  )
}
   
export default Item