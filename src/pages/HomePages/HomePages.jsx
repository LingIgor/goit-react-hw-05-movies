import { useEffect, useState } from 'react';
import { getTrendMovies } from 'api/api';
import { Link } from 'react-router-dom';
import { List } from './HomeStyled';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState('');
  //   const baseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const getTrend = async () => {
      try {
        const { data } = await getTrendMovies();
        setTrends([...data.results]);
      } catch (error) {
        setError(error);
      }
    };

    getTrend();
  }, []);

  return (
    <div>
      <List>
        {trends.map(el => (
          <Link to={{ pathname: `/movies/${el.id}` }} key={el.id}>
            {el.original_title}
          </Link>
        ))}
      </List>
    </div>
  );
};

export default Home;
