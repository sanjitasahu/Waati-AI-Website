import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const MainNav: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button
        component={Link}
        to="/"
        color="inherit"
        sx={{ mx: 1 }}
      >
        Home
      </Button>
      <Button
        component={Link}
        to="/courses"
        color="inherit"
        sx={{ mx: 1 }}
      >
        Courses
      </Button>
      <Button
        component={Link}
        to="/consulting"
        color="inherit"
        sx={{ mx: 1 }}
      >
        Consulting
      </Button>
      <Button
        component={Link}
        to="/growth"
        color="inherit"
        sx={{ mx: 1 }}
      >
        Growth
      </Button>
      <Button
        component={Link}
        to="/north-east-india"
        color="inherit"
        sx={{ mx: 1 }}
      >
        NE India
      </Button>
    </Box>
  );
};

export default MainNav; 