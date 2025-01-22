import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "add") {
    return [...state, action.number]; // Add number to array
  } else if (action.type === "remove") {
    return state.filter((num) => num !== action.number); // Remove specific number
  } else if (action.type === "reset") {
    return []; // Reset to empty array
  }
  return state; // Default: return the current state
};

const Reducer = () => {
  const initialState = [1, 2, 3]; // Initial list of numbers

  const [state, dispatch] = useReducer(reducer, initialState);

  const addNumber = (number) => {
    dispatch({ type: "add", number }); // Dispatch add action
  };

  const removeNumber = (number) => {
    dispatch({ type: "remove", number }); // Dispatch remove action
  };

  const resetList = () => {
    dispatch({ type: "reset" }); // Dispatch reset action
  };

  return (
    <div>
      <h1>Numbers List</h1>
      <ul>
        {state.map((num, index) => (
          <li key={index}>
            {num} <button onClick={() => removeNumber(num)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addNumber(4)}>Add Number 4</button>
      <button onClick={resetList}>Reset List</button>
    </div>
  );
};

export default Reducer;
