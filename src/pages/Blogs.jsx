import React from "react";
import PrimaryButton from "../PrimaryButton";
import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    setData(response.data);
    console.log(data[0].download_url);
  };

  return (
    <div>
      <h1>WELCOME TO BLOG PAGE</h1>
      <PrimaryButton
        onClick={getData}
        className="px-4 mt-4 fw-bold active-scale"
      >
        GET DATA
      </PrimaryButton>

      <div className="d-flex flex-column mt-4 p-2">
        {data.map((elem, idx) => {
          return (
            <Card>
            <div
              key={idx}
              className="d-flex align-items-center gap-3 mt-4 px-4 py-3 bg-success border border-dark rounded"
            >
              <img src={elem.download_url} className="api-img" alt="" />
              <h1 className="m-0 ms-auto fw-bold text-dark">{elem.author}</h1>
            </div> 
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
