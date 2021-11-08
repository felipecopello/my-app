import React from "react";
import icon from '../images/add.png'
import './styles/Add.css'
import {Link} from 'react-router-dom' 


const Add = () =>(
    <Link to='/exercise/new' className='Add row justify-content-center'>
          <img src= {icon} alt='Add' className='col-auto addImg '/> 
     </Link>
)




// function Add(props){
//     return (
    
  

//         <Link to='/exercise/new' className='Add row justify-content-center'>{/* al hacerle click cambia el href, asi centrmamos el icono cn bootstrap */}
//             <img src= {icon} className='col-auto addImg '/> {/* el obj a centrar debe tener un ancho */}
//         </Link>
    
//     )
// }

export default Add
