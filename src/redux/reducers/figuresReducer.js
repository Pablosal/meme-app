const initialState = {
  figuraSeleccionada: [{ id: 0, className: [] }],
  figuras: {
    rectangulo: [
      {
        id: "reactanguloLargo",
        className: ["largeRectangle"]
      },
      {
        id: "rectangulosVerticales",
        className: ["halfVerticalRectangle", "halfVerticalRectangle"]
      },
      {
        id: "rectangulosHorizontales",
        className: ["horizontalRectangle", "horizontalRectangle"]
      },
      {
        id: "triangulosAlternos",
        className: ["triangle-bottomleft", "triangle-topright"]
      }
    ]
  }
};

const figureReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWAP_FIGURE":
      console.log(action.payload);
      const { rectangulo } = state.figuras;
      return {
        ...state,
        figuraSeleccionada: rectangulo.filter(f => f.id === action.payload)
      };

    default:
      return state;
  }
};
export default figureReducer;
