import React from 'react'
import './styles/Welcome.css'

function Welcome(props){ /* componente funcional, el componente de clase tiene state y nos permite trabajar con ciclo de vida. las props las pasamos como argumento */
    return(
        <div className='container'>
            <div className='Fitness-User-Info'>
                <h1>Hello {props.username}!</h1>
                <p>Lets workout and get some gains!</p>
            </div>
        </div>
    )
}

export default Welcome