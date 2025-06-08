import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome, {user?.name}!
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Your Waati AI dashboard is coming soon.
        </Typography>
      </Box>
    </Container>
  );
};

export default Dashboard; 