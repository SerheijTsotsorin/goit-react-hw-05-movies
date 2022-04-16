import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Navigation } from './Navigation/Navigation';
import { HomePage } from '../view/HomePage';
import { MoviesPage } from '../view/MoviesPage';
import MovieDetailsPage from '../view/MovieDetailsPage';
import Cast from '../view/Cast';
import Reviews from '../view/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieID" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigation to="/" />} />
      </Route>
    </Routes>
  );
};
