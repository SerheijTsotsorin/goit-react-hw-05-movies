import { useState, useEffect } from 'react';

import SearchForm from 'components/SearchForm/SearchForm';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { fetchMoviesByName } from 'services/MovieAPI';
// import { useParams } from 'react-router-dom';

export function MoviesPage() {
  const [nameFilm, setNameFilm] = useState('');
  const [listFilm, setListFilm] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  //   let { movieID } = useParams();

  const handleSearchSubmit = nameFilm => {
    setNameFilm(nameFilm);
    console.log(nameFilm);
  };

  useEffect(() => {
    if (!nameFilm) {
      return;
    }
    async function fetchListSearchMovies({ nameFilm }) {
      try {
        setStatus('pending');
        const Movies = await fetchMoviesByName();
        setListFilm(Movies);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error);
      }
    }
    fetchListSearchMovies();
  });

  if (status === 'idle') {
    return <SearchForm onSearchSubmit={handleSearchSubmit} />;
  }
  if (status === 'pending') {
    return (
      <>
        <SearchForm onSearchSubmit={handleSearchSubmit} />
        <h2>Wait....</h2>
      </>
    );
  }

  if (status === 'rejected') {
    return (
      <>
        <SearchForm onSearchSubmit={handleSearchSubmit} />
        <h2>{error.messaage}</h2>
      </>
    );
  }
  if (status === 'resolved') {
    return (
      <>
        <SearchForm onSearchSubmit={handleSearchSubmit} />
        <SearchMovies films={listFilm} />
      </>
    );
  }
}
