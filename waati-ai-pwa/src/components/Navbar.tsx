import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const { user, logout } = useAuth();
  // const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Programs', path: '/programs' },
    { text: 'Consulting', path: '/consulting' },
    { text: 'Blog', path: '/blog' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box 
      sx={{ 
        width: 280, 
        pt: 2,
        background: '#008080',
        height: '100%',
        color: 'white'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, pb: 2 }}>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ 
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={Link} 
            to={item.path} 
            onClick={() => setMobileOpen(false)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                mx: 1
              },
              borderRadius: '4px',
              mx: 1,
              mb: 0.5
            }}
          >
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiListItemText-primary': {
                  fontWeight: 500,
                  color: 'white'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          background: '#008080',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar sx={{ minHeight: '70px' }}>
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, md: 2 },
            }}
          >
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

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  sx={{ 
                    textTransform: 'none',
                    color: 'white',
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-1px)',
                      transition: 'all 0.2s ease-in-out'
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            background: '#008080'
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 