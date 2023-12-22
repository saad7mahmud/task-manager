import axios from "axios";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import useTodos from "../Hooks/useTodos";

const AddTask = () => {
  const { handleSubmit, control, register } = useForm();
  const { user } = useContext(AuthContext);
  console.log(user);
  const [, refetch] = useTodos();

  const onSubmit = async (data) => {
    data.userEmail = user?.email;
    data.userName = user?.displayName;
    data.type = "todo";

    console.log(data);
    try {
      // Send data to MongoDB using axios
      await axios.post("https://task-manager-server-snowy.vercel.app/todos", data);

      Swal.fire("Task Successfully Added");
      refetch();
    } catch (error) {
      Swal.fire("Failed to add the task");
    }
  };

  return (
    <div>
      {" "}
      <div className="flex justify-center">
        <button className="btn  mb-5">ADD TASK</button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" shadow-2xl h-max p-10 rounded  mx-auto"
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
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
