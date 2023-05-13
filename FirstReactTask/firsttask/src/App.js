
import './App.css';

function App() {
  const title = "Equilibrium #3429"
  const text = "Our Equilibrium collection promotes balance and calm."
  const ethiriumtext = "0.041 ETH";
  const clocktext = "3 days left";
  const creation = "Creation of";
  const name = "Jules Wyvern";
  return (
    <div className="App">
      <body>
        <div className='card'>
          <div className='image'></div>
          <p className='title'>{title}</p>
          <p className='text'>{text}</p>
          <div className='dataarea'>
            <div className='atheriumimage'></div>
            <p className='ethiriumtext'>{ethiriumtext}</p>
            <div className='clockimage'></div>
            <p className='clocktext'>{clocktext}</p>
          </div>
          <hr/>
          <div className='footer'>
            <div className='faceavatar'></div>
            <p className='creation'>{creation}</p>
            <p className='name'>{name}</p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
