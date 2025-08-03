import React from "react";
import "./style.css"

interface TodoItemProps {
  // Define the properties for TodoItem if needed
  title?: string,
  color?: string
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  // JSX.Element - Type for the return value of a component
  return (
    <li style={{ color: props.color }}>
      {props.title}
    </li>
  )
}

export default TodoItem