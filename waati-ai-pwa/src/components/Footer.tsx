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
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <img
            src="/WAATI AI consulting logo.png"
            alt="Waati AI"
            style={{
              height: '50px',
              width: 'auto',
              marginBottom: '16px',
            }}
          />
          <Typography variant="body2" sx={{ mb: 2 }}>
            Transforming businesses through AI-powered solutions and expert consulting.
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
          <Link href="/courses" color="inherit" sx={{ mx: 2 }}>
            Courses
          </Link>
          <Link href="/consulting" color="inherit" sx={{ mx: 2 }}>
            Consulting
          </Link>
          <Link href="/about" color="inherit" sx={{ mx: 2 }}>
            About
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