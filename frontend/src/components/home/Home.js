import React from 'react';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function Home() {
  return (
    <Box bgcolor="black" width="100vw" height="8vh">
      <Button variant="contained" color="primary">
        Hola Mundo!
      </Button>
    </Box>
  );
}

export default Home;