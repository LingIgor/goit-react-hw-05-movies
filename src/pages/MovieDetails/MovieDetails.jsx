import { useEffect, useState } from 'react';
import { getMoviesDeteils } from 'api/api';
import { Link, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [details, setDetails] = useState('');
  const { movieId } = useParams();

  const location = useLocation();
  console.log(location);

  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMoviesDeteils(movieId);
        setDetails(data);
      } catch (error) {}
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  const { title, poster_path, vote_average, overview, genres } = details;

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Go back</Link>

      <div>
        <img src={`${baseUrl}${poster_path}`} alt={title} />
        {<h1>{title}</h1>}
        <p>User score: {userScore}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        {genres && genres.map(el => <p key={el.id}>{el.name}</p>)}
      </div>
      <p>Additional information</p>
      <Link to="cast"> Cast </Link>
      <Link to="reviews"> Reviews </Link>
    </div>
  );
};

export default MovieDetails;
