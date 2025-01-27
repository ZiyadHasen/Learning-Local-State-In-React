import React, { useEffect, useReducer } from "react";

const WindowSize = () => {
  const InitialState = { height: window.innerHeight, width: window.innerWidth };

  //   console.log(InitialState);
  const reducer = (state, action) => {
    switch (action.type) {
      case "resize":
        return {
          ...state,
          height: window.innerHeight,
          width: window.innerWidth,
        };

      default:
        return state;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: "resize" });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [InitialState.height, InitialState.width]);

  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 style={{ color: "blue" }}>Window Size</h1>
      <h2>Height: {state.height}px</h2>
      <h2>Width: {state.width}px</h2>
    </div>
  );
};

export default WindowSize;
