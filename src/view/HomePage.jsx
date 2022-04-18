import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/MovieAPI';
import Loader from '../components/Loader/Loader';

import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setStatus('pending');
        const films = await fetchTrendingMovies();
        setTrendingFilms(films);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    }
    fetchFilms();
  }, []);

  if (status === 'idle') {
    return <p>Try later</p>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'resolved') {
    return <MovieList films={trendingFilms} from="home" />;
  }

  if (status === 'rejected') {
    return <h2>{error}</h2>;
  }
};
export default HomePage;
