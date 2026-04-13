import { useEffect, useState } from "react";
import type { TodoDto, TodoEntity } from "./types";
import { useApi } from "./hooks/useApi";
import { useInput } from "./hooks/useInput";
import { Link } from "react-router-dom";

export const List = () => {
  const [todos, setTodos] = useState<TodoEntity[]>([]);

  const { apiDelete, apiError, apiGet, apiPost } = useApi(
    "http://localhost:3000",
  );

  const textInput = useInput("");

  const getTodos = async () => {
    const data = await apiGet<TodoEntity[]>("todos");

    if (!data) return;

    setTodos(data);
  };

  const deleteTodo = async (idToDelete: string) => {
    const deleted = await apiDelete<TodoEntity>("todos", idToDelete);

    if (!deleted) return;

    setTodos((prev) => prev.filter((todo) => todo.id !== deleted.id));
  };

  const addTodo = async (dto: TodoDto) => {
    const added = await apiPost<TodoDto, TodoEntity>("todos", dto);

    if (!added) return;

    setTodos((prev) => [...prev, added]);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo({
      text: textInput.value,
    });

    textInput.clear();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="Text" {...textInput} />
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <Link to={`/${todo.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
