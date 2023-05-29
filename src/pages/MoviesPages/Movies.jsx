import { searchMovies } from 'api/api';
import SearchMovie from 'components/Search/SearchMovie';
import { List } from 'pages/HomePages/home.styled';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [word, setWord] = useState('');
  const [params, setParams] = useSearchParams();

  const fot = params.get('query') ?? '';

  const location = useLocation();

  const onSubmit = query => {
    setWord(query);
  };

  useEffect(() => {
    const Movie = async () => {
      try {
        const { data } = await searchMovies(word);
        setSearch(data);
      } catch (error) {}
    };
    Movie();
    setWord(fot);
  }, [word, fot]);

  const { results } = search;

  return (
    <>
      <SearchMovie onSubmit={onSubmit} />

      <List>
        {results &&
          results.map(({ title, id }) => (
            <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
              {title}
            </Link>
          ))}
      </List>
    </>
  );
};

export default Movies;
