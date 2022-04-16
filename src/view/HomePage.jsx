import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from 'services/MovieAPI';
// import ListMoviesTrending from 'components/ListMoviesTrending';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

const useFetchItem = () => {
  const [trendFilm, setTrendFilm] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        setStatus('pending');
        const Movies = await fetchTrendingMovies();
        setTrendFilm(Movies);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error);
      }
    }
    fetchTrendMovies();
  }, []);

  return { trendFilm, status, error };
};

export function HomePage() {
  const { trendFilm, status, error } = useFetchItem();

  if (status === 'idle') {
    return <></>;
  }
  if (status === 'pending') {
    return <h2>Wait.....</h2>;
  }

  if (status === 'rejected') {
    return <h2>{error.message}</h2>;
  }

  if (status === 'resolved') {
    return <TrendingMovies films={trendFilm} />;
  }
}
