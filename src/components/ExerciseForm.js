import React from "react";

class ExerciseForm extends React.Component {

    // state = { } el estado no se maneja mas desde aca, asique me lo llevo a Exercisenew y lo paso como prop

    handleSubmit = e => { 
        e.preventDefault() 
        console.log(this.state)
    }

    // handleChange = e => { 
    //     this.setState({
    //         [e.target.name]: e.target.value   /* para elevar el estado voy a llevar el controlador del evento al componente padre que lo invoca, exerciseNew */
    //     })
    // }

    render() {

        const {onChange,form} =this.props /* asigno el controlador que le pase por props a una const y reemplazo en mi formulario */

        return (
            <div className="container">
                <form
                    onSubmit={this.handleSubmit} 
                >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name="title"
                            onChange={onChange} /* el change va en el input */
                            value={form.title} /* cambio el this.state por el form (es el estado del exercise new que le pase como prop) */
                            // value={this.state.title} /* para que se almacene tambien dentro del input el mismo valor que el estado. asi tengo una sola fuente de informacion, AL ELEVARLO EL ESTADO lo va a obtener desde el exercisenew(se lo pase como prop) */
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="img"
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="leftColor"
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="rightColor"
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor}
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

export default ExerciseForm