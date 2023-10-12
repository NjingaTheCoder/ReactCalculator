import React , {useState} from 'react';
import './resources/Calculator.css'
import CalculatorValues from './CalculatorValue'

let results = 0;
let isEqual = false;
let signCount = 0;
let signs = [];
let digits = [];
const bodmas = ['/','x','+','-'];


const Calculator = () => {

    const [labelOne, setlabelOne] = useState('');
    const [labelTwo, setlabelTwo] = useState(0);


function clearCalculator(){
    setlabelOne('');
    setlabelTwo(0);
    results = 0;
    signs = [];
    digits = [];
    signCount = 0;
    results = 0;
    isEqual = false;
}

function addNumber(number){

    if(labelTwo === 0 || labelTwo == "/" || labelTwo == "-" || labelTwo == "+" || labelTwo == "x"){
        setlabelTwo(number);
    }else if(isEqual){
        setlabelTwo(number);
        setlabelOne('');
        isEqual = false;
    }else{

        try{
            setlabelTwo((prev) => {return `${prev}${number}`});
        }catch(error){

            console.log(error);
        }

    }

}

function setOperatorData(operator){

    
    if(!(labelTwo === '/') && !(labelTwo === '+') && !(labelTwo === '-') && !(labelTwo === 'x')){
        if(operator === '/' ){
    
           signs[signCount] = operator;
           digits[signCount] = parseFloat(labelTwo);
           if(isEqual){
                setlabelOne('');
                isEqual = false;
            }
    
            setlabelOne((prev) => { return `${prev}${labelTwo}${operator}`});
            setlabelTwo(`${operator}`);
        }else if(operator === '+' ){
          
            signs[signCount] = operator;
            digits[signCount] = parseFloat(labelTwo);
            if(isEqual){
                setlabelOne('');
                isEqual = false;
            }
    
            setlabelOne((prev) => { return `${prev}${labelTwo}${operator}`});
            setlabelTwo(`${operator}`);
        }else if(operator === '-' ){

            signs[signCount] = operator;
            digits[signCount] = parseFloat(labelTwo);
            if(isEqual){
                setlabelOne('');
                isEqual = false;
            }
    
            setlabelOne((prev) => { return `${prev}${labelTwo}${operator}`});
            setlabelTwo(`${operator}`);
        }else if(operator === 'x' ){

            signs[signCount] = operator;
            digits[signCount] = parseFloat(labelTwo);
            if(isEqual){
                setlabelOne('');
                isEqual = false;
            }
    
            setlabelOne((prev) => { return `${prev}${labelTwo}${operator}`});
            setlabelTwo(`${operator}`);
        }
        signCount++;
       
    }

    console.log(signs + digits);
}

    
function addOperators(operator){

    if(operator === 'AC'){
        clearCalculator();
    }else if(operator === '='){
        
        signs[signCount] = '';
        digits[signCount] = parseFloat(labelTwo);

        for(let i = 0; i < signs.length; i++){

            if(signs[i] === '/'){

                if(i === 0){
                    results = parseFloat(digits[i]) / parseFloat(digits[i + 1]);
                }else{
                    results = results / parseFloat(digits[i + 1]);
                }
            }else if(signs[i] === '+'){
                if(i === 0){
                    results = parseFloat(digits[i]) + parseFloat(digits[i + 1]);
                }else{
                    results = results + parseFloat(digits[i + 1]);
                }
            }else if(signs[i] === '-'){
                if(i === 0){
                    results = parseFloat(digits[i]) - parseFloat(digits[i + 1]);
                }else{
                    results = results - parseFloat(digits[i + 1]);
                }
            }else if(signs[i] === 'x'){
                if(i === 0){
                    results = parseFloat(digits[i]) * parseFloat(digits[i + 1]);
                }else{
                    results = results * parseFloat(digits[i + 1]);
                }
            }
        }
        
        console.log(signs + digits);
        console.log(results);
        setlabelTwo(results);
        setlabelOne(results);
        signs = [];
        digits = [];
        signCount = 0;
        results = 0;
        isEqual = true;
    }else{

          setOperatorData(operator);
    }
} 

    return(
        <div className='calculator-container'>
       

            <div className='non-operators'>
            
                <div className='label-container'>
                    <label className='label-1'>{labelOne}</label>
                    <label className='label-2'>{labelTwo}</label>
                </div>

                <div className='value-container'>
                    <CalculatorValues addOperators={addOperators} addNumber = {addNumber}/>
                </div>
            </div>

        </div>
    );
}


export default Calculator