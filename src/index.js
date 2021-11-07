// const element = document.createElement('h1')
// /* creamos un elemento h1 */

// element.innerText='hola react'
// /* le injectamos contenido al h1 */

// const container = document.getElementById('root')

// container.appendChild(element)

// ----------------------------------------------------
/* EL MISMO CODIGO PERO EN JSX */
/* 1) lo primero es importar react para poder usarlo */
import React from "react";
import reactDom from "react-dom";


// const user = {
//   nombre: "felipe",
//   apellido: "copello",
//   avatar:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png'

//  } /* el objeto usuario */

// function getName(user) {
//   return `${user.nombre} ${user.apellido}`
// }

/* SI tenemos un usuario, la funcion lo saluda, sino hola extraño */
// function getGreeting(user){
//   if(user){
//     return <h1> hola {getName(user)} </h1>
//   }
//   return  <h1> hola extraño </h1>
// }

// const nombre = 'Felipe'
// const element = <h1> hola {getName(user)} </h1>
/* puedo insertar el contenido a traves de variables, o de funciones */


// const element = <div>{getGreeting()}</div> /* aca element es un div, que tiene una funcion que CREA a su vez un h1 */

// const elementito = <img src={user.avatar}/> /* le paso el src a la im con el metodo. */

// /* en este elemento combinamos todo, cremos un div, un h1 con la funcion que saluda al usuario y la img con el metodo del usuario */
// const element = (
//   <div>
//     <h1> {getGreeting(user)} </h1>
//     <img src={user.avatar}/>
//   </div>
// )

// const container = document.getElementById('root')
// reactDom.render(element,container); /* recibe dos parametros, el elemento que renderear y donde lo va a renderear */
// reactDom.render(elementito,container)


// --------------------------------------------------------
// ----------------------- CLASE 2 ------------------------

import Card from './components/Card' /* tengo que importar el componente para poder usarlo */
import 'bootstrap/dist/css/bootstrap.css' /* importo los estilos bootstrap ya instalados en mis dependencias por consola */


// const container = document.getElementById('root')
// reactDom.render(<Card
//                     title='Technique Guides'
//                     description='Learn amazing street workouts and calisthenics'
//                     img= 'https://cdn2.iconfinder.com/data/icons/exercise-3/185/exercise-11-128.png'
//                     leftColor='#A74CF2'
//                     rightColor='#617BFB'
          
// />,container); /* para renderear el componente tengo que llamarlo con sus etiquetas.   cuando renderizo el componente, le especifico que propiedades va a tener*/


// --------------------------------------------------------
// ----------------------- CLASE 3 ------------------------
import Welcome from "./components/Welcome";
// import Exercises from "./pages/Exercises";
import App from './components/App.js'

const container = document.getElementById('root')
// reactDom.render( <Exercises/> ,container);  /* ya no llamamos de a un componente a la vez, sino a la pagina */

// --------------------------------------------------------
// ----------------------- CLASE  ------------------------
// trabajamos con react routers para injectar contenido de forma dinamica. hay que crear un componente e importarlo. en este caso uso eñl componente App

reactDom.render( <App/> ,container); /* paso a renderear el componente app */