import { useState } from "react";
import styled from "styled-components";

const TODO_DATA = [
  { id: 1, todo: "아침 먹기", isSuccess: false },
  { id: 2, todo: "점심 먹기", isSuccess: false },
  { id: 3, todo: "저녁 먹기", isSuccess: false },
];

const TodoList = () => {
  const [todoList, setTodoList] = useState(TODO_DATA);

  const [todoText, setTodoText] = useState("");

  const todoTextOnChange = (e) => {
    setTodoText(e.target.value);
  };

  const addTodoList = () => {
    const newTodo = {
      id: new Date(),
      todo: todoText,
      isSuccess: false,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoText("");
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      addTodoList();
    }
  };

  const successToggle = (id) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isSuccess: !todo.isSuccess } : todo
    );
    setTodoList(newTodoList);
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <div>할 일 목록</div>
      <ul>
        {todoList.map((todo, index) => (
          <TodoItem key={todo.id} $isSuccess={todo.isSuccess}>
            {index + 1}.{todo.todo}
            <button onClick={() => successToggle(todo.id)}>완료</button>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </TodoItem>
        ))}
      </ul>
      <div>
        <input
          value={todoText}
          onChange={todoTextOnChange}
          placeholder="할 일을 적으세요"
          onKeyPress={onEnter}
        />
        <button onClick={addTodoList}>추가</button>
      </div>
    </div>
  );
};

export default TodoList;

const TodoItem = styled.div`
  color: red;

  text-decoration: ${(props) => (props.$isSuccess ? "line-through" : "none")};
`;
