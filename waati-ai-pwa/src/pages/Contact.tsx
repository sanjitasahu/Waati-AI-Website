import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Alert } from '@mui/material';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwkgyyqv'; // Replace with your Formspree endpoint after setup

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Get in touch with our team for any questions or inquiries.
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        {success && <Alert severity="success" sx={{ mb: 2 }}>Thank you! Your message has been sent.</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          margin="normal"
          multiline
          minRows={4}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </Box>
    </Container>
  );
};

export default Contact; 