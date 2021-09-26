import { useState } from 'react';
import Search from '../Search';


const SearchWrapper = () => {

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

export default SearchWrapper;
