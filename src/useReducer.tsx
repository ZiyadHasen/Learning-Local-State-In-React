import React, { useReducer } from "react";

const Reducer = () => {
  const initialState = { names: [], name: "john" };

  const reducer = (state, action) => {
    if (action.type === "setName") {
      return { ...state, name: action.payload };
    }
    if (action.type === "listName") {
      return {
        ...state,
        names: [...state.names, state.name],
        name: "",
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 bg-gray-200">
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: "setName", payload: e.target.value })}
      />
      <div>
        {state.names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <button
        onClick={() => dispatch({ type: "listName" })}
        className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
      >
        Add Name
      </button>
    </div>
  );
};

export default Reducer;

//! Write a reducer that toggles a darkMode state between true and false.
// !test one beginner
// const Test1 = () => {
//   const initialState = { status: "dark" };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "toggle":
//         return state.status === "dark"
//           ? { status: "light" }
//           : { status: "dark" };
//       default: {
//         state.status;
//       }
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className="p-12 bg-gray-200">
//       <div
//         className={state?.status == "dark" ? "p-24 bg-black" : "p-24 bg-white"}
//       ></div>
//       <button
//         onClick={() => dispatch({ type: "toggle" })}
//         className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
//       >
//         toggle
//       </button>
//     </div>
//   );
// };

// export default Test1;

// !test two intermediate
// Write a reducer that:
// Increments the count by 1.
// Adds a new item to the items array.
// Resets the state to initialState.
// const Test2 = () => {
//   const initialState = { count: 0, item: "first Item", items: [] };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "increment":
//         return { ...state, count: state.count + 1 };

//       case "setItem":
//         return { ...state, item: action.payload };
//       case "addItem":
//         return { ...state, items: [...state.items, state.item], item: "" };

//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <div className="flex gap-14">
//         <div className="flex flex-col gap-2 p-4">
//           <div className="text-lg font-bold">{state.count}</div>
//           <button
//             onClick={() => dispatch({ type: "increment" })}
//             className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
//           >
//             Increment
//           </button>
//         </div>
//         <div className="p-4">
//           <div className="flex gap-8">
//             <input
//               type="text"
//               value={state.item}
//               onChange={(e) =>
//                 dispatch({ type: "setItem", payload: e.target.value })
//               }
//               className="px-2 py-1 border border-gray-300 rounded"
//               style={{ visibility: "visible" }}
//             />
//             <button
//               onClick={() => dispatch({ type: "addItem" })}
//               className="px-4 py-2 text-white bg-blue-500 rounded"
//             >
//               Add Item
//             </button>
//           </div>
//           <div className="flex flex-col mt-4">
//             {state.items.map((item, index) => (
//               <div key={index} className="py-1">
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test2;

// !test three advanced
// Create a reducer that manages a to-do list. It should handle these actions:

// Add a new task with title and completed: false.
// Toggle completed for a specific task by id.
// Remove a task by id.
// const Test3 = () => {
//   const initialState = {
//     tasks: [],
//     task: { title: "", completed: false, id: 1 },
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "toggleTask":
//         return {
//           ...state,
//           tasks: state.tasks.map((task) =>
//             task.id === action.payload
//               ? { ...task, completed: !task.completed }
//               : task
//           ),
//         };
//       case "addTask":
//         return {
//           ...state,
//           tasks: [...state.tasks, { ...state.task, id: state.task.id + 1 }],
//           task: { title: "", completed: false, id: state.task.id + 1 },
//         };
//       case "removeTask":
//         return {
//           ...state,
//           tasks: state.tasks.filter((task) => task.id !== action.payload),
//         };
//       case "setTaskTitle":
//         return { ...state, task: { ...state.task, title: action.payload } };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className="p-4 bg-gray-200">
//       <input
//         type="text"
//         value={state.task.title}
//         onChange={(e) =>
//           dispatch({ type: "setTaskTitle", payload: e.target.value })
//         }
//         className="px-2 py-1 border border-gray-300 rounded"
//       />
//       <button
//         onClick={() => dispatch({ type: "addTask" })}
//         className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
//       >
//         Add Task
//       </button>
//       <div className="mt-4">
//         {state.tasks.map((task) => (
//           <div key={task.id} className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() =>
//                 dispatch({ type: "toggleTask", payload: task.id })
//               }
//             />
//             <span className={task.completed ? "line-through" : ""}>
//               {task.title}
//             </span>
//             <button
//               onClick={() => dispatch({ type: "removeTask", payload: task.id })}
//               className="px-2 py-1 text-white bg-red-500 rounded"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Test3;
