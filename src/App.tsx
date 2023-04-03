import TodoTitle from "./components/TodoTitle";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";
import { Todo } from "./types/Todo";
import { useRef } from "react";

function App() {
  const { todoList, toggleStatus, addTodo, deleteTodo } = useTodo();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const incompleted = todoList.filter((todo: Todo) => !todo.done);
  const completed = todoList.filter((todo: Todo) => todo.done);

  return (
    <div className="w-2/4 p-5 my-0 mx-auto">
      <TodoTitle title="TypeScript Todo App" as="h1" />

      {/* 追加用フォーム */}
      <TodoAdd inputRef={inputRef} addTodo={addTodo} />

      {/* 未完了のToDo */}
      <TodoList
        todos={incompleted}
        toggleStatus={toggleStatus}
        deleteTodo={deleteTodo}
        title="未完了"
        as="h2"
      />

      {/* 完了済みのToDo */}
      <TodoList
        todos={completed}
        toggleStatus={toggleStatus}
        deleteTodo={deleteTodo}
        title="完了"
        as="h2"
      />
    </div>
  );
}

export default App;
