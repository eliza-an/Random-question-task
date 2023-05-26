import {useState, useEffect} from 'react';
import GetRandomNumberInRange from '../helper-functions/getRandomNumberInRange'

const SmallNumber= ({onRandomNumberString}) => {
  const [smallNumber, setSmallNumber] = useState(0);

    useEffect(() => {
    generateRandomNumber();
    }, []);



  const generateRandomNumber = () => {
    const newRandomNumber = GetRandomNumberInRange(1, 10).toString();
    setSmallNumber(newRandomNumber);
    onRandomNumberString(newRandomNumber);
  };

};export default SmallNumber