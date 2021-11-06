import React from "react";
import Welcome from "../components/Welcome";
import ExerciseList from "../components/ExerciseList"; /* importamos los elementos que queremos que contenga la pagina */
import Add from "../components/Add";


class Exercises extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            data: [{
                  "id": 1,
                  "title": "Technique Guides",
                  "description": "Learn amazing street workout and calisthenics",
                  "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
                  "leftColor": "#A74CF2",
                  "rightColor": "#617BFB"
                },
                {
                  "id": 2,
                  "title": "Skills Training",
                  "description": "Learn the secrets of bodyweight techniques",
                  "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
                  "leftColor": "#17EAD9",
                  "rightColor": "#6078EA"
                },
                {
                  "id": 3,
                  "title": "Strength Training",
                  "description": "Train anytime, everywere and become a superhero!",
                  "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
                  "leftColor": "#FAD961",
                  "rightColor": "#F76B1C"
                }]
            }
    }
        /* voy a iterar desde un json la informacion que quiero poner en las 3 cards, primero le defino un state */
        
    render(){

        // return (
        //     <div>
        //             <Welcome
        //                 username='Raul '
        //             />
        //             {   this.state.data.map((exercise) => { /* esta funcion, itera el jason almacenado en la clase exercise data, y lo injecta como props enel componente card. estoy haciendo el render dentro de la clase exercises, por lo que el .this apunta a ese componente. lo que me devuelve es 1 */
        //                 return(
        //                     <Card
        //                         title={exercise.title}
        //                         description={exercise.description}
        //                         img= {exercise.img}
        //                         leftColor={exercise.leftColor}
        //                         rightColor={exercise.rightColor}
        //             />
        //                 )
        //             })

        //             }
                    
        //     </div> 
        // )
        return(
            <div>
                <Welcome
                    username='Matu '
                />
                <ExerciseList
                    exercises={this.state.data} /* le paso las props a la lista que va a iterar, y es THIS pq el json a iterar esta en el estado de esta clase */
                />
                <Add />
            </div>
        )
    }
}

export default Exercises