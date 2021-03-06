import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  return (
    <Link to={`/movie-list/${movie.id}`}>
      <div>
        <p>Title: {movie.name}</p>
      </div>
    </Link>
  );
}