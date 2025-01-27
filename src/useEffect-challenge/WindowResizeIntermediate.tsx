import React, { useEffect, useReducer } from "react";
//! Intermediate Challenge: Debounced Resize Handler
// Task:
// Modify the window size tracker so it updates the dimensions only after the user has stopped resizing the window for 500ms. This prevents constant state updates during rapid resize events.

// Steps to Follow:

// Use useEffect to set up the resize listener, just like before.
// Use setTimeout to delay the state update by 500ms.
// Use clearTimeout to cancel the previous timeout if the user resizes the window again within 500ms.
// Update the state with the final width and height after the debounce.
// Expected Behavior:

// While resizing, the dimensions are not updated immediately.
// Only after the user pauses resizing (for 500ms), the dimensions are updated.

const WindowResizeIntermediate = () => {
  const InitialState = {
    height: window.innerHeight,
    width: window.innerHeight,
  };
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
    console.log(state);
  };

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = () => {
        return setTimeout(() => {
          dispatch({ type: "resize" });
          console.log("Hello, World!");
        }, 1000);
      };
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <div>
      <div className="text-xl font-bold">Size of the window</div>
      <div className="text-xl text-gray-600">Height: {state.height}</div>
      <div className="text-xl text-gray-600">Width: {state.width}</div>
    </div>
  );
};

export default WindowResizeIntermediate;
