import React from "react";
import { Link } from "react-router-dom";

const Box = ({ data }) => {
  const tap = (e) => {
    e.preventDefault(); // item a tag default action for disable
    window.open(window.location.href + `/src/${data.id}/index.html`, "_blank");
  };
  return (
    <div className="item">
      <Link to={`/project/${data.id}`}>
        <div className="content">
          <img src={`src/${data.id}/thumb.png`} alt="thumb" />
          <div className="details">
            <h1>{data.title}</h1>
            <p>{data.date}</p>
          </div>
          <button onClick={tap}>Demo</button>
        </div>
      </Link>
    </div>
  );
};

export default Box;
