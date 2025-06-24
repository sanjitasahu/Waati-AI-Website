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
    { number: '2 Hours', label: 'Weekly AI Learning' },
    { number: '6-12', label: 'Grade Levels' },
    { number: '30%', label: 'Faster Learning' },
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
          background: 'linear-gradient(90deg, #FF6B6B 0%, #FFD166 50%, #008080 100%)',
          color: '#073B4C',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'calc(100vh - 70px)', // Subtract navbar height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(7, 59, 76, 0.1)',
            zIndex: 1,
          }}
        />
        
        <Container 
          maxWidth="md" 
          sx={{ 
            position: 'relative', 
            zIndex: 2,
            pt: { xs: '10rem', md: '12rem' },
            pb: { xs: '5rem', md: '8rem' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            minHeight: { xs: '50rem', md: 'calc(100vh - 70px)' }
          }}
        >
          <Box sx={{ animation: `${fadeInUp} 1s ease-out`, maxWidth: '900px' }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ 
              fontWeight: 900,
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '5.5rem' },
              mb: 4,
              color: '#073B4C',
              lineHeight: { xs: 1.1, md: 1.05 },
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              textAlign: 'center'
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
              <br />
              IN JUST 2 HOURS A WEEK!
            </Typography>
            
            <Typography variant="h4" sx={{ 
              mb: 6, 
              color: '#073B4C',
              fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
              lineHeight: 1.5,
              fontWeight: 500,
              opacity: 0.9,
              maxWidth: '700px',
              mx: 'auto'
            }}>
              Hands-on, fun, and future-focused AI workshops for Grades 6–12 that spark curiosity, build confidence, and turn every student into a young innovator.
            </Typography>
            
            {/* Student & Parent Benefits */}
            <Box sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                justifyContent: 'center',
                mb: 3,
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                gap: 2
              }}>
                <Typography sx={{ fontSize: '2rem', mr: 1 }}>👩‍💻</Typography>
                <Typography variant="h6" sx={{ 
                  color: '#073B4C', 
                  fontWeight: 500,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  <strong>For Students:</strong> Build your first chatbot, train an image-recognition model, and solve real-world puzzles—no prior coding required.
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                justifyContent: 'center',
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                gap: 2
              }}>
                <Typography sx={{ fontSize: '2rem', mr: 1 }}>🎓</Typography>
                <Typography variant="h6" sx={{ 
                  color: '#073B4C', 
                  fontWeight: 500,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  <strong>For Parents:</strong> Give your child the edge with essential 21st-century skills, guided by expert instructors and ethical learning.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
              <AnimatedButton
                variant="contained"
                size="large"
                href="/programs"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: '#073B4C',
                  color: 'white',
                  px: 6,
                  py: 3,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  boxShadow: '0 8px 32px rgba(7, 59, 76, 0.3)',
                  minWidth: '200px',
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
                  borderWidth: '3px',
                  color: '#073B4C',
                  px: 6,
                  py: 3,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  minWidth: '200px',
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

            {/* Logo at bottom */}
            <Box sx={{ 
              mt: 8,
              animation: `${float} 6s ease-in-out infinite`
            }}>
              <img
                src="/WAATI AI consulting logo.png"
                alt="Waati AI"
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto',
                  filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))',
                  opacity: 0.9
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 10, backgroundColor: '#F8F9FA' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {stats.map((stat, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 45%', md: '1 1 20%' }, minWidth: '200px' }}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 4,
                  borderRadius: '24px',
                  backgroundColor: 'white',
                  boxShadow: '0 8px 32px rgba(0, 128, 128, 0.15)',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 128, 128, 0.25)',
                    borderColor: '#008080',
                  }
                }}>
                  <Typography variant="h2" component="div" sx={{ 
                    fontWeight: 900, 
                    background: 'linear-gradient(45deg, #008080, #FF6B6B)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                    fontSize: { xs: '2.2rem', md: '2.8rem' }
                  }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#073B4C',
                    fontWeight: 600,
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

      {/* Welcome Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ 
            fontWeight: 800,
            color: '#073B4C',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 3
          }}>
            Welcome to the Future of Learning
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#073B4C', 
            maxWidth: '800px', 
            mx: 'auto',
            fontSize: '1.3rem',
            lineHeight: 1.7,
            fontWeight: 400,
            opacity: 0.8
          }}>
            At Waati AI Consulting, we believe that AI literacy is as essential today as reading, writing, and arithmetic. 
            Drawing inspiration from "Waati," a nod to Saraswati—the goddess of knowledge—we partner with schools and 
            institutes to deliver hands-on AI training for Grades 6–12.
          </Typography>
        </Box>
      </Container>

      {/* Programs Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ 
            fontWeight: 800,
            color: '#073B4C',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 3
          }}>
            Our AI Education Programs
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#073B4C', 
            maxWidth: '700px', 
            mx: 'auto',
            fontSize: '1.3rem',
            lineHeight: 1.6,
            fontWeight: 400,
            opacity: 0.8
          }}>
            Dynamic, project-based AI learning designed for every grade level
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
          {programs.map((program, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, maxWidth: '400px' }}>
              <Box sx={{
                p: 4,
                borderRadius: '24px',
                backgroundColor: 'white',
                boxShadow: '0 8px 32px rgba(0, 128, 128, 0.12)',
                transition: 'all 0.3s ease',
                height: '100%',
                border: '2px solid transparent',
                position: 'relative',
                overflow: 'hidden',
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
                  transform: 'translateY(-12px)',
                  boxShadow: '0 16px 48px rgba(0, 128, 128, 0.2)',
                  borderColor: '#008080',
                }
              }}>
                <Box sx={{ 
                  width: 80,
                  height: 80,
                  borderRadius: '20px',
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
                  mb: 1
                }}>
                  {program.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ 
                  color: '#008080',
                  fontWeight: 600,
                  mb: 2,
                  fontSize: '1.1rem'
                }}>
                  {program.subtitle}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#073B4C', 
                  mb: 3, 
                  lineHeight: 1.7,
                  fontSize: '1rem',
                  opacity: 0.8
                }}>
                  {program.description}
                </Typography>
                <Box sx={{ mb: 4 }}>
                  {program.highlights.map((highlight, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CheckCircleIcon sx={{ color: '#008080', fontSize: 20, mr: 2 }} />
                      <Typography variant="body2" sx={{ color: '#073B4C', fontWeight: 500 }}>
                        {highlight}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <StyledLink to={program.link} sx={{ 
                  color: '#008080', 
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  '&:hover': {
                    color: '#006666'
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