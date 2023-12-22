import Completed from "./Completed";
import Ongoing from "./Ongoing";
import ToDos from "./ToDos";
import AddTask from "./addTask";

const Dashboard = () => {
  // refetch();
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div>
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
