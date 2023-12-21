const Dashboard = () => {
  const handleAddToDo = (e) => {
    e.preventDefault();

    const form = e.target;
    const text = form.text.value;
    console.log(text);
  };

  return (
    <div>
      <div className="my-20 flex flex-col justify-center items-center">
        <div>
          <form onSubmit={handleAddToDo}>
            <input
              className="px-10 py-2 rounded"
              type="text"
              name="text"
              required
              placeholder="Write here"
            />
            <input
              className="hover:cursor-pointer flex m-10 mx-auto select-none rounded-lg bg-gradient-to-tr from-[#32a374] to-[#57b38d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              value="Add"
            />
          </form>
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="h-64 w-64 border rounded">to-do</div>
          <div className="h-64 w-64 border rounded">Ongoing</div>
          <div className="h-64 w-64 border rounded">Completed</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
