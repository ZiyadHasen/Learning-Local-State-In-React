import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const heavyTask = (num) => {
    console.log("Running heavy calculation...");
    for (let i = 0; i < 1e9; i++) {} // Simulating something intense
    return num * 2;
  };

  // Memoized result for count changes
  //   const computedValue = useMemo(() => heavyTask(count), [count]);
  const computedValue = heavyTask(count);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">useMemo Example</h1>
      <button
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment Count
      </button>
      <input
        className="p-2 mb-4 border"
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>Computed Value: {computedValue}</div>
    </div>
  );
};

export default UseMemo;
