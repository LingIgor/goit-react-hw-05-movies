import { List } from 'pages/HomePages/home.styled';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api/api';
import { Input, Form, Button, Label } from './Movies.styled';
import { Div, Linkser } from 'pages/HomePages/home.styled';

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
    if (!query) {
      alert('sorry');
      return;
    }
    findMovies();
  };

  const updateInput = e => {
    setSearchparams({ query: e.target.value });
  };

  console.log(search);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input type="text" onChange={updateInput} />
          <Button type="submit">Search</Button>
        </Label>
      </Form>
      <div>
        {status === 'pending' && 'Loading...'}
        {status === 'rejected' && <h3>{error.message}</h3>}

        {status === 'resolved' && (
          <Div>
            <List>
              {search &&
                search.map(({ title, id }) => (
                  <Linkser
                    to={`/movies/${id}`}
                    state={{ from: location }}
                    key={id}
                  >
                    {title}
                  </Linkser>
                ))}
            </List>
          </Div>
        )}
      </div>
    </>
  );
};

export default Movies;
