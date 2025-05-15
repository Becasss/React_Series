import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 5

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1);
    console.log("Value Added", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("Clicked", counter);
  };

  return (
    <>
      <h1>Bikash Yamphu Rai</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <br />
      <br />
      <footer>Footer {counter} </footer>
      <br />
      <button onClick={addValue}>Add Value {Counter - 1}</button>
    </>
  );
}

export default App;
