import { Todo } from "../types/Todo";

const TodoItem = ({
  todo,
  toggleStatus,
  deleteTodo
}: {
  todo: Todo ,
  toggleStatus: any,
  deleteTodo: any,
}) => {

  const handleToggle = () => {
    toggleStatus(todo.id, todo.done);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  }


  return (
    <>
      <span className="text-xl">{todo.content}</span>
      <button className="text-white bg-sky-500 hover:bg-sky-700 py-1.5 px-3 ml-2" onClick={handleToggle}>{todo.done ? '未完了へ' : '完了'}</button>
      <button className="text-white bg-sky-500 hover:bg-sky-700 py-1.5 px-3 ml-2" onClick={handleDelete}>削除</button>
    </>
  )
};

export default TodoItem;
