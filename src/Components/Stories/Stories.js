import { useState } from 'react';
import axios from 'axios';

const URL = 'http://hn.algolia.com/api/v1/search';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  const handleFetch = async () => {
    try {
      const result = await axios.get(`${URL}?query=React`);
      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleFetch}>
        Fetch stories
      </button>

      { error && <p>Something went wrong...</p> }

      <ul>
        { stories.map(story => (
          <li key={story.objectID}>
            <a href={story.url}>{ story.title }</a>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default Stories;
