import React from "react";
import { useSelector, useDispatch } from "react-redux";
import uuidv4 from "uuid/v4";
import largeRectangle from "../../images/figures/large-rectangle.svg";
import verticalRectangle from "../../images/figures/vertical-rectangles.svg";
import horizontalRectangle from "../../images/figures/horizontal-rectangle.svg";
import twoTriangles from "../../images/figures/two-triangles.svg";
import { swap } from "../../redux/actions/figureActions";
const cuadrado = [
  {
    icon: largeRectangle,
    id: "reactanguloLargo"
  },
  {
    icon: verticalRectangle,
    id: "rectangulosVerticales"
  },
  {
    icon: horizontalRectangle,
    id: "rectangulosHorizontales"
  },
  {
    icon: twoTriangles,
    id: "triangulosAlternos"
  }
];

const Figures = () => {
  const dispatch = useDispatch();
  return (
    <div styles={{ styles }} className="container">
      {cuadrado.map(i => (
        <img
          onClick={() => dispatch(swap(i.id))}
          key={i.id}
          src={i.icon}
          width="50px"
          alt={i.id}
        />
      ))}
    </div>
  );
};

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export default Figures;
