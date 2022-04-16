import PropTypes from 'prop-types';

import { Title, ListTrendFilms, ItemTrendFilms } from './TrendingMovies.styled';

export default function TrendingMovies({ films }) {
  return (
    <>
      <Title>Trending Films</Title>
      <ListTrendFilms>
        {films.map(film => (
          <li key={film.id}>
            <ItemTrendFilms to={`movies/${film.id}`}>
              {film.original_title}
            </ItemTrendFilms>
          </li>
        ))}
      </ListTrendFilms>
    </>
  );
}

TrendingMovies.propTypes = {
  films: PropTypes.array.isRequired,
};
