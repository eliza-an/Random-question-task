import {useState, useEffect} from 'react';
import GetRandomNumberInRange from '../helper-functions/getRandomNumberInRange'


const RandomNumber2 = ({onRandomNumberString}) => {
  const [num2, setNum2] = useState(0);

    useEffect(() => {
    generateRandomNumber();
  }, []);



  const generateRandomNumber = () => {
    const newRandomNumber = GetRandomNumberInRange(1, 900).toString();
    setNum2(newRandomNumber);
    onRandomNumberString(newRandomNumber);
  };

};

export default RandomNumber2;