import React from 'react'
import resultImage from './img/Online payment_Two Color(1) 2.png';



export default function Hello(props) {

  const lastText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
  return (
    <div className="bg-veryBlack h-screen  w-screen flex items-center justify-center">
      <div className="cardbody bg-black h-[416px] w-[412px] rounded-[30px]">

        <div className="resultImageArea ml-[121px] mt-[45px]">
          <img src={resultImage} alt="resultImage"/>
        </div>  
        <div className="resultTextArea h-[32px] w-[193px] rounded-[30px] bg-darkBlue flex items-center justify-center mt-[32px] ml-[110px]">
          <p className='text-orange'>you selected {props.sum} from 5</p>
        </div>
        <h1 className='h-[43px] w-[143px] text-pureWhite text-2xl font-bold ml-[135px] mt-[36px]'>Thank you!</h1>
        <p className='h-[72px] w-[340px] ml-[32px] mt-[7px] text-center text-lightGrey'>{lastText}</p>
      </div> 
    </div>
  )
}



