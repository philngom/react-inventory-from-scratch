import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  return (
    <Link to={`/movie-list/${movie.id}`}>
      <div>
        <p>{movie.name}</p>
        <p>{movie.year_released}</p>
        <p>{movie.director}</p>
        <p>{movie.main_character}</p>
      </div>
    </Link>
  );
}