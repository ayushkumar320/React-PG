import React, {useState, useEffect} from "react";
import "./style.css";
const Counter: React.FC = () => {
  // So far the problem hereis, counter is not reactive, it does not change on the page, however its value changes in when we console log it.

  /*
  let counter = 0;

  const handleIncrement = () => {
    counter++;
    console.log(counter);
  }

  const handleDecrement = () => {
    counter--;
    console.log(counter);
  }
  */

  // To make it reactive, we can use useState hook from React.

  const [counter, setCounter] = useState(0); // This is a use state hook that initializes counter to 0 and provides a function to update it.

  // Using useEffect to log the counter value whenever it changes
  // Empty dependencies array means whole component

  
  // Mounting
  useEffect(() => {
    console.log("Counter mounted!");

    // Unmounting
    return function () {
      console.log("Unmount counter!");
      // This function will run when the component is unmounted, useful for cleanup
    }
  }, []);  // Mounting - this effect runs only once when the component mounts

  // Updating
  useEffect(() => {
    console.log("User updated count!");
  }, [counter]); // This effect runs whenever the counter changes and it will run once when the component mounts


  
  const handleIncrement = () => {
    setCounter(counter + 1); // This updates the state and re-renders the component
    // console.log(counter);
  };
  const handleDecrement = () => {
    if (counter === 0) return; // Prevent decrementing below 0
    setCounter(counter - 1); // This updates the state and re-renders the component
    // console.log(counter);
  };

  return (
    <div className="counter-container">
      <h1 className="counter">{counter}</h1>
      <button
        onClick={handleIncrement}
        className="counter-button"
        style={{background: "lightgreen"}}
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        className="counter-button"
        style={{background: "lightcoral"}}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
