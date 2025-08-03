import React from "react";
import Todo from "./components/Todo/index" 
// React.FC - Functional Component type
// JSX.Element - Type for the return value of a component
const App: React.FC = () => {
  return (
    <div>
      <h1>This is a Todo List</h1>
      <Todo />
      <Todo />
      <Todo />
    </div>
  )
}

export default App;