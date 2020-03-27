import React from "react";
import { useState } from "react";
const DivSwap = () => {
  const haha = {
    halfSquare: ["square"],
    halSquare: ["square", "square"]
  };

  return (
    <>
      <div className="container">
        {haha.halSquare.map(c => (
          <div className={c}></div>
        ))}
      </div>
    </>
  );
};

export default DivSwap;
