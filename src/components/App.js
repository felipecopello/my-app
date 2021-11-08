import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; /* importo el react browser dom, los componentes browser router y route */
// import {Switch} from 'react-router';
import Exercises from "../pages/Exercises"; /* ahora la pagina va a ser rendereada a traves de este componente. el componente switch, no existe mas, ahora se usa routes lo que hace es renderar el primer HIJO de router que haga match con el path, nos permite tambien definir que pasa si se intenta acceder a un path que no tenemos. */
import ExerciseNew from "../pages/ExerciseNew"; /* ahora la pagina va a ser rendereada a traves de este componente */
import NotFound from "../pages/NotFound"


const App = () =>(
    <Router>
            
        <Routes>
        <Route exact path='/exercises' element={<Exercises/> } /> {/* el componente route importado va a recibir props, una ruta a buscar y un componente para buscar, le paso el componente que va a renderar. EL PATH ES EL HTTP. */}

        <Route exact path='/exercise/new' element={<ExerciseNew/> } /> {/* se le pasa la nueva pagina que queremos que agregue */}

        <Route path='*' element={<NotFound/> } />
        </Routes>
           
           
    </Router>
)

// function App(){
//     return (
//         <Router>
            
//                 <Routes>
//                 <Route exact path='/exercises' element={<Exercises/> } /> {/* el componente route importado va a recibir props, una ruta a buscar y un componente para buscar, le paso el componente que va a renderar. EL PATH ES EL HTTP. */}
        
//                 <Route exact path='/exercise/new' element={<ExerciseNew/> } /> {/* se le pasa la nueva pagina que queremos que agregue */}
        
//                 <Route path='*' element={<NotFound/> } />
//                 </Routes>
           
           
//         </Router>
//     )
// }

export default App