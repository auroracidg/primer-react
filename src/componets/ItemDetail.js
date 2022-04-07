import { PrecisionManufacturing } from "@mui/icons-material"



export const ItemDetail =({collar}) => {

    return (

        <div>
            <img src={collar.url}/>
            <h1>{collar.nombre}</h1>
            <h1>{collar.precio}</h1>
            <h1>{collar.stock}</h1>

        </div>
    )

}



