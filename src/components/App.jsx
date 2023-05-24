import { Route, Routes } from 'react-router-dom';
import Home from 'pages/HomePages/HomePages';
import Movies from 'pages/MoviesPages';
import MovieDetails from 'pages/MovieDetailsPages';
import Cast from 'pages/CastPages';
import Reviews from 'pages/ReviewsPages';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
