import { useContext } from "react";
import Completed from "./Completed";
import Ongoing from "./Ongoing";
import ToDos from "./ToDos";
import AddTask from "./addTask";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1 className="text-center m-10 text-3xl font-bold">
        Task Management Dashboard
      </h1>
      <hr className="m-10"/>
      <div className="flex flex-col justify-center  items-center">
        <div className="text-2xl font-semibold">{user ? <p>{user?.displayName}</p> : ""}</div>
        <div>
          {" "}
          {user ? (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
          ) : (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/HTC51Wq/icon.jpg" />
              </div>
            </label>
          )}
        </div>
      </div>
      <div className="my-20 flex flex-col justify-center items-center">
        <div className="flex justify-center gap-3 flex-wrap">
          <AddTask></AddTask>
          <div className="  rounded">
            <ToDos></ToDos>
          </div>
          <div className=" rounded">
            <Ongoing></Ongoing>
          </div>
          <div className=" rounded">
            <Completed></Completed>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
