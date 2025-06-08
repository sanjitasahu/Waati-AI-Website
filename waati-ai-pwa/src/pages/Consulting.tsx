import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Consulting: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          AI Consulting
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Expert AI consulting services to transform your business.
        </Typography>
      </Box>
    </Container>
  );
};

export default Consulting; 