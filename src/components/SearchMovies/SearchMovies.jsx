import { Link } from 'react-router-dom';

export default function SearchMovies({ films }) {
  return (
    <>
      <ol>
        {films.map(film => (
          <li key={film.id}>
            <Link to={film.id}>{film.original_title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
