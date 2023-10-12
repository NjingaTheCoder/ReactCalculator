import React from 'react';
import './resources/CalculatorValues.css'
import CalculatorOperators from './CalculatorOperator';

const CalculatorValues = ({addNumber , addOperators}) => {

    return(
        <div className='calculator-value-container'>
            <div className='non-operators'>
            
                <div className='extra-container-one'>
                    <div onClick={() => {addOperators('AC')}} className='ac'>AC</div>
                    <div onClick={() => {addOperators('/')}} className='divide'>/</div>
                </div>

                <div className='value-grid'>
                    <div onClick={() => {addNumber(7)}}   className='bigger-than-zero'>7</div>
                    <div onClick={() => {addNumber(8)}}  className='bigger-than-zero'>8</div>
                    <div onClick={() => {addNumber(9)}}  className='bigger-than-zero'>9</div>
                    <div onClick={() => {addNumber(4)}}  className='bigger-than-zero'>4</div>
                    <div onClick={() => {addNumber(5)}}  className='bigger-than-zero'>5</div>
                    <div onClick={() => {addNumber(6)}}  className='bigger-than-zero'>6</div>
                    <div onClick={() => {addNumber(1)}}  className='bigger-than-zero'>1</div>
                    <div onClick={() => {addNumber(2)}}   className='bigger-than-zero'>2</div>
                    <div onClick={() => {addNumber(3)}}  className='bigger-than-zero'>3</div>
                </div>

                <div className='extra-container'>
                    <div onClick={() => {addNumber(0)}} className='zero'>0</div>
                    <div onClick={() => {addNumber('.')}} className='point'>.</div>
                </div>
            </div>

            <CalculatorOperators addOperators = {addOperators}/>
        </div>

    );
}

export default CalculatorValues