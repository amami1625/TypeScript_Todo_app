import { RefObject } from "react";

const TodoAdd = ({
  inputRef,
  addTodo,
}: {
  inputRef: RefObject<HTMLTextAreaElement>;
  addTodo: (content: string) => void;
}) => {
  const handleAdd = () => {
    if (inputRef.current?.value === "") {
      return;
    }
    addTodo(inputRef.current!.value);
    inputRef.current!.value = "";
  };

  return (
    <div>
      <textarea className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" ref={inputRef}></textarea>
      <button className="text-white text-2xl block w-full bg-sky-500 hover:bg-sky-700 p-3 my-3 mx-auto" onClick={handleAdd}>ToDoを追加</button>
    </div>
  );
};

export default TodoAdd;
