import { useState } from 'react';
import './App.css';
import starImage from './img/Star.png';
import ResultPage from './ResultPage'


function App() {
  const text =
    'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!';
  const headline = 'How did we do?';

  const [rate, setRate] = useState(true);
  const givePoint = () => {
    setRate(false);
  };

  const [point, setPoint] =useState (null);
  const handleClick = (buttonNumber) => {
    setPoint (buttonNumber);
  }
 
  
  

  return (
    <>
      {rate ? (
        <div className="App bg-veryBlack h-screen  w-screen flex items-center justify-center">
          <div className="cardbody bg-black h-[416px] w-[412px] rounded-[30px]">
            <div className="starbody h-[48px] w-[48px] m-[32px] mb-0  rounded-[50%] flex items-center justify-center bg-darkBlue">
              <img src= {starImage} alt="Star" />
            </div>

            <div className="headline h-[] w-[] text-pureWhite ml-[32px] mt-[30px]">
              <h1 className='text-[28px] font-bold'>{headline}</h1>
            </div>

            <p className="textarea text-lightGrey m-[32px] mt-[10px] leading-6	">{text}</p>

            <div className="buttonArea flex">
              <button className='ml-[32px] h-[51px] w-[52px] rounded-[50%] bg-darkBlue flex items-center justify-center font-[16px] text-mediumGrey hover:bg-orange text-pureWhite' onClick={() => handleClick(1)} >1</button>
              <button className='ml-[21px] h-[51px] w-[52px] rounded-[50%] bg-darkBlue flex items-center justify-center font-[16px] text-mediumGrey hover:bg-orange text-pureWhite' onClick={() => handleClick(2)}>2</button>
              <button className='ml-[21px] h-[51px] w-[52px] rounded-[50%] bg-darkBlue flex items-center justify-center font-[16px] text-mediumGrey hover:bg-orange text-pureWhite' onClick={() => handleClick(3)}>3</button> 
              <button  className='ml-[21px] h-[51px] w-[52px] rounded-[50%] bg-darkBlue flex items-center justify-center font-[16px] text-mediumGrey hover:bg-orange text-pureWhite'onClick={() => handleClick(4)}>4</button>
              <button className='ml-[21px] h-[51px] w-[52px] rounded-[50%] bg-darkBlue flex items-center justify-center font-[16px] text-mediumGrey hover:bg-orange text-pureWhite' onClick={() => handleClick(5)}>5</button>
            </div>

            <div className="submitButton">
              <button className='h-[45px] w-[341px] bg-orange rounded-[30px] mt-[32px] ml-[32px] text-pureWhite font-bold tracking-wide hover:bg-pureWhite hover:text-orange' onClick={givePoint}>SUBMIT</button>
            </div>
          </div>
        </div>
      ) : (
        <ResultPage sum = {point} />
      )}
    </>
  );
}

export default App;
