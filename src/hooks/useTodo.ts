import { useState, useEffect } from "react";
import { Todo } from "../types/Todo";
import { getAllTodosData, addTodoData, deleteTodoData, updateTododata } from "../apis/functions";
import { ulid } from "ulid";

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    getAllTodosData().then(todo => setTodoList(todo));
  }, []);


  const toggleStatus = (id: string, done: boolean) => {
    const todo = todoList.find((el: Todo) => el.id === id);
    const newTodo = {...todo!, done: !done};
    updateTododata(id, newTodo)
    .then(updateTodo => {
      const newTodoList = todoList.map(todo => todo.id !== updateTodo.id ? todo : updateTodo);
      setTodoList(newTodoList);
    })
  };

  const addTodo = (content: string) => {
    const newTodo = {
      id: ulid(),
      content: content,
      done: false,
    };
    addTodoData(newTodo)
    .then(newTodo => setTodoList([newTodo, ...todoList]));
  }

  const deleteTodo = (id :string) => {
    deleteTodoData(id)
    .then(id => {
      const newTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(newTodoList);
    })
  };

  return { todoList, toggleStatus, addTodo, deleteTodo};
};
