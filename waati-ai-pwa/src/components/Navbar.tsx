import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileOpen(false);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Courses', path: '/courses' },
    { text: 'Consulting', path: '/consulting' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box 
      sx={{ 
        width: 280, 
        pt: 2,
        background: 'linear-gradient(135deg, #cdffd8 0%, #94b9ff 100%)',
        height: '100%',
        color: '#1A202C'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, pb: 2 }}>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ 
            color: '#1A202C',
            '&:hover': {
              backgroundColor: 'rgba(26, 32, 44, 0.1)'
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
                backgroundColor: 'rgba(26, 32, 44, 0.1)',
                borderRadius: '8px',
                mx: 1
              },
              borderRadius: '8px',
              mx: 1,
              mb: 0.5
            }}
          >
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiListItemText-primary': {
                  fontWeight: 500,
                  color: '#1A202C'
                }
              }}
            />
          </ListItem>
        ))}
        {user ? (
          <>
            <ListItem 
              component={Link} 
              to="/dashboard" 
              onClick={() => setMobileOpen(false)}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(26, 32, 44, 0.1)',
                  borderRadius: '8px',
                  mx: 1
                },
                borderRadius: '8px',
                mx: 1,
                mb: 0.5
              }}
            >
              <ListItemText 
                primary="Dashboard" 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontWeight: 500,
                    color: '#1A202C'
                  }
                }}
              />
            </ListItem>
            <ListItem 
              component={Link} 
              to="/profile" 
              onClick={() => setMobileOpen(false)}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(26, 32, 44, 0.1)',
                  borderRadius: '8px',
                  mx: 1
                },
                borderRadius: '8px',
                mx: 1,
                mb: 0.5
              }}
            >
              <ListItemText 
                primary="Profile" 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontWeight: 500,
                    color: '#1A202C'
                  }
                }}
              />
            </ListItem>
            <ListItem 
              onClick={handleLogout}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(26, 32, 44, 0.1)',
                  borderRadius: '8px',
                  mx: 1
                },
                borderRadius: '8px',
                mx: 1,
                mb: 0.5
              }}
            >
              <ListItemText 
                primary="Logout" 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontWeight: 500,
                    color: '#1A202C'
                  }
                }}
              />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem 
              component={Link} 
              to="/login" 
              onClick={() => setMobileOpen(false)}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(26, 32, 44, 0.1)',
                  borderRadius: '8px',
                  mx: 1
                },
                borderRadius: '8px',
                mx: 1,
                mb: 0.5
              }}
            >
              <ListItemText 
                primary="Login" 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontWeight: 500,
                    color: '#1A202C'
                  }
                }}
              />
            </ListItem>
            <ListItem 
              component={Link} 
              to="/register" 
              onClick={() => setMobileOpen(false)}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(26, 32, 44, 0.1)',
                  borderRadius: '8px',
                  mx: 1
                },
                borderRadius: '8px',
                mx: 1,
                mb: 0.5
              }}
            >
              <ListItemText 
                primary="Register" 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontWeight: 500,
                    color: '#1A202C'
                  }
                }}
              />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          background: 'linear-gradient(90deg, #cdffd8 0%, #94b9ff 100%)',
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
            }}
          >
            <img
              src="/WAATI AI consulting logo.png"
              alt="Waati AI"
              style={{
                height: '45px',
                width: 'auto',
                maxWidth: '220px',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
              }}
            />
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                color: '#1A202C',
                '&:hover': {
                  backgroundColor: 'rgba(26, 32, 44, 0.1)'
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
                    color: '#1A202C',
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: 'rgba(26, 32, 44, 0.1)',
                      transform: 'translateY(-1px)',
                      transition: 'all 0.2s ease-in-out'
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              {user ? (
                <>
                  <Button
                    component={Link}
                    to="/dashboard"
                    sx={{ 
                      textTransform: 'none',
                      color: '#1A202C',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: 'rgba(26, 32, 44, 0.1)',
                        transform: 'translateY(-1px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button
                    component={Link}
                    to="/profile"
                    sx={{ 
                      textTransform: 'none',
                      color: '#1A202C',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: 'rgba(26, 32, 44, 0.1)',
                        transform: 'translateY(-1px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    Profile
                  </Button>
                  <Button
                    onClick={handleLogout}
                    sx={{ 
                      textTransform: 'none',
                      color: '#1A202C',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: 'rgba(26, 32, 44, 0.1)',
                        transform: 'translateY(-1px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component={Link}
                    to="/login"
                    sx={{ 
                      textTransform: 'none',
                      color: '#1A202C',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: 'rgba(26, 32, 44, 0.1)',
                        transform: 'translateY(-1px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/register"
                    sx={{ 
                      textTransform: 'none',
                      color: '#1A202C',
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      borderRadius: '8px',
                      border: '2px solid #1A202C',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        backgroundColor: 'rgba(26, 32, 44, 0.1)',
                        border: '2px solid #1A202C',
                        transform: 'translateY(-1px)',
                        transition: 'all 0.2s ease-in-out',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                      }
                    }}
                  >
                    Register
                  </Button>
                </>
              )}
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
            background: 'linear-gradient(135deg, #cdffd8 0%, #94b9ff 100%)',
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 