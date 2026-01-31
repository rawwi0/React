import React, { useState } from "react";

const Categories = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [task, setTask] = useState([]);
 
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("Note title is :", title);
    console.log("Note Detail is  :", note);

    const copyTask = [...task];
    copyTask.push({ title, note });
    console.log(task);
    setTask(copyTask);
    setTitle("");
    setNote("");
  };
 
   const handleDelete = (idx) => {
      const deleteTask=[...task];
     
      deleteTask.splice(idx,1)
      setTask(deleteTask);
  };
  return (
    <div className="p-6  min-h-screen ">
      <h1 className="mb-4 text-2xl font-bold text-center">
        Welcome to Categories
      </h1>
      <hr className="mb-6" />
      <h2 className="text-center text-xl font-semibold mb-10">NOTES</h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE — ADD NOTES */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Add Notes</h1>

          <form
            onSubmit={SubmitHandler}
            className="flex flex-col text-white  gap-4"
          >
            {/* NOTE HEADING */}
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Notes Heading"
              className="px-5 py-3 bg-black border-2 fs-4 border-gray-400 rounded-xl outline-none"
            />
            {/* NOTE DETAILS */}
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write Details"
              className="px-5 py-3 bg-black  fs-2 border-2 border-gray-400 rounded-xl h-40 outline-none resize-none"
            ></textarea>

            <button
              className="bg-amber-300 text-black py-3 px-6 rounded-lg font-semibold 
active:scale-95 transition-transform duration-100"
            >
              Add Note
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — YOUR NOTES */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-lg font-bold mb-4">Your Notes</h1>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {task.map(function (elem, idx) {
              return (
               <div
  key={idx}
  className="relative w-full break-inside-avoid min-h-52 rounded-2xl p-4
  bg-linear-to-b from-[#fffef8] to-[#fff9e6]
  border border-gray-300 shadow-md"
>

                  {/* Delete Icon */}
                  <button
                    onClick={() =>{ 
                      handleDelete(idx)
                    } }
                    className="absolute top-3 right-3 text-red-600 hover:text-red-800 
    text-6xl p-1 font-bold active:scale-90 transition-transform"
                    title="Delete note"
                  >
                    ×
                  </button>

                  <h3 className="text-sm font-semibold wrap-break-words mt-6 pr-8">
                    {elem.title}
                  </h3>

                  <p className="text-sm mt-1 wrap-break-words pr-8">{elem.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
