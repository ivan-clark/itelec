import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  const [filterText, setFilterText] = useState('');

  return(
    <div>
      <SearchBar onSearch={setFilterText} />
      <p>Search Text: {filterText}</p>
    </div>
  )
}


export default App;
