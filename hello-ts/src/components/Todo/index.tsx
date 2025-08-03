import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";

interface TodoItems {
  id: number;
  title: string;
  color: string;
}

interface TodoProps {
  items?: TodoItems[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todo-container">
      <ol>
        {props.items?.map((item: TodoItems) => (
          <TodoItem key={item.id} title={item.title} color={item.color} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
