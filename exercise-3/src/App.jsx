import React from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = React.useState("");
  const [b, setB] = React.useState("");
  const [result, setResult] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  /* You will need some function to handle the key pressed and button events */

  const onA = (event) => {
    setA(event.target.value);
  }

  const onB = (event) => {
    setB(event.target.value);
  }

  function onCompute() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    const isValidNumber = /^-?\d+(\.\d+)?$/;

    
    if (!isValidNumber.test(a) || !isValidNumber.test(b)) {
      setResult("Error: Please enter valid numbers only");
      setIsError(true);
    } else {
      
      setResult(numA + numB);
      setIsError(false);
    }

    
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" onChange={onA} value={a} placeholder="Enter a number" />

      <label>B =</label>
      <input type="text" onChange={onB} value={b} placeholder="Enter a number" />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} className={isError ? "input-error" : "inputresult"} />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
