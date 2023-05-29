import { List } from 'pages/HomePages/home.styled';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api/api';

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [searchParams, setSearchparams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  const findMovies = async () => {
    if (!query) return;

    try {
      const { results } = await searchMovies(query);
      setSearch(results);
      console.log(results);
    } catch (error) {}
  };

  useEffect(() => {
    findMovies(query);
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
        <List>
          {search &&
            search.map(({ title, id }) => (
              <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
                {title}
              </Link>
            ))}
        </List>
      </div>
    </>
  );
};

export default Movies;
