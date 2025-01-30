import { useContext } from "react";
import { PokemonContext } from "../App"; // 4️⃣ Import Context
import React from "react";

const PokemonList = () => {
  const { pokemon } = useContext(PokemonContext); // ✅ Now TypeScript knows the type

  return (
    <>
      {pokemon.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </>
  );
};

export default PokemonList;
