import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { formatINR, formatCAD, inrToCad } from '../utils/currency';

const Courses: React.FC = () => {
  const tracks = [
    {
      name: 'AI Foundations',
      duration: '8 weeks',
      liveHours: '2',
      modules: 'Python Basics • Data Wrangling • Classical ML'
    },
    {
      name: 'Applied Gen AI',
      duration: '6 weeks',
      liveHours: '2',
      modules: 'Prompt Engineering • LLM Agents • Vector DBs'
    },
    {
      name: 'MLOps Fast-Track',
      duration: '6 weeks',
      liveHours: '2',
      modules: 'CI/CD for Models • Monitoring • Cost Optimisation'
    }
  ];

  const pricing = [
    {
      plan: 'Open cohort (per track)',
      learnerCount: 'per learner',
      inrPrice: 5000,
      cadPrice: inrToCad(5000)
    },
    {
      plan: 'Private cohort',
      learnerCount: 'up to 25',
      inrPrice: 100000,
      cadPrice: inrToCad(100000)
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Expert-Led AI Courses
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          Live, cohort-based, hands-on.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Tracks & Syllabi
        </Typography>
        <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Track</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Weekly Live Hours</TableCell>
                <TableCell>Key Modules</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tracks.map((track) => (
                <TableRow key={track.name}>
                  <TableCell component="th" scope="row">
                    {track.name}
                  </TableCell>
                  <TableCell>{track.duration}</TableCell>
                  <TableCell>{track.liveHours}</TableCell>
                  <TableCell>{track.modules}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Pricing
        </Typography>
        <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Plan</TableCell>
                <TableCell align="right">Learner Count</TableCell>
                <TableCell align="right">Price (₹)</TableCell>
                <TableCell align="right">Price (CA$)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pricing.map((row) => (
                <TableRow key={row.plan}>
                  <TableCell component="th" scope="row">
                    {row.plan}
                  </TableCell>
                  <TableCell align="right">{row.learnerCount}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {formatINR(row.inrPrice)}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {formatCAD(row.cadPrice)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          component="a"
          href="/syllabus.pdf"
          download
          sx={{ px: 4, py: 1.5 }}
        >
          Download full syllabus (INR / CAD)
        </Button>
      </Box>
    </Container>
  );
};

export default Courses; 