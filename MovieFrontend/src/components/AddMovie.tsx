import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MoviesService } from '../service/movies.service';
import { Grid } from '@mui/material';

interface AddMovieProps {
  showListeSetter: () => void;
}

const AddMovie = ({ showListeSetter }: AddMovieProps) => {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    description: '',
    rating: 0,
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

    MoviesService.addMovie(formData).then(() => {
      showListeSetter();
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
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default AddMovie;
