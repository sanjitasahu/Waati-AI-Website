import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Get in touch with our team for any questions or inquiries.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact; 