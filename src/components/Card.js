import React from "react"
import exerciseImg from '../images/6328544.png' /* tengo que importar la imagen elegida, sacada de ICON FINDER */
import fondo from '../images/circles.png' /* para poder reutilizar el componente, le pongo la propiedad y no la imagen de fondo directamente en el estilo */
import './styles/Card.css' /* importo los estilos */


// class Card extends React.Component { /* creo la clase y extiende los atributos de un componente react */
//         render(){/* hay que renderear con la funcion */
//             const {title, description, leftColor, rightColor, img} = this.props /* esto lo hacemos, para directamente poder poner el nombre de la propiedad donde corresponde y ahorrarnos el this.props.propiedad, en cada lugar que lo querramos usar */
//             return (
//                 <div className='card mx-auto Fitness-Card' style={{
//                     backgroundImage: `url(${fondo}), linear-gradient(to right, ${this.props.leftColor}, ${rightColor}`
//                 }}>
//                     <div /* className='card-body' */>
//                         <div className='row center' >
//                             <div className='col-6'>
//                                  <img src={img} className="float-right"  alt='imagen'/> {/* la paso como un prop */}
//                              </div>
//                             <div className='col-6 Fitness-Card-Info' >
//                                 <h1 className= 'Fitness-Card-Info'> {title}</h1> {/* una vez especificado el elemento a renderizar con sus props, puedo llamarlas de esta manera */}
//                                 <p className= 'Fitness-Card-Info'> {description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
// }

// -------------------------------------------------------------
// ----------------------- CLASE 3 -----------------------------

class Card extends React.Component { 

    // constructor(props){
    //     super(props) /* para pasarle las props al constructor base */
    //     this.state = { /* defino el valor predeterminado del estado con un objeto */
    //         image: 'https://cdn2.iconfinder.com/data/icons/exercise-3/185/exercise-11-128.png'
    //     }
    // }

    // componentDidMount(){ /* es una funcion que se ejecuta cuando un componente se monta, estamos simulando un evento */
    //     setTimeout(()=>{
    //         this.setState({
    //             image: 'https://cdn2.iconfinder.com/data/icons/exercise-3/185/exercise-05-128.png'
    //         })
    //     },5000)
    // }

    render(){
        const {title, description, leftColor, rightColor, img} = this.props 
        return (
            <div className='card mx-auto Fitness-Card' style={{
                backgroundImage: `url(${fondo}), linear-gradient(to right, ${leftColor}, ${rightColor}`
            }}>
                <div /* className='card-body' */>
                    <div className='row center' >
                        <div className='col-6'>
                             <img src={img} /* como la imagen va a cambiar uso el estado */className="float-right"  alt='imagen'/>
                         </div>
                        <div className='col-6 Fitness-Card-Info' >
                            <h1 className= 'Fitness-Card-Info'> {title}</h1> 
                            <p className= 'Fitness-Card-Info'> {description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card /* tengo q poner export para invocarla en mi main */





