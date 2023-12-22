import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import { Link } from "react-router-dom";
import useCompleted from "../Hooks/useCompleted";

const Completed = () => {
  const axios = useAxios();
  const [completed, refetch, isLoading] = useCompleted();

  return (
    <div>
      <div className="flex justify-center">
        <button className="btn">
          COMPLETED
          <div className="badge">{completed.length}</div>
        </button>
      </div>
      {isLoading && <div>Loading....</div>}
      {completed.map((oneCompleted) => (
        <div key={oneCompleted._id}>
          <div className="card bg-base-100 border m-4 hover:bg-base-200">
            <div className="card-body">
              <h2 className="card-title">{oneCompleted.title}</h2>
              <p>{oneCompleted.description}</p>
              <p>Priority: {oneCompleted.priority}</p>
              <p>Deadline: {oneCompleted.deadline}</p>
              <p>{oneCompleted.userEmail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Completed;
