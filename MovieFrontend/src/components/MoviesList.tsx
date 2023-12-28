import { useEffect, useState } from 'react';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../config/interfaces';
import MovieCard from './MovieCard';
import { Typography } from '@mui/material';

interface MoviesListProps {
  handleOpen: (movie: Movie) => void;
  open: boolean;
}

const MoviesList = ({ handleOpen, open }: MoviesListProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    MoviesService.getMovies().then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  }, [open]);

  const deleteMovie = (id: string) => {
    MoviesService.deleteMovie(id).then(() => {
      setMovies((prevState) => prevState.filter((movies) => movies.id !== id));
    });
  };

  console.log(movies);

  return (
    <>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            deleteMovie={deleteMovie}
            handleOpen={handleOpen}
          />
        ))
      ) : (
        <Typography gutterBottom variant="h5">
          First add some movies
        </Typography>
      )}
    </>
  );
};

export default MoviesList;
