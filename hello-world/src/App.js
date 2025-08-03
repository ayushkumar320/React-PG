import logo from './logo.svg';
import './App.css';

// Importing a custom component
import Button from "./components/Button.jsx";

// function App() {
//   return <p> This is a p tag</p>
//   <div>
//     <h1> Custom react app </h1>
//   </div>
//  To return multiline JSX. we need to return in paraentheses
//   return (
//     <div>
//       <h1> Custom react app </h1>
//       <p> This is a p tag</p>
//     </div>
//   )
// }



function App() {
  return (
    <div className="App">
      <h1>Hello from react app</h1>
      <Button />
    </div>
  );
}

export default App;
