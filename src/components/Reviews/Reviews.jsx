import { getMoviesReviews } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getMoviesReviews(movieId);
        setReviews(data);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    getReviews();
  }, [movieId]);

  const { results } = reviews;

  return (
    <>
      {status === 'pending' && 'Loading...'}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && (
        <ul>
          {results.length === 0 && (
            <h1>Sorry, we don't have any reviews for this movie yet. </h1>
          )}

          {results &&
            results.map(el => (
              <li key={el.id}>
                <h1>{el.author}</h1>
                <p>{el.content}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
