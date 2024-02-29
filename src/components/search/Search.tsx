"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    // Implement your search logic here using searchQuery
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex items-center gap-1">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-2 py-1 border border-gray-300 rounded"
      />
      <button
        onClick={handleSearch}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Search;
