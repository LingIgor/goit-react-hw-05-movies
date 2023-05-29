import { List } from 'pages/HomePages/home.styled';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api/api';

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [searchParams, setSearchparams] = useSearchParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const query = searchParams.get('query');

  const findMovies = async () => {
    if (!query) return;

    setStatus('pending');

    try {
      const { results } = await searchMovies(query);
      setSearch(results);
      setStatus('resolved');
    } catch (error) {
      setError(error);
      setStatus('rejected');
    }
  };

  useEffect(() => {
    findMovies();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    findMovies();
  };

  const updateInput = e => {
    setSearchparams({ query: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={updateInput} />
          <button type="submit">Search</button>
        </label>
      </form>
      <div>
        {status === 'pending' && 'Loading...'}
        {status === 'rejected' && <h3>{error.message}</h3>}

        {status === 'resolved' && (
          <List>
            {search &&
              search.map(({ title, id }) => (
                <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
                  {title}
                </Link>
              ))}
          </List>
        )}
      </div>
    </>
  );
};

export default Movies;
