import { useEffect, useState } from 'react';
import { getMovies } from './services/fetch-utils.js';
import Movie from './Movie';

export default function MovieListPage() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await getMovies();
      setMovies(moviesData);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {
        movies.map((movie, i) =>
          <Movie key={movie + i} movie={movie}/>
        )
      }
    </div>
  );
}