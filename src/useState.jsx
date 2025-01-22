import { useState } from "react";

function List() {
  const [list, setList] = useState(["john", "mary", "kate"]);
  const [name, setName] = useState("");

  const addName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <>
      <div>
        <ul key={name}>
          {list.map((name) => {
            return (
              <li key={name} className="text-red-400">
                {name}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addName}>Add Name</button>
      </div>
    </>
  );
}

export { List };

function Counter() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <button onClick={addOne}>Count :{count}</button>
      </div>
    </>
  );
}

export { Counter };
