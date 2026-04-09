export type TodoEntity = {
  id: string;
  text: string;
};

export type TodoDto = Omit<TodoEntity, "id">;
