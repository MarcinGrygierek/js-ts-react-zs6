import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "./hooks/useApi";
import { useEffect } from "react";
import type { TodoDto, TodoEntity } from "./types";
import { useInput } from "./hooks/useInput";

export const Edit = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { apiGetOne, apiPatch } = useApi("http://localhost:3000");
  const todoInput = useInput("");

  const getTodo = async () => {
    if (!id) return;

    const data = await apiGetOne<TodoEntity>("todos", id);

    if (!data) return;

    todoInput.reset(data.text);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) return;

    const data = await apiPatch<TodoDto, TodoEntity>("todos", id, {
      text: todoInput.value,
    });

    if (!data) return;

    navigate('/');
  };

  return (
    <>
      <Link to="/">Go to homepage</Link>
      <h1>Edit [{id}]</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="Text" {...todoInput} />
        <button type="submit">Save Todo</button>
      </form>
    </>
  );
};
