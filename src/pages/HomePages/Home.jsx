import { useEffect, useState } from 'react';
import { getTrendMovies } from 'api/api';

import { List, Div } from './home.styled';
import { Linkser } from './home.styled';

const Home = () => {
  const [trend, setTrend] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const data = await getTrendMovies();
        setTrend(data.results);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <div>
      {status === 'pending' && 'Loading...'}
      {status === 'rejected' && <h3>{error.message}</h3>}

      {status === 'resolved' && (
        <Div>
          <h1>Trending films</h1>
          <List>
            {trend &&
              trend.map(({ title, id }) => (
                <Linkser to={`/movies/${id}`} key={id}>
                  {title}
                </Linkser>
              ))}
          </List>
        </Div>
      )}
    </div>
  );
};

export default Home;
