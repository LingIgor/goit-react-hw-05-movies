// import { useParams } from "react-router-dom";

import { useEffect, useState } from 'react';
import { getMoviesDeteils } from 'api/api';
import { useParams } from 'react-router-dom';
const Movies = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const getMovieId = async () => {
      try {
        const { data } = await getMoviesDeteils(movieId);
        setMovie();
        console.log(data);
        console.log(data.poster_path);
      } catch (error) {}
    };
    getMovieId();
  }, []);

  return (
    <div>
      <img src="" />
    </div>
  );
};

export default Movies;
