import { useState } from 'react';
import Search from '../Search';


const SearchContainer = () => {

  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Looking for {search ? search : '...'}</p>
    </div>
  );

};

export default SearchContainer;
