import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MoviesService } from '../service/movies.service';
import { Grid, Stack } from '@mui/material';
import { Movie } from '../config/interfaces';

interface EditMovieProps {
  oldMovieData: Movie;
  handleClose: () => void;
}

const EditMovie = ({ oldMovieData, handleClose }: EditMovieProps) => {
  const [formData, setFormData] = useState({
    title: oldMovieData.title,
    director: oldMovieData.director,
    description: oldMovieData.description,
    rating: oldMovieData.rating,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newData = {
      ...formData,
      id: oldMovieData.id,
    };

    MoviesService.editMovie(newData).then(() => {
      handleClose();
    });
  };

  return (
    <Grid item xs={12} justifySelf={'center'}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="Director"
          name="director"
          value={formData.director}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <TextField
          required
          label="Rating"
          name="rating"
          type="number"
          value={formData.rating}
          onChange={handleChange}
          fullWidth
          margin="normal"
          inputProps={{ min: 0, max: 10 }}
        />
        <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'space-evenly' }} mt={3}>
          <Button variant="contained" color="primary" type="submit">
            Edit
          </Button>
          <Button variant="contained" color="error" type="button" onClick={handleClose}>
            Cancel
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};

export default EditMovie;
