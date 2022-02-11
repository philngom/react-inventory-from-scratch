import { fetchSingleMovie } from './services/fetch-utils.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function MovieDetailPage() {
  const [movie, setMovie] = useState();
  const params = useParams();

  useEffect(() => {
    async function getSingleMovie() {
      const movie = await fetchSingleMovie(params.id);
      setMovie(movie);
    }
    getSingleMovie();
  }, [params.id]);

  return (
    <div>
      {movie.name}
    </div>
  );
}