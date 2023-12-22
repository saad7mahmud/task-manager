import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import { Link } from "react-router-dom";
import useOngoing from "../Hooks/useOngoing";
import useCompleted from "../Hooks/useCompleted";

const Ongoing = () => {
  const axios = useAxios();
  const [ongoing, refetch, isLoading] = useOngoing();
  const [completed, refetch3] = useCompleted();

  const handleMarkComplete = (_id) => {
    console.log(_id);
     Swal.fire({
       title: "Are you sure?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Mark as Completed",
     }).then((result) => {
       if (result.isConfirmed) {
         axios.patch(`/todos/completed/${_id}`).then((data) => {
           if (data.data.modifiedCount > 0) {
             Swal.fire({
               title: "Marked Complted",
               text: "Successfully marked as completed",
               icon: "success",
             });
             refetch3();
             refetch();
           }
         });
       }
     });
  };

  console.log(ongoing);

  return (
    <div>
      <div className="flex justify-center">
        <button className="btn">
          ONGOING
          <div className="badge">{ongoing.length}</div>
        </button>
      </div>
      {isLoading && <div>Loading....</div>}
      {ongoing.map((oneOnGoing) => (
        <div key={oneOnGoing._id}>
          <div className="card bg-base-100 border m-4 hover:bg-base-200">
            <div className="card-body">
              <h2 className="card-title">{oneOnGoing.title}</h2>
              <p>{oneOnGoing.description}</p>
              <p>Priority: {oneOnGoing.priority}</p>
              <p>Deadline: {oneOnGoing.deadline}</p>
              {/* <p>{oneOnGoing.userEmail}</p> */}

              <button
                onClick={() => handleMarkComplete(oneOnGoing._id)}
                className="btn  btn-error text-white"
              >
                Complete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ongoing;
