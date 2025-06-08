import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Courses: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          AI Courses
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Comprehensive AI and Machine Learning courses coming soon!
        </Typography>
      </Box>
    </Container>
  );
};

export default Courses; 