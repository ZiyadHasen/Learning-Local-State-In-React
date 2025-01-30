import React, { createContext, useContext } from "react";
import usePokemonSource from "./customHook/CustomHook";
import PokemonList from "./customHook/PokemonList";

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

const PokemonContext = createContext({ pokemon: [] as Pokemon[] });

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <PokemonContext.Provider value={usePokemonSource()}>
        <div>
          <PokemonList />
        </div>
      </PokemonContext.Provider>
    </div>
  );
};

export default App;
export { PokemonContext };
