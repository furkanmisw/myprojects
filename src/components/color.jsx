import React from "react";
import colorD from "../utils/colord";

const Color = ({ color }) => {
  const copy = () => {
    navigator.clipboard
      .writeText(color)
      .then(() =>
        alert(
          `Copied ${color} to clipboard\npaste for any input ctrl+v\nclose for press enter or space`,
          
        )
      )
      .catch((err) => alert(err));
  };

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="color"
      onClick={copy}
    >
      <p
        style={{
          color: colorD(color) ? "#000" : "#fff",
        }}
      >
        {color}
      </p>
      <div className="f"></div>
    </div>
  );
};

export default Color;
