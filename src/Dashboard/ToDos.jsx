import React from "react";
import useTodos from "../Hooks/useTodos";
import Swal from "sweetalert2";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import { Link } from "react-router-dom";
import useOngoing from "../Hooks/useOngoing";

const ToDos = () => {
  const axios = useAxios();
  const [todos, refetch, isLoading] = useTodos();
  const [ongoing, refetch2] = useOngoing();

  console.log(todos);
  //   const { userName, userEmail, title, description, priority, deadline, _id } =
  //     todos[0];

  const handleMarkOngoing = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Mark as Ongoing",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`/todos/${_id}`).then((data) => {
          if (data.data.modifiedCount > 0) {
            Swal.fire({
              title: "Marked Ongoing",
              text: "Successfully marked as ongoing",
              icon: "success",
            });
            refetch2();
            refetch();
          }
        });
      }
    });
  };

  const handleDelete = (_id) => {
    console.log("clicked on", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/todos/${_id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "To do has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center">
        <button className="btn">
          TO-DO
          <div className="badge">{todos.length}</div>
        </button>
      </div>
      {isLoading && <div>Loading....</div>}
      {todos.map((todo) => (
        <div key={todo._id}>
          <div className="card bg-base-100 border m-4 hover:bg-base-200">
            <div className="card-body">
              <h2 className="card-title">{todo.title}</h2>
              <p>{todo.description}</p>
              <p>Priority: {todo.priority}</p>
              <p>Deadline: {todo.deadline}</p>
              <p>{todo.userEmail}</p>
              <button
                onClick={() => handleMarkOngoing(todo._id)}
                className="btn  btn-primary text-white"
              >
                Mark as Ongoing
              </button>
              <Link to={`/todos/${todo._id}`}>
                {" "}
                <button className="btn w-full btn-success text-white">
                  Edit
                </button>
              </Link>

              <button
                onClick={() => handleDelete(todo._id)}
                className="btn  btn-error text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDos;
