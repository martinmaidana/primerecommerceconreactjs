//        IMPORTACIONES

// Modulos

// Estilos
import './ItemListContainer.css'

// Componentes
import ItemList from '../itemList/ItemList.js'


// Core


//        LOGICA

// Función constructora
const ItemListContainer = () =>{

    return(
        <div className='contenedor'>           
                <h2>Productos</h2>           
            <ItemList/>
        </div>
    )
}


//        EXPORTACIÓN
export default ItemListContainer
