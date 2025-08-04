import React from "react";
import Todo from "./components/Todo/index" 
import Counter from "./components/Counter/index";

const myTodoItems = [
  {
    id: 1,
    title: "React",
    color: "red"
  },
  {
    id: 2,
    title: "NextJS",
    color: "blue"
  },
  {
    id: 3,
    title: "MongoDB",
    color: "green"
  },
  {
    id: 4,
    title: "Express",
    color: "purple"
  },
  {
    id: 5,
    title: "NodeJS",
    color: "orange"
  }
]

// React.FC - Functional Component type
// JSX.Element - Type for the return value of a component

const App: React.FC = () => {
  return (
    <div style={{border: "1px solid black", padding: "10px"}} 
      // onClick={() => alert("Hello")} Props
    >
      <h1>This is a Todo List</h1>
      <Todo items={myTodoItems} />
      <Counter />
    </div>
  )
}

export default App;