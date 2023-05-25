import { useState } from 'react';
import { Link } from 'react-router-dom';
import { List } from './HomeStyled';

const Home = () => {
  const [trends, setTrends] = useState([]);
  //   const baseUrl = 'https://image.tmdb.org/t/p/w500';

  fetch(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=3f267efdd2dfa6b504977d892a47bb84'
  )
    .then(res => res.json())
    .then(data => setTrends([...data.results]));

  return (
    <div>
      <List>
        {trends.map(el => (
          <Link to={{pathname: `/movies/${el.id}`}} key={el.id}>
            {el.original_title}
          </Link>
        ))}
      </List>
    </div>
  );
};

export default Home;
