import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Movie } from '../config/interfaces';
import { Grid, Stack } from '@mui/material';

interface MovieCardProps {
  deleteMovie: (id: string) => void;
  handleOpen: (movie: Movie) => void;

  movie: Movie;
}

const MovieCard = ({ movie, deleteMovie, handleOpen }: MovieCardProps) => {
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Typography align="left" gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="body2">
              {movie.director}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Raiting {movie.rating}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary" align="left">
            {movie.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button size="small" onClick={() => handleOpen(movie)}>
            Edit
          </Button>
          <Button color="warning" size="small" onClick={() => deleteMovie(movie.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MovieCard;
