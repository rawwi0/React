import React, { useState } from "react";

import axios, { Axios } from "axios";

const About = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=20",
    );
    setData(response.data);
    console.log(data);
  };
  return (
    <div>
      <h1 className="flex  justify-content-center">ABOUT PAGE </h1>
      
      <h4 className="px-4">Click on button for information </h4>
      <button
        onClick={getData}
        className="m-3 px-4 py-4 bg-amber-300 rounded border border-black active:scale-95"
      >
        about author
      </button>

      <div>
        {data.map((elem, idx) => {
          return (
            <div>
              <div className="flex justify-content-between m-4 p-4 bg-amber-200 rounded">
            <div key={idx} className="content-center flex-1 min-w-0 break-words">
              <h2><b>id:</b>{elem.id}</h2>
              <h2><b>Author:</b>{elem.author}</h2>
              <h2><b>Download Image:</b>{elem.download_url}</h2>
              </div>
              <img  src={elem.download_url} className="max-w-100 "  alt={elem.author} />
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
