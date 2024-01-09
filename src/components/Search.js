// Search.js
import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Perform the search logic here (e.g., make an API request to retrieve search results)
    // For simplicity, we'll just set dummy search results here
    const dummyResults = [
      { id: 1, name: 'John Doe', surveyAnswers: { question1: 'Answer1', question2: 'Answer2' } },
      { id: 2, name: 'Jane Smith', surveyAnswers: { question1: 'Answer3', question2: 'Answer4' } },
    ];

    setSearchResults(dummyResults);
  };

  return (
    <div>
      <h2>Search Page</h2>
      <div>
        <label htmlFor="searchInput">Search:</label>
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <p>Name: {result.name}</p>
                <p>Survey Answers:</p>
                <ul>
                  {Object.entries(result.surveyAnswers).map(([question, answer]) => (
                    <li key={question}>
                      {question}: {answer}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
