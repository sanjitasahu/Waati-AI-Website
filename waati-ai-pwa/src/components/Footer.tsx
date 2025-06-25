import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#008080',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Bradley Hand", "Brush Script MT", cursive',
              fontWeight: 700,
              color: 'white',
              fontSize: '2rem',
              letterSpacing: '0.5px',
              mb: 2
            }}
          >
            WAATI AI
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Empowering the next generation with AI literacy and 21st-century skills.
          </Typography>
          <Box sx={{ mb: 3 }}>
            <IconButton color="inherit" href="https://www.linkedin.com/in/sanjita-sahu/" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" href="mailto:sanjita.sahu@waatiai.com">
              <EmailIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Link href="/" color="inherit" sx={{ mx: 2 }}>
            Home
          </Link>
          <Link href="/about" color="inherit" sx={{ mx: 2 }}>
            About
          </Link>
          <Link href="/programs" color="inherit" sx={{ mx: 2 }}>
            Programs
          </Link>
          <Link href="/contact" color="inherit" sx={{ mx: 2 }}>
            Contact
          </Link>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Waati AI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 