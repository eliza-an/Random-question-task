import StaticMath from '../components/StaticMath/StaticMath';
import MathInput from '../components/MathInput/MathInput';
import { useState, useEffect } from 'react';
import '../public/styles/globals.css';
import { evaluateTex } from 'tex-math-parser';
import RandomNumber from '../components/question/RandomNumber';
import SmallNumber from '../components/question/smallNumber';
import FruitSelector from '../components/question/fruit'

export default function App({}){

    const [memory, setMemory] = useState({});
    const [solutionShown, setSolutionShown] = useState(false);


    const [FinalAnswer1, setFinalAnswer1] = useState('');
    const [FinalAnswer2, setFinalAnswer2] = useState('');
    const [xCoefficient1, setXCoefficient1] = useState('');
    const [yCoefficient1, setYCoefficient1] = useState('');
    const [xCoefficient2, setXCoefficient2] = useState('');
    const [yCoefficient2, setYCoefficient2] = useState('');

    console.log(parseInt(FinalAnswer1))
    
    // new state to update the state when random number is reciveed as string for num1
    const handleRandomNumberString = (numberString) => {
    setFinalAnswer1(numberString);
    };

    //for num2
    const handleRandomNumberString2 = (numberString2) => {
    setFinalAnswer2(numberString2);
    };
    
    //for smallNumber1
    const handleRandomNumberSmall = (xCoefficient1) => {
    setXCoefficient1(xCoefficient1);
    };

        //for smallNumber2
    const handleRandomNumberSmall2 = (yCoefficient1) => {
    setYCoefficient1(yCoefficient1);
    };
        //for smallNumber3
    const handleRandomNumberSmall3 = (xCoefficient2) => {
    setXCoefficient2(xCoefficient2);
    };
        //for smallNumber4
    const handleRandomNumberSmall4 = (yCoefficient2) => {
    setYCoefficient2(yCoefficient2);
    };

    // this is where I will attempt to solve the equation

  const [x, setX] = useState('');
  const [y, setY] = useState('');

    useEffect(() => {
        solveEquations();
    });
  
  const solveEquations = () => {
    const denominator = parseInt(xCoefficient1) * parseInt(yCoefficient2) - parseInt(yCoefficient1) * parseInt(xCoefficient2);

    console.log(xCoefficient1,yCoefficient1, FinalAnswer1, xCoefficient2, yCoefficient2, FinalAnswer2)



    if (denominator !== 0) {
      const xResult = (parseInt(yCoefficient2) * parseInt(FinalAnswer1) - parseInt(yCoefficient1) * parseInt(FinalAnswer2)) / denominator;
      const yResult = (parseInt(xCoefficient1) * parseInt(FinalAnswer2) - parseInt(xCoefficient2) * parseInt(FinalAnswer1)) / denominator;
         

        setX(xResult.toFixed(2));
        setY(yResult.toFixed(2));
    
        } else {
        setX('No solution');
        setY('No solution');
        }
        console.log(x)
        console.log(y)
    }; 
    
    const FinalXandY = (parseFloat(x) + parseFloat(y)).toFixed(2);
  
    // This is where I import the first and second
    //I need a new usestate here because this one will be specific to the app component,rather than defined in fruit.js

  const [firstItem, setFirstItem] = useState("");
  const [secondItem, setSecondItem] = useState("");

    const handleItemsPicked = (first, second) => {
        setFirstItem(first);
        setSecondItem(second);
    }

    function addToMemory(newValue){
        setMemory((prev)=>{
            return {...prev, ...newValue}
        });
    }

    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{maxWidth:'800px', width:'calc(100vw - 40px)', marginTop:'50px'}}>

                {/* taking random number and passing the OnRandomString prop (passing a function as a prop) to the parent component */}
                {/* Adding the list of groceries to here to try make a sentance */}
                    <FruitSelector ItemsPicked={handleItemsPicked} />
                    <RandomNumber onRandomNumberString={handleRandomNumberString} />
                {/* passing random number string to render it using latex */}
                    <RandomNumber onRandomNumberString={handleRandomNumberString2} />
                {/* Making a new number generate for each number needed */}
                    <SmallNumber onRandomNumberString={handleRandomNumberSmall} />
                    <SmallNumber onRandomNumberString={handleRandomNumberSmall2} />
                    <SmallNumber onRandomNumberString={handleRandomNumberSmall3} />
                    <SmallNumber onRandomNumberString={handleRandomNumberSmall4} />
                    
                     
                    <StaticMath latex={`\\textbf{Please Answer the following question to 2 decimal places. }`} />
                    <br></br>
                    <StaticMath latex={`\\text{${xCoefficient1} kg of ${firstItem} and ${yCoefficient1} kg of ${secondItem} cost ${FinalAnswer1}p }`} />
                    <StaticMath latex={`\\text{${xCoefficient2} kg of ${firstItem} and ${yCoefficient2} kg of ${secondItem} cost ${FinalAnswer2}p }`} />
                    <br></br>
                    <StaticMath latex={`\\textbf{What is the cost of 1 kg of ${firstItem} and 1 kg of ${secondItem} }`} />
                    <br/>
                    <br/>
                    {solutionShown ?<StaticMath latex={`\\text{${firstItem} = ${x}p/kg, ${secondItem}=${y}/kg  Final Answer= ${FinalXandY}}`} />: ''}
                    <br/>
                    <br/>
                    <MathInput buttons={['power', 'times']} markingFunction={markingFunction} memKey='mathinput1' memory={memory} setMemory={addToMemory} placeholder="Type your answer here!"/>
                    <br/>
                    < br/>
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
