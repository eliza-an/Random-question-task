import {useState, useEffect} from 'react';

const RandomNumber2 = ({onRandomNumberString}) => {
  const [num2, setNum2] = useState(0);

    useEffect(() => {
    generateRandomNumber();
  }, []);



  const generateRandomNumber = () => {
    const newRandomNumber = getRandomNumberInRange(1, 500).toString();
    setNum2(newRandomNumber);
    onRandomNumberString(newRandomNumber);
  };

  const getRandomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div>
     
    
    </div>
  );
};

export default RandomNumber2;