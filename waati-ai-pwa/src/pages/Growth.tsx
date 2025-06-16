import React from 'react';
import { Container, Typography, Box, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { formatINR, formatCAD, inrToCad } from '../utils/currency';

const Growth: React.FC = () => {
  const features = [
    'KPI audit & model mapping',
    'Monthly A/B test loops',
    'GTM workflow automation (upsell, churn prediction)',
    'Executive dashboards & governance templates'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      description: '1 use-case',
      duration: '3 months',
      inrPrice: 450000,
      cadPrice: inrToCad(450000)
    },
    {
      name: 'Scale',
      description: 'up to 5 use-cases',
      duration: '3 months',
      inrPrice: 900000,
      cadPrice: inrToCad(900000)
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Growth-Focused AI Program
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Revenue-centric AI roll-outs
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          What's inside
        </Typography>
        <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
          <List>
            {features.map((feature) => (
              <ListItem key={feature}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Pricing
        </Typography>
        <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Package</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell align="right">Price (₹)</TableCell>
                <TableCell align="right">Price (CA$)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pricingTiers.map((tier) => (
                <TableRow key={tier.name}>
                  <TableCell component="th" scope="row">
                    {tier.name} ({tier.description})
                  </TableCell>
                  <TableCell>{tier.duration}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {formatINR(tier.inrPrice)}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {formatCAD(tier.cadPrice)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell component="th" scope="row" colSpan={2}>
                  Performance bonus
                </TableCell>
                <TableCell align="right" sx={{ fontStyle: 'italic' }}>
                  10% of verified savings / lift
                </TableCell>
                <TableCell align="right" sx={{ fontStyle: 'italic' }}>
                  same
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
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

export default Growth; 