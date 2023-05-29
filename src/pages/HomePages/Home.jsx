import { useEffect, useState } from 'react';
import { getTrendMovies } from 'api/api';
import { Link } from 'react-router-dom';
import { List } from './home.styled';

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
        <List>
          {trend &&
            trend.map(({ title, id }) => (
              <Link to={`/movies/${id}`} key={id}>
                {title}
              </Link>
            ))}
        </List>
      )}
    </div>
  );
};

export default Home;
