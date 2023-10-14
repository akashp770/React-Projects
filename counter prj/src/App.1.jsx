import { useState } from "react";

export function App() {
  // const [count, setCount] = useState(0);
  let [counter, setCounter] = useState(5);

  // let counter = 5;
  const addValue = () => {
    console.log("Clicked", counter);

    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }

    // if  this below question came in interiview that if there is multiple of  setCounter(counter + 1); one after other
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    //-----  then do thiss
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
