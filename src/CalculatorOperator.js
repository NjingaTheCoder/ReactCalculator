import React from 'react';
import './resources/CalculatorOperators.css'

const CalculatorOperators = ({addOperators}) =>{

    return(
        <div className='operators'>

            <div onClick={() => {addOperators('x');}}   id='x' className='operator'>x</div>
            <div onClick={() => {addOperators('-');}}  className='operator'>-</div>
            <div onClick={() => {addOperators('+');}}  className='operator'>+</div>
            <div onClick={() => {addOperators('=');}} className='equals'>=</div>

        </div>
    );
}

export default CalculatorOperators