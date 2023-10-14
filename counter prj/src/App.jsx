import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    console.log("Clicked", counter);

    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }

    // console.log("Value added", Math.random());
  };

  const subtractValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello I am Aakash, its React 1st prj</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <button onClick={subtractValue}>Subtract Value {counter} </button>
    </>
  );
}

export default App;
