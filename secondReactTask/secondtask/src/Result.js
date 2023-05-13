import "./Result.css";

function Result() {
   const thank = "Thank you!";
   const text = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
   const result = "You selected 4 out of 5";
    return (
    <div className="Result">
        <body>
            <div className='card'>
                <div className="onlinepayment"></div>
                <p className="result">{result}</p>
                <p className="thank">{thank}</p>
                <p className="text">{text}</p>
            </div>
        </body>
    </div>
    );

    }
export default Result;