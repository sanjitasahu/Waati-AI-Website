import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const blink = keyframes`
  0%, 50% {
    border-color: transparent;
  }
  51%, 100% {
    border-color: #073B4C;
  }
`;

const continuousTypewriter = keyframes`
  0% {
    width: 0;
    opacity: 1;
  }
  45% {
    width: 100%;
    opacity: 1;
  }
  55% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 0;
    opacity: 1;
  }
`;

const fadeInLoop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  30% {
    opacity: 1;
    transform: translateY(0);
  }
  70% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
`;




const AnimatedButton = styled(Button)(({ theme }) => ({
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  }
}));



const Home: React.FC = () => {
  const stats = [
    { number: '1 Hour', label: 'Weekly AI Learning' },
    { number: '6-12', label: 'Grade Levels' },
    { number: '2x', label: 'Faster Learning' },
    { number: '80%', label: 'AI Jobs by 2030' },
  ];

  const programs = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Interactive Workshops',
      subtitle: 'Grades 6–8',
      description: 'Spark curiosity with AI fundamentals, logic puzzles, and beginner coding in Scratch or Python.',
      link: '/programs',
      highlights: ['AI Fundamentals', 'Logic Puzzles', 'Scratch/Python Coding']
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      title: 'Skill-Building Bootcamps',
      subtitle: 'Grades 9–10',
      description: 'Dive into machine learning basics, data ethics, and real-world case studies. Build chatbots and image classifiers.',
      link: '/programs',
      highlights: ['Machine Learning', 'Data Ethics', 'Build Chatbots']
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Advanced Labs & Capstones',
      subtitle: 'Grades 11–12',
      description: 'Deepen technical know-how with neural networks, NLP, and hands-on capstone projects showcasing innovation.',
      link: '/programs',
      highlights: ['Neural Networks', 'NLP Projects', 'Capstone Showcases']
    },
  ];



  const [openCard, setOpenCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'url("/hero-image.jpg") center center / cover no-repeat',
          color: '#073B4C',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'calc(100vh - 70px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: '10px', md: '20px' },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            zIndex: 1
          }
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            padding: '10px'
          }}
        >
          {/* Main Content Widget */}
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            position: 'relative',
            animation: `${fadeInUp} 1s ease-out`,
            maxWidth: '900px',
            textAlign: 'center'
          }}>
              <Typography variant="h1" component="h1" sx={{ 
                fontFamily: '"Chalkboard", "Chalkduster", "Comic Neue", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                mb: 3,
                color: '#073B4C',
                lineHeight: 1.1,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                Unlock Your Child's Future with{' '}
                <Box component="span" sx={{ 
                  background: 'linear-gradient(45deg, #008080, #073B4C)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}>
                  AI
                </Box>
              </Typography>
              
              <Typography variant="h5" sx={{ 
                mb: 4, 
                color: '#073B4C',
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                lineHeight: 1.5,
                fontWeight: 500,
                opacity: 0.9,
                maxWidth: '600px'
              }}>
                Hands-on, fun, and future-focused AI workshops for Grades 6–12 that spark curiosity, build confidence, and turn every student into a young innovator.
              </Typography>
              

              {/* Buttons Widget */}
              <Box sx={{ 
                display: 'flex', 
                gap: '20px', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: '100%'
              }}>
                <AnimatedButton
                  variant="contained"
                  size="large"
                  href="/programs"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: '#073B4C',
                    color: 'white',
                    px: 4,
                    py: 2.5,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    boxShadow: '0 8px 32px rgba(7, 59, 76, 0.3)',
                    minWidth: '180px',
                    '&:hover': { 
                      backgroundColor: '#051f2e',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(7, 59, 76, 0.4)',
                    },
                  }}
                >
                  Explore Programs
                </AnimatedButton>
                <AnimatedButton
                  variant="outlined"
                  size="large"
                  href="/enroll"
                  sx={{
                    borderColor: '#073B4C',
                    borderWidth: '2px',
                    color: '#073B4C',
                    px: 4,
                    py: 2.5,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    minWidth: '180px',
                    '&:hover': { 
                      borderColor: '#051f2e',
                      backgroundColor: 'rgba(7, 59, 76, 0.1)',
                      transform: 'translateY(-4px)'
                    },
                  }}
                >
                  Enroll Today
                </AnimatedButton>
              </Box>
          </Box>
        </Container>
      </Box>

      {/* For Students and Parents Cards */}
      <Box sx={{ 
        py: { xs: '60px', md: '80px' }, 
        backgroundColor: '#ffffff',
        position: 'relative'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center'
          }}>
            {/* Students Card */}
            <Box sx={{ 
              flex: { xs: '1 1 100%', md: '1 1 45%' },
              maxWidth: '500px'
            }}>
              <Box 
                component="a"
                href="/programs#students"
                sx={{
                  backgroundImage: 'url("/Students.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  p: { xs: 4, md: 5 },
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0, 128, 128, 0.15)',
                  transition: 'all 0.3s ease',
                  height: { xs: '300px', md: '350px' },
                  border: '2px solid rgba(0, 128, 128, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  textAlign: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%)',
                    zIndex: 1
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(0, 128, 128, 0.25)',
                    borderColor: '#008080',
                  }
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 700,
                    color: 'white',
                    mb: 2,
                    fontSize: { xs: '1.8rem', md: '2rem' },
                    textShadow: '0 2px 4px rgba(0,0,0,0.7)'
                  }}>
                    For Students
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: 'white', 
                    lineHeight: 1.7,
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    textShadow: '0 1px 3px rgba(0,0,0,0.7)'
                  }}>
                    Build your first chatbot, train an image-recognition model, and solve real-world puzzles—no prior coding required.
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'white', 
                    mt: 2,
                    fontSize: '1rem',
                    textShadow: '0 1px 3px rgba(0,0,0,0.7)',
                    fontWeight: 600
                  }}>
                    Click to learn more →
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Parents Card */}
            <Box sx={{ 
              flex: { xs: '1 1 100%', md: '1 1 45%' },
              maxWidth: '500px'
            }}>
              <Box 
                component="a"
                href="/programs#parents"
                sx={{
                  backgroundImage: 'url("/parents.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  p: { xs: 4, md: 5 },
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(255, 107, 107, 0.15)',
                  transition: 'all 0.3s ease',
                  height: { xs: '300px', md: '350px' },
                  border: '2px solid rgba(255, 107, 107, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  textAlign: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%)',
                    zIndex: 1
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(255, 107, 107, 0.25)',
                    borderColor: '#FF6B6B',
                  }
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 700,
                    color: 'white',
                    mb: 2,
                    fontSize: { xs: '1.8rem', md: '2rem' },
                    textShadow: '0 2px 4px rgba(0,0,0,0.7)'
                  }}>
                    For Parents
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: 'white', 
                    lineHeight: 1.7,
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    textShadow: '0 1px 3px rgba(0,0,0,0.7)'
                  }}>
                    Give your child the edge with essential 21st-century skills, guided by expert instructors and ethical learning.
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'white', 
                    mt: 2,
                    fontSize: '1rem',
                    textShadow: '0 1px 3px rgba(0,0,0,0.7)',
                    fontWeight: 600
                  }}>
                    Click to learn more →
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ 
        py: { xs: '60px', md: '80px' }, 
        backgroundColor: '#F8F9FA',
        position: 'relative'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center'
          }}>
            {stats.map((stat, index) => (
              <Box key={index} sx={{ 
                flex: { 
                  xs: '1 1 calc(50% - 10px)', 
                  sm: '1 1 calc(50% - 10px)',
                  md: '1 1 calc(25% - 15px)' 
                },
                minWidth: '200px'
              }}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: { xs: 3, md: 4 },
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  boxShadow: '0 6px 24px rgba(0, 128, 128, 0.12)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 128, 128, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 36px rgba(0, 128, 128, 0.2)',
                    borderColor: '#008080',
                  }
                }}>
                  <Typography variant="h2" component="div" sx={{ 
                    fontWeight: 800, 
                    background: 'linear-gradient(135deg, #008080, #FF6B6B)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    lineHeight: 1.2
                  }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#073B4C',
                    fontWeight: 600,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.4
                  }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Welcome to the Future of Learning Section (moved here) */}
      <Box sx={{ 
        py: { xs: '60px', md: '80px' }, 
        background: 'url("/future-of-learning.jpg") center center / cover no-repeat',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          zIndex: 1
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ 
            textAlign: 'center', 
            mb: 8,
            animation: `${fadeInUp} 1s ease-out`
          }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ 
              fontWeight: 800,
              color: '#073B4C',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              mb: 4,
              lineHeight: 1.2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              overflow: 'hidden',
              borderRight: '3px solid #073B4C',
              whiteSpace: 'nowrap',
              animation: `${continuousTypewriter} 6s steps(32, end) infinite, ${blink} 0.75s step-end infinite`,
              width: 'fit-content',
              mx: 'auto'
            }}>
              Welcome to the Future of Learning
            </Typography>
            <Typography variant="h5" sx={{ 
              color: '#073B4C', 
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
              lineHeight: 1.6,
              fontWeight: 400,
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              animation: `${fadeInLoop} 8s ease-in-out infinite`,
              animationDelay: '1s'
            }}>
              At Waati AI Consulting, we believe that AI literacy is as essential today as reading, writing, and arithmetic. 
              Drawing inspiration from "Waati," a nod to Saraswati—the goddess of knowledge—we partner with schools and 
              institutes to deliver hands-on AI training for Grades 6–12.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* The Challenge Section (updated) */}
      <Box sx={{ 
        py: { xs: '60px', md: '80px' }, 
        backgroundColor: '#F8F9FA'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ 
              fontWeight: 800,
              color: '#073B4C',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              mb: 4
            }}>
              The Challenge
            </Typography>
            <Typography variant="h5" sx={{ 
              color: '#073B4C', 
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
              lineHeight: 1.6,
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: '800px',
              mx: 'auto',
              mb: 6
            }}>
              By 2030, artificial intelligence will reshape 38 million jobs across India, yet fewer than half of today's graduates meet industry skill standards. Unless schools in the North-East pivot fast, an entire generation risks being locked out of tomorrow's opportunities.
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
              gap: 4, 
              maxWidth: '1200px', 
              mx: 'auto'
            }}>
              {/* Card 1 */}
              <Box
                onClick={() => handleCardClick(0)}
                sx={{
                  background: 'url("/AI-literacy-crisis.jpg") center center / cover no-repeat',
                  backgroundSize: 'cover',
                  backgroundColor: '#073B4C',
                  borderRadius: 24,
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  minHeight: 350,
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 25px 70px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      background: 'rgba(7,59,76,0.7)',
                      backdropFilter: 'blur(4px)',
                      px: 2,
                      py: 0.5,
                      borderRadius: 12,
                      mb: 2,
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                      AI Literacy Crisis
                    </Typography>
                  </Box>
                </Box>
                {/* Slide-up overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: openCard === 0 ? '100%' : '0',
                    background: 'rgba(7, 59, 76, 0.85)',
                    backdropFilter: openCard === 0 ? 'blur(8px)' : 'none',
                    color: 'white',
                    borderRadius: 24,
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    textAlign: 'center',
                    px: 5,
                    py: openCard === 0 ? 7 : 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    transition: 'height 0.5s cubic-bezier(.22,1,.36,1), padding 0.5s cubic-bezier(.22,1,.36,1)',
                    zIndex: 3,
                  }}
                >
                  {openCard === 0 && (
                    <Typography variant="body2" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'white', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                      Students leave school having never trained a model or parsed a dataset—while 38 million roles are being rewritten around AI fluency.
                    </Typography>
                  )}
                </Box>
              </Box>
              {/* Card 2 */}
              <Box
                onClick={() => handleCardClick(1)}
                sx={{
                  background: 'url("/Lost-earning-power.jpeg") center center / cover no-repeat',
                  backgroundSize: 'cover',
                  backgroundColor: '#073B4C',
                  borderRadius: 24,
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  minHeight: 350,
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 25px 70px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      background: 'rgba(7,59,76,0.7)',
                      backdropFilter: 'blur(4px)',
                      px: 2,
                      py: 0.5,
                      borderRadius: 12,
                      mb: 2,
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                      Lost Earning Power
                    </Typography>
                  </Box>
                </Box>
                {/* Slide-up overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: openCard === 1 ? '100%' : '0',
                    background: 'rgba(7, 59, 76, 0.85)',
                    backdropFilter: openCard === 1 ? 'blur(8px)' : 'none',
                    color: 'white',
                    borderRadius: 24,
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    textAlign: 'center',
                    px: 5,
                    py: openCard === 1 ? 7 : 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    transition: 'height 0.5s cubic-bezier(.22,1,.36,1), padding 0.5s cubic-bezier(.22,1,.36,1)',
                    zIndex: 3,
                  }}
                >
                  {openCard === 1 && (
                    <Typography variant="body2" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'white', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                      Jobs that ask for AI skills pay up to 23 % more, but only 45 % of new grads qualify—shutting them out of life-changing income.
                    </Typography>
                  )}
                </Box>
              </Box>
              {/* Card 3 */}
              <Box
                onClick={() => handleCardClick(2)}
                sx={{
                  background: 'url("/Ethics-and-trust-deficiet.jpg") center center / cover no-repeat',
                  backgroundSize: 'cover',
                  backgroundColor: '#073B4C',
                  borderRadius: 24,
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  minHeight: 350,
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 25px 70px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      background: 'rgba(7,59,76,0.7)',
                      backdropFilter: 'blur(4px)',
                      px: 2,
                      py: 0.5,
                      borderRadius: 12,
                      mb: 2,
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                      Ethics & Trust Deficit
                    </Typography>
                  </Box>
                </Box>
                {/* Slide-up overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: openCard === 2 ? '100%' : '0',
                    background: 'rgba(7, 59, 76, 0.85)',
                    backdropFilter: openCard === 2 ? 'blur(8px)' : 'none',
                    color: 'white',
                    borderRadius: 24,
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    textAlign: 'center',
                    px: 5,
                    py: openCard === 2 ? 7 : 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    transition: 'height 0.5s cubic-bezier(.22,1,.36,1), padding 0.5s cubic-bezier(.22,1,.36,1)',
                    zIndex: 3,
                  }}
                >
                  {openCard === 2 && (
                    <Typography variant="body2" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'white', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                      With little exposure to bias, privacy or safety frameworks, future builders risk unleashing harmful systems on the very communities they aim to serve—something 97 % of Indian executives call a top concern.
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Our Solution Section */}
      <Box sx={{ 
        py: { xs: '60px', md: '80px' }, 
        backgroundColor: '#ffffff'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ 
              fontWeight: 800,
              color: '#073B4C',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              mb: 4
            }}>
              Our Solution
            </Typography>
            <Typography variant="h5" sx={{ 
              color: '#073B4C', 
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
              lineHeight: 1.6,
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: '800px',
              mx: 'auto',
              mb: 8
            }}>
              Waati AI brings dynamic, project-based AI learning into your classrooms:
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
            {programs.map((program, index) => {
              // Define subtitle and chips for each program
              let subtitle = '';
              let chips: string[] = [];
              if (index === 0) {
                subtitle = 'Play · Train · Explore';
                chips = ['No-Code', 'Live'];
              } else if (index === 1) {
                subtitle = 'Build Real AI Projects';
                chips = ['Project-Based', 'Live'];
              } else if (index === 2) {
                subtitle = 'Prototype & Showcase';
                chips = ['Capstone', 'Live'];
              }
              return (
                <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, maxWidth: '400px' }}>
                  <Box sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    boxShadow: '0 6px 24px rgba(0, 128, 128, 0.1)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    border: '1px solid rgba(0, 128, 128, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, #008080 ${index * 33}%, #FFD166 ${index * 33 + 33}%, #FF6B6B ${index * 33 + 66}%)`,
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 36px rgba(0, 128, 128, 0.18)',
                      borderColor: '#008080',
                    }
                  }}>
                    <Box sx={{ 
                      width: { xs: 60, md: 70 },
                      height: { xs: 60, md: 70 },
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #008080 0%, #FF6B6B 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      color: 'white'
                    }}>
                      {program.icon}
                    </Box>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ 
                      fontWeight: 700,
                      color: '#073B4C',
                      mb: 1,
                      fontSize: { xs: '1.4rem', md: '1.6rem' }
                    }}>
                      {program.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontStyle: 'italic', color: '#008080', fontWeight: 600 }}>
                      {subtitle}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      {chips.map((chip) => (
                        <Box key={chip} sx={{
                          background: '#F8F9FA',
                          color: '#008080',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          borderRadius: '8px',
                          px: 2,
                          py: 0.5,
                          border: '1px solid #008080',
                          display: 'inline-block',
                        }}>{chip}</Box>
                      ))}
                    </Box>
                    <Typography variant="body1" sx={{ 
                      color: '#073B4C', 
                      mb: 3, 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      opacity: 0.8,
                      flexGrow: 1
                    }}>
                      {program.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {program.highlights.map((highlight, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                          <CheckCircleIcon sx={{ color: '#008080', fontSize: 18, mr: 1.5, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ 
                            color: '#073B4C', 
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            lineHeight: 1.4
                          }}>
                            {highlight}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <AnimatedButton
                      variant="outlined"
                      size="large"
                      href={program.link}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        borderColor: '#008080',
                        color: '#008080',
                        fontWeight: 700,
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        alignSelf: 'flex-start',
                        px: 3,
                        py: 1.2,
                        '&:hover': {
                          borderColor: '#006666',
                          backgroundColor: 'rgba(0,128,128,0.08)',
                          color: '#006666',
                        },
                      }}
                    >
                      Learn More
                    </AnimatedButton>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Meet Our Founders Section (moved here) */}
      <Box sx={{
        py: { xs: '60px', md: '80px' },
        backgroundColor: '#ffffff',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f5f8ff',
              borderRadius: '32px',
              boxShadow: '0 4px 24px rgba(7,59,76,0.08)',
              p: { xs: 2, md: 4 },
              mb: 6,
              gap: { xs: 4, md: 0 },
            }}
          >
            {/* Founders Photo */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 0,
                mb: { xs: 3, md: 0 },
              }}
            >
              <Box
                component="img"
                src="/Sourav-sanjita_homepage.jpeg"
                alt="Sourav and Sanjita, Waati AI Founders"
                sx={{
                  width: { xs: '100%', md: 340 },
                  height: { xs: 220, md: 340 },
                  objectFit: 'cover',
                  borderRadius: '24px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                  background: '#e6eaf0',
                }}
              />
            </Box>
            {/* Quote Block */}
            <Box
              sx={{
                flex: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                p: { xs: 2, md: 4 },
                minWidth: 0,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  component="span"
                  sx={{
                    color: '#2563eb',
                    fontSize: 48,
                    mr: 1,
                  }}
                >
                  "
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '2.2rem' },
                    color: '#073B4C',
                    lineHeight: 1.2,
                  }}
                >
                  Our mission is to empower every student in the North East to thrive in an AI-driven world.
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#2563eb',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  mt: 2,
                }}
              >
                — Sourav & Sanjita, Founders
              </Typography>
            </Box>
          </Box>

          {/* Video Section */}
          <Box sx={{ width: '100%', textAlign: 'center', mb: 6 }}>
            <video
              src="/Why waatiAI sample video.mp4"
              controls
              style={{
                width: '100%',
                maxWidth: 600,
                borderRadius: 16,
                boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                background: '#e6eaf0',
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{ mt: 2, color: '#073B4C', fontWeight: 600 }}
            >
              Hear from Sourav & Sanjita
            </Typography>
          </Box>

          {/* Why North East India Matters Section */}
          <Box
            sx={{
              background: 'linear-gradient(90deg, #008080 0%, #2563eb 100%)',
              color: 'white',
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              textAlign: 'center',
              maxWidth: 900,
              mx: 'auto',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
              Why North East India Matters
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.95 }}>
              The North East is home to vibrant, creative, and ambitious youth. At Waati AI, we believe that talent is everywhere, but opportunity must reach everywhere too. Our mission is to make North East India a model for inclusive, impactful AI learning—empowering the next generation of changemakers, innovators, and responsible tech thinkers.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Northeast India Section */}
      <Box sx={{ 
        py: { xs: '60px', md: '80px' }, 
        backgroundColor: '#ffffff'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ 
              fontWeight: 800,
              color: '#073B4C',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              mb: 4
            }}>
              Why Northeast India Needs AI Education Now
            </Typography>
            <Typography variant="h5" sx={{ 
              color: '#073B4C', 
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
              lineHeight: 1.6,
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: '800px',
              mx: 'auto',
              mb: 6
            }}>
              The Northeastern region of India is home to some of the most vibrant, culturally rich, and rapidly growing communities in the country. 
              Yet, when it comes to emerging technologies like Artificial Intelligence, many schools and institutions across these states remain underserved.
            </Typography>
          </Box>
          
          <Typography variant="h4" sx={{ 
            fontWeight: 700,
            color: '#073B4C',
            mb: 4,
            textAlign: 'center'
          }}>
            Here's Why Waati AI is Prioritizing Northeast India:
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3, 
            maxWidth: '800px', 
            mx: 'auto'
          }}>
            {[
              {
                title: 'Untapped Talent',
                description: 'Students in the Northeast are highly creative, curious, and capable—but lack structured exposure to AI education.'
              },
              {
                title: 'Geographical Barriers',
                description: 'Distance from major tech hubs should not mean distance from opportunity. Our model is designed to work both online and on-ground.'
              },
              {
                title: 'Early Exposure is Key',
                description: 'Schools in Assam, Meghalaya, Nagaland, Mizoram, Manipur, Tripura, Sikkim, and Arunachal Pradesh can spark early interest and equip learners with 21st-century readiness.'
              },
              {
                title: 'Empowering Local Educators',
                description: 'We work closely with teachers to build lasting AI capacity in schools—training them to be the region\'s first generation of AI mentors.'
              },
              {
                title: 'Building Future Leaders from the Hills',
                description: 'By offering access to AI workshops, bootcamps, and tools, we help students in the region rise as changemakers, innovators, and responsible tech thinkers.'
              }
            ].map((item, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 2,
                p: 3,
                borderRadius: '12px',
                backgroundColor: '#F8F9FA',
                border: '1px solid rgba(0, 128, 128, 0.1)'
              }}>
                <Box sx={{ 
                  width: 12, 
                  height: 12, 
                  borderRadius: '50%', 
                  backgroundColor: '#008080',
                  mt: 0.5,
                  flexShrink: 0
                }} />
                <Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 700,
                    color: '#073B4C',
                    mb: 1
                  }}>
                    {item.title}:
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    fontSize: '1rem', 
                    lineHeight: 1.6,
                    color: '#073B4C',
                    opacity: 0.8
                  }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="body1" sx={{ 
              fontSize: '1.2rem', 
              fontWeight: 600,
              color: '#073B4C',
              fontStyle: 'italic'
            }}>
              At Waati AI, we believe that talent is everywhere—but opportunity must reach everywhere too. 
              That's why we're committed to making Northeast India a model for inclusive, impactful AI learning.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #008080 0%, #FF6B6B 100%)',
          color: 'white',
          py: 12,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{
            fontWeight: 800,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 3
          }}>
            Ready to Ignite AI Literacy in Your School?
          </Typography>
          <Typography variant="h5" sx={{ 
            mb: 6, 
            opacity: 0.95,
            fontSize: '1.4rem',
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto'
          }}>
            Join the growing number of institutions transforming their classrooms with Waati AI Consulting.
          </Typography>
          <Typography variant="h6" sx={{ 
            mb: 4,
            fontSize: '1.2rem'
          }}>
            Contact us today for a free 30-minute consultation:
          </Typography>
          <Typography variant="body1" sx={{ 
            mb: 6,
            fontSize: '1.1rem'
          }}>
            ✉️ <a href="mailto:sanjita.sahu@waatiai.com" style={{ color: 'white', textDecoration: 'none' }}>sanjita.sahu@waatiai.com</a> | 📞 <a href="https://wa.me/19053175009" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>+1 905-317-5009</a>
          </Typography>
          <AnimatedButton
            variant="contained"
            size="large"
            href="/contact"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: 'white',
              color: '#008080',
              px: 6,
              py: 3,
              borderRadius: '50px',
              textTransform: 'none',
              fontSize: '1.2rem',
              fontWeight: 700,
              '&:hover': { 
                backgroundColor: '#f7fafc',
                transform: 'translateY(-2px)'
              },
            }}
          >
            Schedule My Consultation
          </AnimatedButton>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;