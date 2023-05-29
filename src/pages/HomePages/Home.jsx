import { useEffect, useState } from 'react';
import { getTrendMovies } from 'api/api';
import { Link } from 'react-router-dom';
import { List } from './home.styled';

const Home = () => {
  const [trend, setTrend] = useState();

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const data = await getTrendMovies();
        setTrend(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendMovies();
  }, []);

  console.log(trend);

  return (
    <div>
      <List>
        {trend &&
          trend.map(({ title, id }) => (
            <Link to={`/movies/${id}`} key={id}>
              {title}
            </Link>
          ))}
      </List>
    </div>
  );
};

export default Home;
