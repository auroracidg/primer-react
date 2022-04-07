import Item from './Item.js'
import './ItemList.css'


const ItemList = (props) => {
  return(
    <>
    <div className='style-item-list'>
      {props.productos.map( (producto, index) => {
        return(
          <Item key={index} producto={producto} />
        )
      } )}
    </div>
    </>  
  
  )
}
   
export default ItemList