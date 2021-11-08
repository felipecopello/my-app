import React from "react";
import Card from "./Card"; /* por que estoy usando este componente */

/* estoy creando un componente que me devuelva la iteracion del json, y lo injecta en el componente card */

const ExerciseList = (props) => (
    <div>
        {props.exercises.map((exercise) => { /* cambio el this.state por las props que recibo y le doy el nombre exercises */
            return (
                <Card
                    key={exercise.id} /* SIN esto da el error de que cada hijo en una lista DEBE tener una unique key */
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                />
            )
        })
        }
    </div>

)

// function ExerciseList(props) {
//     return (
//         <div>
//             {props.exercises.map((exercise) => { /* cambio el this.state por las props que recibo y le doy el nombre exercises */
//                 return (
//                     <Card
//                         title={exercise.title}
//                         description={exercise.description}
//                         img={exercise.img}
//                         leftColor={exercise.leftColor}
//                         rightColor={exercise.rightColor}
//                     />
//                 )
//             })

//             }
//         </div>
//     )
// }

export default ExerciseList