import React, { useState } from "react";
import BackDesc from "../../Shared/Components/BackDesc";
import Figures from "../../Shared/Components/Figures";
import { useSelector } from "react-redux";
import uuidv4 from "uuid/v4";
import "../../App.css";
const SwapBlocks = () => {
  const [form, setForm] = useState("square");
  const figurita = useSelector(state => state.figureReducer).figuraSeleccionada;
  console.log(figurita[0]);

  return (
    <div className="container">
      {figurita.length >= 0 &&
        figurita[0].className.map(geo => (
          <div key={uuidv4()} className={geo}></div>
        ))}

      <BackDesc>
        <Figures />
      </BackDesc>
    </div>
  );
};

export default SwapBlocks;
