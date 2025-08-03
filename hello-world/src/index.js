import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Creating my own component
// Component is a simple JS function with first letter capitalized, if not capitalized, React will not read it as a component

function MyButton() {
  return <button>Click here!</button>;    // This is a jsx element
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Rendering the custom component */}
    <MyButton />
    <App />
    {/* We can use HTML built in tags like this */}
    <input type="text" placeholder="Type here..." />
    <button>Submit</button>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
