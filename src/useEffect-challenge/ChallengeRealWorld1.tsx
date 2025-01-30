import React, { useEffect, useState } from "react";
// !Question 1: (Beginner - Real World)
// You’re building a search bar component that fetches data based on the user’s input. You don’t want to trigger
//  the API call on every keystroke, but only when the user stops typing for a certain period (e.g., after 500ms).
// How would you implement this with useEffect? Be specific about how you handle the search term input and
//  the timing of the API call.

const ChallengeRealWorld1 = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const timeId = setTimeout(() => {
      console.log("Searching for:", searchTerm);
    }, 500); // 500ms delay for typing debounce

    return () => {
      clearTimeout(timeId);
    };
  }, [searchTerm]);
  return (
    <form className="flex max-w-sm">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </form>
  );
};

export default ChallengeRealWorld1;
