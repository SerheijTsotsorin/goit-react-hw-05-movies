import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from '../services/MovieAPI';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';

const MoviesPage = () => {
  const [name, setName] = useState(null);
  const [status, setStatus] = useState('idle');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  let currentQuery = searchParams.get('query');

  const handleFormSubmit = name => {
    setName(name);
  };

  useEffect(() => {
    if (name) {
      setSearchParams({ query: name });
    }
    async function fetchData() {
      try {
        setStatus('pending');
        const films = await fetchMoviesByName(currentQuery);

        if (films.length === 0) {
          return await Promise.reject(new Error('Try another name'));
        } else {
          setFilms(films);
        }
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    }
    if (currentQuery) {
      fetchData();
    }
  }, [name, setSearchParams, currentQuery]);

  if (status === 'idle') {
    return <SearchForm onSubmit={handleFormSubmit} />;
  }
  if (status === 'pending') {
    return (
      <>
        <SearchForm onSubmit={handleFormSubmit} />
        <Loader />
      </>
    );
  }
  if (status === 'resolved') {
    return (
      <>
        <SearchForm onSubmit={handleFormSubmit} />
        <MovieList films={films} from="movie" />
      </>
    );
  }

  if (status === 'rejected') {
    return (
      <>
        <SearchForm onSubmit={handleFormSubmit} />
        <h2>{error}</h2>
      </>
    );
  }
};

export default MoviesPage;
