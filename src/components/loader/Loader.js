/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
//Estilos
import{useState} from'react'
import'./Loader.css'

//componentes
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const Loader =()=>{//funcion constructora
const [cargando, setCargando]=useState(true)

useEffect (()=>{
    setTimeout(()=>{
        setCargando(false)
    },5000)
})

if(cargando){

//Render
return(
<div className="loader-padding">
    Loader....
    </div>

)}else{
    return(
        <div className="loader-padding">
            Ya cargó por completo
            </div>)

}

}
export default Loader