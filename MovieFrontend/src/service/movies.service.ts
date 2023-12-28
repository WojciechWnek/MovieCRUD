import { destroy, get, post, put } from '../config/api';
import { endpoints } from '../config/endpoints';
import { Movie } from '../config/interfaces';

export const MoviesService = {
  getMovies: () => get(endpoints.movies.all),
  getMovie: (id: string) => get(endpoints.movies.single(id)),
  addMovie: (data: Omit<Movie, 'id'>) => post(endpoints.movies.all, data),
  editMovie: (data: Movie) => put(endpoints.movies.single(data.id), data),
  deleteMovie: (id: string) => destroy(endpoints.movies.single(id)),
};
