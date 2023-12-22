import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import useTodos from "../Hooks/useTodos";
import { useState } from "react";
import Swal from "sweetalert2";

const EditTodo = () => {
  const navigate = useNavigate();

  const todo = useLoaderData();
  console.log(todo);
  const onSubmit = async (data) => {
    console.log(data);

    fetch(`http://localhost:5000/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Task Successfully Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard");
        }
      });
  };

  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      title: todo?.title, // Set your default value here
      description: todo?.description, // Set your default value here
      deadline: todo?.deadline, // Set your default value here
    },
  });
  return (
    <div>
      <div>
        {" "}
        <div className="flex justify-center">
          <button className="btn  mb-5 my-10">Edit TASK</button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" shadow-2xl h-max max-w-md mb-10 p-10 rounded  mx-auto"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title of Task
            </label>
            <input
              type="text"
              id="title"
              name="title"
              {...register("title", { required: "Title is required" })}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Write Description
            </label>
            <textarea
              id="description"
              name="description"
              {...register("description", {
                required: "Description is required",
              })}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-600"
            >
              Set Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              {...register("deadline", { required: "Deadline is required" })}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-600"
            >
              Choose Priority
            </label>
            <select
              id="priority"
              name="priority"
              {...register("priority", { required: "Priority is required" })}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-error  text-white mx-auto flex mt-5"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
