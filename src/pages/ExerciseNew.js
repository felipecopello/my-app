// import { Button } from "bootstrap";
import React from "react";
// import Exercises from "./Exercises";

class ExerciseNew extends React.Component {

    /*     constructor (props) {
            super(props)
    
            this.handleClick= this.handleClick.bind(this) forma antigua de bindear el this al evento para que lo imprima por consola
        } */

    //     handleClick = () => { /* enlazo el evento con una public class field */
    //         console.log(this)/* ('Clicked') */
    //     }

    //     render() {
    //         return ( /* 'ExerciseNew' */
    //             <button onClick={this.handleClick}> {/* el evento se escribe con camelcase, controlo el evento con una funcion dentro del componente de clase,handleEvent */}
    //                 Send
    //             </button> /* recordar en minuscula, en mayusc es un componente react */
    //             )
    //     }
    // ------------------------------- CLASE 5 ----------------------------------------
    // --------------------------------------------------------------------------------
    /* EL formulario a incluir */
    state = {description:'',title:'',img:'',leftColor:'',rightColor:''} /* le tengo que definir un valor por defautl */

    handleSubmit = e => { /* evento submit del formulario */
        e.preventDefault() /* evita el reload */
        console.log(this.state)
    }

    handleChange = e => { /* evento change del formulario, cuando hay un cambio aca, hay un cambio en el estado del componente */
        this.setState({
            [e.target.name]: e.target.value /* el cambio en el target, cambia el state que tenga el mismo name */
        })
    }

    render() {
        return (
            <div className="container">
                <form
                    onSubmit={this.handleSubmit} /* el submit va en el form, lo utilizo para empaquetar la informacion cdo la envian. */
                >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name="title"
                            onChange={this.handleChange} /* el change va en el input */
                            value={this.state.title} /* para que se almacene tambien dentro del input el mismo valor que el estado. asi tengo una sola fuente de informacion */
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="img"
                            name="img"
                            onChange={this.handleChange}
                            value={this.state.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="leftColor"
                                name="leftColor"
                                onChange={this.handleChange}
                                value={this.state.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="rightColor"
                                name="rightColor"
                                onChange={this.handleChange}
                                value={this.state.rightColor}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}


export default ExerciseNew