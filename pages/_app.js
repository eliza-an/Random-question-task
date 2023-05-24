import StaticMath from '../components/StaticMath/StaticMath'
import MathInput from '../components/MathInput/MathInput';
import { useState } from 'react';
import '../public/styles/globals.css'
import { evaluateTex } from 'tex-math-parser';
import RandomNumber from '../components/question/RandomNumber'
import RandomNumber2 from '../components/question/RandomNumber2';
import SmallNumber from '../components/question/smallNumber'

export default function App({}){

    const [memory, setMemory] = useState({});
    const [solutionShown, setSolutionShown] = useState(false);


    const [randomNumberString, setRandomNumberString] = useState('');
    const [randomNumberString2, setRandomNumberString2] = useState('');
    const [SmallNumberString, setSmallNumberString] = useState('');


    
    // new state to update the state when random number is reciveed as string for num1
     const handleRandomNumberString = (numberString) => {
    setRandomNumberString(numberString);
    };

    //for num2
     const handleRandomNumberString2 = (numberString2) => {
    setRandomNumberString2(numberString2);
    };
    
    //for smallNumber
    const handleRandomNumberSmall = (SmallNumberString) => {
    setSmallNumberString(SmallNumberString);
    };




    function addToMemory(newValue){
        setMemory((prev)=>{
            return {...prev, ...newValue}
        });
    }

    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{maxWidth:'800px', width:'calc(100vw - 40px)', marginTop:'50px'}}>

                {/* taking random number and passing the OnRandomString prop (passing a function as a prop) to the parent component */}

                      <RandomNumber onRandomNumberString={handleRandomNumberString} />
                      {/* passing random number string to render it using latex */}
                     <StaticMath latex= {randomNumberString} />
                      <RandomNumber2 onRandomNumberString={handleRandomNumberString2} />
                     <StaticMath latex={randomNumberString2} />
                      <SmallNumber onRandomNumberString={handleRandomNumberSmall} />
                     <StaticMath latex={SmallNumberString} />
                
                <StaticMath latex={`\\text{Generate a random question and display it here.}`} />
                <br/>
                <br/>
                {solutionShown ? <StaticMath latex={`\\text{Display the solution here}`} /> : ''}
                <br/>
                <br/>
                <MathInput buttons={['power', 'times']} markingFunction={markingFunction} memKey='mathinput1' memory={memory} setMemory={addToMemory} placeholder="Type your answer here!"/>
                <br/>
                <br/>
                <button onClick={()=>{setMemory((prev)=>{return{...prev, feedbackShown:true}})}}>Check Answer</button>
                <br/>
                {!solutionShown ? <button style={{marginTop:'20px'}} onClick={()=>{setSolutionShown(true)}}>Show Solution</button> : ''}
                {solutionShown ? <button style={{marginTop:'20px'}} onClick={()=>{setSolutionShown(false)}}>Hide Solution</button> : ''}
            </div>
        </div>
    );
}

function markingFunction(userInput){
    let inputValue;
    try{
        //the evaluateTex function takes a latex string as an input and returns the evaluation as a javascript number
        inputValue = evaluateTex(userInput).evaluated;
    }catch{
        return 0;
    }
    if(inputValue === 5){
        return 1
    }else{
        return 0;
    }
}
