import Item from './Item.js'

const ItemList = (props) => {
  return(
    <>
      {props.productos.map( (producto, index) => {
        return(
          <Item key={index} producto={producto} />
        )
      } )}
    </>  
  
  )
}
   
export default ItemList