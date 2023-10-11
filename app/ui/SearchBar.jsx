"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full border-2 px-4 py-2 text-sm transition-all duration-300 placeholder:text-xs placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      ></input>
    </form>
  );
}
