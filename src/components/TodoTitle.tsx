const TodoTitle = ({ title, as }: { title: string; as: string }) => {
  switch (as) {
    case "h1":
      return (
      <div className="mb-10">
        <h1 className="text-5xl text-center">{title}</h1>
      </div>
      );
      break;
    case "h2":
      return (
        <div className="mb-5">
          <h2 className="text-3xl">{title}</h2>
        </div>
      );
      break;
    default:
      return <p>{title}</p>;
  }
};

export default TodoTitle;
