import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/pantalla';
import freecodecampLogo from './imagenes/favicon-32x32.png';

function App() {

  const[input,setInput] =useState ('');

  const agregarInput = val =>{
    setInput(input +val);
  };

  const calcualResultado =() =>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Por favor ingrese valores para realizar los calculos')
    }
  };
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freecodecampLogo}
          className=  'freecodecamp-logo'
          alt="Logo de FreeCodeCamp"/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input ={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcualResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear= {() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default App;
