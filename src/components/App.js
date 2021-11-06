import React from "react";
import {BrowserRouter, Route} from 'react-router-dom' /* importo el react browser dom, los componentes browser router y route */
import Exercises from "../pages/Exercises"; /* ahora la pagina va a ser rendereada a traves de este componente */
import Exercises from "../pages/ExerciseNew"; /* ahora la pagina va a ser rendereada a traves de este componente */


function App(){
    return (
        <BrowserRouter>
        
            <Route path='/exercise' component={Exercises } /> {/* el componente route importado va a recibir props, una ruta a buscar y un componente para buscar, le paso el componente que va a renderar. EL PATH ES EL HTTP. */}
            <Route path='/exercise/new' component={ExerciseNew } /> {/* se le pasa la nueva pagina que queremos que agregue */}

        </BrowserRouter>
    )
}

export default App