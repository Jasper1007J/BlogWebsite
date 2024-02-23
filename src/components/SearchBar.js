// Import necessary dependencies
import React, { useState } from 'react';

// Define a functional component SearchBar that takes handleSearch as input
const SearchBar = ({ handleSearch }) => {
  // Define state variable for query using useState hook
  const [query, setQuery] = useState('');

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the handleSearch function with the current query as argument
    handleSearch(query);
  };

  // Render the search bar
  return (
    <div className='searchBar'>
      {/* Render the search form */}
      <form onSubmit={handleSubmit}>
        {/* Render the input field for entering search query */}
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* Render the submit button */}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

// Export the SearchBar component
export default SearchBar;
