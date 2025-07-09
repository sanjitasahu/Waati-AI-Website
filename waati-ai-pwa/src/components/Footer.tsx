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
import Logo from './Logo';

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
        <Box sx={{ textAlign: 'center', mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 1, md: 2 }, mb: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: { xs: 36, md: 48 },
                width: { xs: 36, md: 48 },
                mr: { xs: 1, md: 2 },
              }}
            >
              <Logo
                variant="v1"
                size="small"
                alt="Waati AI Logo"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Bradley Hand", "Brush Script MT", cursive',
                fontWeight: 700,
                color: 'white',
                fontSize: { xs: '1.3rem', md: '2rem' },
                letterSpacing: '0.5px',
                lineHeight: 1,
                '@media (max-width:600px)': {
                  fontSize: '1.1rem',
                },
              }}
            >
              WAATI AI
            </Typography>
          </Box>
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