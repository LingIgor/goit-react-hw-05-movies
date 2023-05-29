import { useEffect, useState } from 'react';
import { getMoviesDeteils } from 'api/api';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { Back, Text, Wrap, Wrapper } from './MovieDetailStyled';

const MovieDetails = () => {
  const [details, setDetails] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');
  const { movieId } = useParams();

  const location = useLocation();

  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMoviesDeteils(movieId);
        setDetails(data);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  const { title, poster_path, vote_average, overview, genres } = details;

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  return (
    <div>
      <div>
        <Back to={location.state?.from ?? '/'}>Go back</Back>
      </div>

      {status === 'pending' && 'Loading...'}
      {status === 'rejected' && <h3>{error.message}</h3>}

      {status === 'resolved' && (
        <div>
          <Wrap>
            <div>
              <img src={`${baseUrl}${poster_path}`} alt={title} width="600px" />
            </div>
            <div>
              {<h1>{title}</h1>}
              <Text>User score: {userScore}</Text>
              <h2>Overview</h2>
              <Text>{overview}</Text>
              <h2>Genres</h2>
              {genres && genres.map(el => <Text key={el.id}>{el.name}</Text>)}
            </div>
          </Wrap>
          <Wrapper>
            <Text>Additional information</Text>
            <Back to="cast"> Cast </Back>
            <Back to="reviews"> Reviews </Back>
          </Wrapper>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
