import { useCallback, useState } from 'react';
import { Modal, Button, Grid, Stack, Typography, Box } from '@mui/material';

import './App.css';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import { Movie } from './config/interfaces';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [showList, setShowList] = useState(true);
  const [openModalData, setOpenModalData] = useState<Movie | null>(null);
  const handleOpen = (movie: Movie) => setOpenModalData(movie);
  const handleClose = () => setOpenModalData(null);

  const showListeSetter = useCallback(() => {
    setShowList((val) => !val);
  }, []);

  return (
    <Grid container spacing={2} direction={'column'}>
      <Grid item alignSelf={'end'}>
        <Stack direction="row" spacing={1} alignItems="center" mb={4}>
          <Button onClick={() => setShowList(false)}>
            <Typography>ADD NEW MOVIE</Typography>
          </Button>
          <Button onClick={() => setShowList(true)}>
            <Typography>SHOW MOVIES LIST</Typography>
          </Button>
        </Stack>
      </Grid>
      <Grid container spacing={4}>
        {showList ? (
          <MoviesList handleOpen={handleOpen} open={!!openModalData} />
        ) : (
          <AddMovie showListeSetter={showListeSetter} />
        )}
      </Grid>
      <Modal open={!!openModalData} onClose={handleClose}>
        <Box sx={style}>
          {openModalData == null ? (
            <Typography gutterBottom variant="h5">
              Something went wrong
            </Typography>
          ) : (
            <EditMovie handleClose={handleClose} oldMovieData={openModalData} />
          )}
        </Box>
      </Modal>
    </Grid>
  );
}

export default App;
