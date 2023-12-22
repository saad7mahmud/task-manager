import { useLoaderData } from "react-router-dom";

const EditTodo = () => {
  const todo = useLoaderData();
  console.log(todo);
  return <div>Task: {todo?.length}</div>;
};

export default EditTodo;
