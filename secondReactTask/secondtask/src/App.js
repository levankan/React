
import './App.css';
import { useState } from 'react';
import './Result.css';
import Result from './Result';

function App() {
  const how = "How did we do?";
  const text = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
  const list = [1, 2, 3, 4, 5];
  //itereit buttons
  const buttons = list.map((listMember) => {
    return <button className='numbuttons'>{listMember}</button>
  });

  const [point, setPoint] = useState(true);

  //when click submit button, run this function
  const handleClick = () => setPoint(!point);

  
  

  return (
    <div className="App">
      {point 
      
      ?

      <body>
        <div className='card'>
          <div className='starcircle'>
            <div className='starimage'></div>
          </div>
          <p className='how'>{how}</p>
          <p className='text'>{text}</p>   
          <div className='numberarea'>
            {buttons}
          </div>
          <button onClick={handleClick}>SUBMIT</button>
        </div>
      </body>
      
      :
      
      <Result/>}
    </div>
  );
}

export default App;
