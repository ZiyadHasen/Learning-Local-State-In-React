import React, { useState, useEffect } from "react";
// !Simple use state with no dependecies
// const UseEffect = () => {
//   const [names, setNames] = useState<string[]>([]);

//   useEffect(() => {
//     fetch("/names.json")
//       .then((response) => response.json())
//       .then((data) => setNames(data));
//   }, []); // Empty dependency array means it runs only once when the component mounts

//   return <div>Names: {names.join(",")}</div>;
// };

// export default UseEffect;

// !lets tweak the code a bit
// *as cool as useEffect it limit the amount u use it
const UseEffect = () => {
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div>
      {names.map((name) => (
        <button onClick={() => onSelectedNameChange(name)}> {name} ,</button>
      ))}
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
};

export default UseEffect;
