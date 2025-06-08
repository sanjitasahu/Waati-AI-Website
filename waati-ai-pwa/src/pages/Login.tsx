import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Alert } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try demo@waatiai.com / demo123');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Login
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Sign in to your Waati AI account
        </Typography>
      </Box>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        
        <Typography variant="body2" color="text.secondary" textAlign="center">
          Demo credentials: demo@waatiai.com / demo123
        </Typography>
      </Box>
    </Container>
  );
};

export default Login; 