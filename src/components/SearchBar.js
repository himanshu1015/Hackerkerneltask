import React from "react";
import { useProducts } from "../contexts/ProductContext";

function SearchBar() {
  const { setSearchQuery } = useProducts();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); 
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search products by name"
        onChange={handleSearch}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        aria-label="Search Products"
      />
    </div>
  );
}

export default SearchBar;
