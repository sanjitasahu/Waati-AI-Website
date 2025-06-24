import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled, keyframes } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
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
    { number: '500+', label: 'Students Trained' },
    { number: '50+', label: 'Companies Consulted' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' },
  ];

  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry experts with hands-on AI and machine learning courses designed for real-world applications.',
      link: '/courses',
      highlights: ['Hands-on Projects', 'Industry Mentors', 'Career Support']
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      title: 'Business Consulting',
      description: 'Transform your business with our AI consulting and implementation services tailored to your industry.',
      link: '/consulting',
      highlights: ['Custom Solutions', 'ROI-Focused', 'Proven Results']
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Growth-Focused',
      description: 'Strategies designed to accelerate your business growth through strategic AI adoption and optimization.',
      link: '/growth',
      highlights: ['Scalable Solutions', 'Performance Tracking', 'Ongoing Support']
    },
  ];

  const courses = [
    {
      title: 'AI Fundamentals',
      description: 'Master the basics of artificial intelligence and machine learning.',
      price: '$299',
      duration: '8 weeks',
    },
    {
      title: 'Business AI Strategy',
      description: 'Learn how to implement AI solutions in your business operations.',
      price: '$499',
      duration: '12 weeks',
    },
    {
      title: 'Advanced ML Techniques',
      description: 'Deep dive into advanced machine learning algorithms and applications.',
      price: '$699',
      duration: '16 weeks',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Waati AI transformed our business operations. Their consulting services are exceptional.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist',
      content: 'The AI courses are comprehensive and practical. Highly recommend for anyone starting in AI.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      content: 'Outstanding training and support. The team really knows their stuff.',
      rating: 5,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: '#fff',
          color: '#2d3748',
          py: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
            opacity: 0.1,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
            opacity: 0.1,
            zIndex: 1,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6 }}>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' } }}>
              <Box sx={{ animation: `${fadeInUp} 1s ease-out` }}>
                <Typography variant="h1" component="h1" gutterBottom sx={{ 
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  mb: 3,
                  color: '#2d3748',
                  lineHeight: 1.2
                }}>
                  Transform Your Business with{' '}
                  <Box component="span" sx={{ color: '#667eea' }}>
                    AI
                  </Box>
                </Typography>
                <Typography variant="h5" sx={{ 
                  mb: 4, 
                  color: '#718096',
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  lineHeight: 1.6,
                  fontWeight: 400
                }}>
                  Expert-led courses and consulting services to accelerate your AI journey and drive measurable business growth
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 6 }}>
                  <AnimatedButton
                    variant="contained"
                    size="large"
                    href="/courses"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: '#667eea',
                      color: 'white',
                      px: 4,
                      py: 2,
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': { 
                        backgroundColor: '#5a67d8',
                        transform: 'translateY(-2px)'
                      },
                    }}
                  >
                    Explore Courses
                  </AnimatedButton>
                  <AnimatedButton
                    variant="outlined"
                    size="large"
                    href="/consulting"
                    sx={{
                      borderColor: '#667eea',
                      color: '#667eea',
                      px: 4,
                      py: 2,
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': { 
                        borderColor: '#5a67d8',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        transform: 'translateY(-2px)'
                      },
                    }}
                  >
                    Get Consulting
                  </AnimatedButton>
                </Box>
              </Box>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' } }}>
              <Box sx={{ 
                textAlign: 'center',
                position: 'relative',
                animation: `${float} 6s ease-in-out infinite`
              }}>
                <img
                  src="/WAATI AI consulting logo.png"
                  alt="Waati AI"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: '#f7fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {stats.map((stat, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 45%', md: '1 1 20%' }, minWidth: '200px' }}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 3,
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  }
                }}>
                  <Typography variant="h2" component="div" sx={{ 
                    fontWeight: 800, 
                    color: '#667eea',
                    mb: 1,
                    fontSize: { xs: '2rem', md: '2.5rem' }
                  }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#718096',
                    fontWeight: 500,
                    fontSize: '1.1rem'
                  }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ 
            fontWeight: 800,
            color: '#2d3748',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 3
          }}>
            Why Choose Waati AI?
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#718096', 
            maxWidth: '700px', 
            mx: 'auto',
            fontSize: '1.3rem',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            We provide comprehensive AI solutions tailored to your needs with proven results and industry expertise
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, maxWidth: '400px' }}>
              <Box sx={{
                p: 4,
                borderRadius: '24px',
                backgroundColor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                height: '100%',
                border: '1px solid rgba(102, 126, 234, 0.1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                  borderColor: '#667eea'
                }
              }}>
                <Box sx={{ 
                  width: 80,
                  height: 80,
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  color: 'white'
                }}>
                  {feature.icon}
                </Box>
                <Typography variant="h4" component="h3" gutterBottom sx={{ 
                  fontWeight: 700,
                  color: '#2d3748',
                  mb: 2
                }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#718096', 
                  mb: 3, 
                  lineHeight: 1.7,
                  fontSize: '1.1rem'
                }}>
                  {feature.description}
                </Typography>
                <Box sx={{ mb: 4 }}>
                  {feature.highlights.map((highlight, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CheckCircleIcon sx={{ color: '#4ecdc4', fontSize: 20, mr: 2 }} />
                      <Typography variant="body2" sx={{ color: '#4a5568', fontWeight: 500 }}>
                        {highlight}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <StyledLink to={feature.link} sx={{ 
                  color: '#667eea', 
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  '&:hover': {
                    color: '#5a67d8'
                  }
                }}>
                  Learn more <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
                </StyledLink>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Courses Section */}
      <Box sx={{ backgroundColor: '#f7fafc', py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <img
              src="/WAATI AI learning logo.png"
              alt="Waati AI Learning"
              style={{
                height: '100px',
                width: 'auto',
                marginBottom: '32px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
              }}
            />
            <Typography variant="h2" component="h2" gutterBottom sx={{ 
              fontWeight: 800,
              color: '#2d3748',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 3
            }}>
              Featured Courses
            </Typography>
            <Typography variant="h6" sx={{ 
              color: '#718096', 
              maxWidth: '700px', 
              mx: 'auto',
              fontSize: '1.3rem',
              lineHeight: 1.6,
              fontWeight: 400
            }}>
              Start your AI journey with our expert-designed courses that combine theory with hands-on practice
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
            {courses.map((course, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, maxWidth: '400px' }}>
                <Box sx={{
                  borderRadius: '24px',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(102, 126, 234, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    borderColor: '#667eea'
                  }
                }}>
                  <Box sx={{ 
                    background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
                    color: 'white',
                    p: 4,
                    textAlign: 'center',
                    position: 'relative'
                  }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                      {course.price}
                    </Typography>
                    <Box sx={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      px: 3,
                      py: 1,
                      borderRadius: '50px',
                      display: 'inline-block',
                      border: '1px solid rgba(255,255,255,0.3)',
                      fontWeight: 600
                    }}>
                      {course.duration} course
                    </Box>
                  </Box>
                  <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ 
                      fontWeight: 700,
                      color: '#2d3748',
                      mb: 2
                    }}>
                      {course.title}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      color: '#718096', 
                      mb: 4, 
                      lineHeight: 1.7,
                      fontSize: '1.1rem',
                      flexGrow: 1
                    }}>
                      {course.description}
                    </Typography>
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CheckCircleIcon sx={{ color: '#4ecdc4', fontSize: 20, mr: 2 }} />
                        <Typography variant="body2" sx={{ color: '#4a5568', fontWeight: 500 }}>
                          Certificate upon completion
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CheckCircleIcon sx={{ color: '#4ecdc4', fontSize: 20, mr: 2 }} />
                        <Typography variant="body2" sx={{ color: '#4a5568', fontWeight: 500 }}>
                          Lifetime access to materials
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: '#4ecdc4', fontSize: 20, mr: 2 }} />
                        <Typography variant="body2" sx={{ color: '#4a5568', fontWeight: 500 }}>
                          Expert mentorship included
                        </Typography>
                      </Box>
                    </Box>
                    <AnimatedButton 
                      variant="contained" 
                      href="/courses"
                      fullWidth
                      size="large"
                      sx={{
                        backgroundColor: '#667eea',
                        color: 'white',
                        py: 2,
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        '&:hover': { 
                          backgroundColor: '#5a67d8'
                        },
                      }}
                    >
                      Enroll Now
                    </AnimatedButton>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ 
            fontWeight: 800,
            color: '#2d3748',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 3
          }}>
            What Our Clients Say
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#718096', 
            maxWidth: '700px', 
            mx: 'auto',
            fontSize: '1.3rem',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Success stories from businesses and individuals who've transformed their operations with AI
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, maxWidth: '400px' }}>
              <Box sx={{
                p: 4,
                borderRadius: '24px',
                backgroundColor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                height: '100%',
                border: '1px solid rgba(102, 126, 234, 0.1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                  borderColor: '#667eea'
                }
              }}>
                <Box sx={{ display: 'flex', mb: 3, justifyContent: 'center' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: '#FFB020', fontSize: 28 }} />
                  ))}
                </Box>
                <Typography variant="body1" sx={{ 
                  mb: 4, 
                  fontStyle: 'italic',
                  fontSize: '1.2rem',
                  lineHeight: 1.7,
                  textAlign: 'center',
                  color: '#4a5568'
                }}>
                  "{testimonial.content}"
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  pt: 3,
                  borderTop: '1px solid #e2e8f0'
                }}>
                  <Avatar sx={{ 
                    mr: 3, 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    width: 60,
                    height: 60,
                    fontSize: '1.4rem',
                    fontWeight: 'bold'
                  }}>
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 700, 
                      color: '#2d3748',
                      fontSize: '1.1rem'
                    }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#718096',
                      fontWeight: 500
                    }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 12,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{
            fontWeight: 800,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 3
          }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h5" sx={{ 
            mb: 6, 
            opacity: 0.95,
            fontSize: '1.4rem',
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto'
          }}>
            Join thousands of professionals who have transformed their careers and businesses with AI
          </Typography>
          <AnimatedButton
            variant="contained"
            size="large"
            href="/contact"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: 'white',
              color: '#667eea',
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
            Start Your Journey
          </AnimatedButton>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 