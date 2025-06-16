import React from 'react';
import { Container, Typography, Box, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import { formatINR, formatCAD, inrToCad } from '../utils/currency';

const Consulting: React.FC = () => {
  const phases = [
    {
      title: 'Opportunity Sprint',
      duration: '2 weeks',
      inrPrice: 300000,
      cadPrice: inrToCad(300000),
      description: 'Initial assessment and opportunity identification'
    },
    {
      title: 'Pilot Build & Deploy',
      duration: '6-12 weeks',
      inrPrice: [600000, 1000000],
      cadPrice: [inrToCad(600000), inrToCad(1000000)],
      description: 'Milestone-based billing for pilot implementation'
    },
    {
      title: 'Enable & Scale',
      duration: 'Ongoing',
      inrPrice: 150000,
      cadPrice: inrToCad(150000),
      description: 'Monthly retainer for scaling and optimization'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          AI Business Consulting
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Transform your org from pilot to production.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Pricing
        </Typography>
        <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Phase / Package</TableCell>
                <TableCell align="right">Price (₹)</TableCell>
                <TableCell align="right">Price (CA$)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {phases.map((phase) => (
                <TableRow key={phase.title}>
                  <TableCell component="th" scope="row">
                    {phase.title} ({phase.duration})
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {Array.isArray(phase.inrPrice)
                      ? `${formatINR(phase.inrPrice[0])} – ${formatINR(phase.inrPrice[1])}`
                      : formatINR(phase.inrPrice)}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {Array.isArray(phase.cadPrice)
                      ? `${formatCAD(phase.cadPrice[0])} – ${formatCAD(phase.cadPrice[1])}`
                      : formatCAD(phase.cadPrice)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Paper sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h6" gutterBottom>
            Typical ROI
          </Typography>
          <Typography variant="h4" color="primary" sx={{ fontStyle: 'italic' }}>
            20% cost reduction in 120 days
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/contact"
          sx={{ px: 4, py: 1.5 }}
        >
          Book a 30-min discovery call (₹/CA$)
        </Button>
      </Box>
    </Container>
  );
};

export default Consulting; 