import TodoTitle from "./TodoTitle";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  toggleStatus,
  deleteTodo,
  title,
  as,
}: {
  todos: Todo[];
  toggleStatus: (id: string, status: boolean) => void;
  deleteTodo: (id: string) => void;
  title: string;
  as: string;
}) => {
  return (
    <>
      {todos.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} />
          <ul>
            {todos.map((todo) => (
              <li className="py-1.5" key={todo.id}>
                <TodoItem
                  todo={todo}
                  toggleStatus={toggleStatus}
                  deleteTodo={deleteTodo}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default TodoList;
