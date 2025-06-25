import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled, keyframes } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';

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

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const StyledLink = styled(RouterLink)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  transition: 'all 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  '&:hover': {
    borderColor: 'currentColor',
    transform: 'translateX(4px)'
  }
}));

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

  const testimonials = [
    {
      name: 'Principal, Sunrise International Academy',
      content: 'In just three months, our Grade 9 class went from zero coding experience to deploying a live chatbot for our school website.',
      rating: 5,
    },
    {
      name: 'Head of Computer Science, Red Oak High',
      content: 'Waati AI\'s model doubled our students\' engagement in STEM, and two teams advanced to national science fairs.',
      rating: 5,
    },
  ];

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
                fontWeight: 900,
                fontSize: { xs: '3rem', sm: '4rem', md: '4.5rem', lg: '5rem' },
                mb: 3,
                color: '#073B4C',
                lineHeight: 1.1,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                UNLOCK YOUR CHILD'S FUTURE WITH{' '}
                <Box component="span" sx={{ 
                  background: 'linear-gradient(45deg, #008080, #073B4C)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900
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
                  href="/contact"
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
              <Box sx={{
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
              }}>
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
                </Box>
              </Box>
            </Box>

            {/* Parents Card */}
            <Box sx={{ 
              flex: { xs: '1 1 100%', md: '1 1 45%' },
              maxWidth: '500px'
            }}>
              <Box sx={{
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
              }}>
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

      {/* Welcome Section */}
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
              mb: 4,
              lineHeight: 1.2
            }}>
              Welcome to the Future of Learning
            </Typography>
            <Typography variant="h5" sx={{ 
              color: '#073B4C', 
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
              lineHeight: 1.6,
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: '800px',
              mx: 'auto'
            }}>
              At Waati AI Consulting, we believe that AI literacy is as essential today as reading, writing, and arithmetic. 
              Drawing inspiration from "Waati," a nod to Saraswati—the goddess of knowledge—we partner with schools and 
              institutes to deliver hands-on AI training for Grades 6–12.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Challenge Section */}
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
              Traditional curricula move too slowly to keep pace with a rapidly evolving, technology-driven world. Students are often:
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3, 
              maxWidth: '600px', 
              mx: 'auto',
              textAlign: 'left'
            }}>
              {[
                'Unprepared for the ethical and technical complexities of AI',
                'Demotivated by one-size-fits-all lessons that feel disconnected from real life',
                'Unequipped to solve tomorrow\'s problems with tomorrow\'s tools'
              ].map((challenge, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box sx={{ 
                    width: 8, 
                    height: 8, 
                    borderRadius: '50%', 
                    backgroundColor: '#FF6B6B',
                    mt: 1.5,
                    flexShrink: 0
                  }} />
                  <Typography variant="body1" sx={{ 
                    fontSize: '1.1rem', 
                    lineHeight: 1.6,
                    color: '#073B4C'
                  }}>
                    {challenge}
                  </Typography>
                </Box>
              ))}
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
            {programs.map((program, index) => (
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
                  <Typography variant="subtitle1" sx={{ 
                    color: '#008080',
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}>
                    {program.subtitle}
                  </Typography>
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
                  <StyledLink to={program.link} sx={{ 
                    color: '#008080', 
                    fontWeight: 600,
                    fontSize: '1rem',
                    alignSelf: 'flex-start',
                    '&:hover': {
                      color: '#006666'
                    }
                  }}>
                    Learn more <ArrowForwardIcon sx={{ fontSize: 16, ml: 0.5 }} />
                  </StyledLink>
                </Box>
              </Box>
            ))}
          </Box>
          
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="body1" sx={{ 
              fontSize: '1.1rem', 
              fontWeight: 600, 
              color: '#073B4C',
              mb: 2
            }}>
              4. Teacher Academy: Equip your faculty with turnkey lesson plans, in-class coaching, and ongoing support so AI stays in the syllabus year after year.
            </Typography>
            <AnimatedButton
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: '#008080',
                color: 'white',
                px: 4,
                py: 2,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': { 
                  backgroundColor: '#006666',
                  transform: 'translateY(-2px)'
                },
              }}
            >
              Download Full Curriculum Guide (PDF)
            </AnimatedButton>
          </Box>
        </Container>
      </Box>

      {/* Success Metrics Section */}
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
              Success Metrics
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' }, maxWidth: '600px' }}>
                <Box sx={{
                  p: 4,
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  border: '1px solid rgba(0, 128, 128, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    borderColor: '#008080'
                  }
                }}>
                  <Box sx={{ display: 'flex', mb: 3, justifyContent: 'center' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: '#FFD166', fontSize: 28 }} />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ 
                    mb: 4, 
                    fontStyle: 'italic',
                    fontSize: '1.2rem',
                    lineHeight: 1.7,
                    textAlign: 'center',
                    color: '#073B4C'
                  }}>
                    "{testimonial.content}"
                  </Typography>
                  <Typography variant="subtitle1" sx={{ 
                    fontWeight: 700, 
                    color: '#008080',
                    fontSize: '1.1rem',
                    textAlign: 'center'
                  }}>
                    — {testimonial.name}
                  </Typography>
                </Box>
              </Box>
            ))}
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
            ✉️ info@waatiaiconsulting.com | 📞 +91 XXX XXX XXXX
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