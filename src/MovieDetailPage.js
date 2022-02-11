import { fetchSingleMovie } from './services/fetch-utils.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



export default function MovieDetailPage() {
  const [movie, setMovie] = useState('');
  const params = useParams();

  useEffect(() => {
    async function getSingleMovie() {
      const movie = await fetchSingleMovie(params.id);
      setMovie(movie);
    }
    getSingleMovie();
  }, [params.id, movie]);

  return (

    <div>
      <p>Movie Title: {movie.name}</p>
      <p>Year released: {movie.year_released}</p>
      <p>Director: {movie.director}</p>
      <p>Main Character: {movie.main_character}</p>
    </div>
  );
}