import {useState, useEffect} from 'react';
import GetRandomNumberInRange from '../helper-functions/getRandomNumberInRange'

const RandomNumber = ({onRandomNumberString}) => {
  const [num1, setNum1] = useState(0);

  useEffect(() => {
  generateRandomNumber();
  } , []);



  const generateRandomNumber = () => {
    const newRandomNumber = GetRandomNumberInRange(1, 1500).toString();
    setNum1(newRandomNumber);
    onRandomNumberString(newRandomNumber);
  };

};
export default RandomNumber;


