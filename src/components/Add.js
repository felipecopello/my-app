import React from "react";
import icon from '../images/add.png'

function Add(props){
    return (
    <div className='Add row justify-content-center'> {/* asi centrmamos el icono cn bootstrap */}
        <img src= {icon} className='col-auto'/> {/* el obj a centrar debe tener un ancho */}
    </div>
    )
}

export default Add
