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
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

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
    { text: 'Teacher Resources', path: '/teacher-resources' },
    { text: 'Case Studies', path: '/case-studies' },
    { text: 'NE India', path: '/north-east-india' },
    { text: 'Blog', path: '/blog' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box 
      sx={{ 
        width: 280, 
        pt: 2,
        background: 'linear-gradient(135deg, #008080 0%, #073B4C 100%)',
        height: '100%',
        color: '#F8F9FA'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, pb: 2 }}>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ 
            color: '#F8F9FA',
            '&:hover': {
              backgroundColor: 'rgba(248, 249, 250, 0.1)'
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
                backgroundColor: 'rgba(248, 249, 250, 0.1)',
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
                  color: '#F8F9FA'
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
          background: 'linear-gradient(90deg, #008080 0%, #FFD166 50%, #FF6B6B 100%)',
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
              src="/waati-ai-consulting-logo.png"
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
                color: '#073B4C',
                '&:hover': {
                  backgroundColor: 'rgba(7, 59, 76, 0.1)'
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
                    color: '#073B4C',
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: 'rgba(7, 59, 76, 0.1)',
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
            background: 'linear-gradient(135deg, #008080 0%, #073B4C 100%)',
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 