import axios from "axios";
import { Todo } from "../types/Todo";

const todoDataUrl = "http://localhost:3100/todos";

// データを取得
export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
};

// TODOを追加
export const addTodoData = async (todo: Todo) => {
  const response = await axios.post(todoDataUrl, todo);
  return response.data;
};

// TODOを削除
export const deleteTodoData = async (id :string) => {
  await axios.delete(`${todoDataUrl}/${id}`);
  return id;
};

// TODOを更新
export const updateTododata = async (id: string, todo: Todo) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
}