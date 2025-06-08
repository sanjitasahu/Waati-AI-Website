import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          Profile
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Manage your account settings
        </Typography>
        <Typography variant="body1">
          Email: {user?.email}
        </Typography>
        <Typography variant="body1">
          Name: {user?.name}
        </Typography>
      </Box>
    </Container>
  );
};

export default Profile; 