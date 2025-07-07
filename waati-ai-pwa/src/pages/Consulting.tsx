import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled, keyframes } from '@mui/material/styles';
import {
  Psychology,
  IntegrationInstructions,
  Analytics,
  School,
  Support,
  TrendingUp,
  Business,
  Code,
  CloudQueue,
  CheckCircle,
  ArrowForward,
  AutoAwesome,
  Phone,
  Email
} from '@mui/icons-material';

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

const Consulting: React.FC = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  const services = [
    {
      icon: <Psychology sx={{ fontSize: 40 }} />,
      title: 'AI Platform Assessment',
      subtitle: 'Strategic Evaluation',
      description: 'Evaluate your current tech stack and recommend the best AI platforms for your specific use cases.',
      highlights: ['Technology Audit', 'Platform Comparison', 'ROI Analysis', 'Implementation Roadmap']
    },
    {
      icon: <IntegrationInstructions sx={{ fontSize: 40 }} />,
      title: 'Automation Strategy & Implementation',
      subtitle: 'Workflow Optimization',
      description: 'Design and implement efficient workflows using n8n, Copilot Studio, and other automation tools.',
      highlights: ['Workflow Design', 'n8n Development', 'Copilot Integration', 'API Connections']
    },
    {
      icon: <Analytics sx={{ fontSize: 40 }} />,
      title: 'AI Integration Consulting',
      subtitle: 'Seamless Connections',
      description: 'Seamlessly connect your existing systems with AI platforms and automation tools.',
      highlights: ['System Integration', 'Data Pipeline Design', 'Security Review', 'Performance Optimization']
    },
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: 'Team Training & Enablement',
      subtitle: 'Skill Development',
      description: 'Empower your team with the skills to use AI platforms and automation tools effectively.',
      highlights: ['Custom Training', 'Hands-on Workshops', 'Best Practices', 'Ongoing Support']
    }
  ];

  const platforms = [
    { name: 'n8n', category: 'Workflow Automation', description: 'Open-source workflow automation platform' },
    { name: 'Copilot Studio', category: 'AI Development', description: 'Microsoft\'s AI development platform' },
    { name: 'Zapier', category: 'Integration', description: 'Popular automation and integration platform' },
    { name: 'Make.com', category: 'Workflow Automation', description: 'Visual workflow automation platform' },
    { name: 'OpenAI API', category: 'AI Services', description: 'Advanced AI models and APIs' },
    { name: 'Anthropic Claude', category: 'AI Services', description: 'Enterprise AI assistant platform' }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems, goals, and challenges to understand your needs.',
      duration: '1 week'
    },
    {
      step: 2,
      title: 'Platform Selection',
      description: 'Based on your requirements, we recommend the optimal AI platforms and automation tools.',
      duration: '1 week'
    },
    {
      step: 3,
      title: 'Implementation Planning',
      description: 'We create a detailed roadmap for implementing your AI and automation solutions.',
      duration: '1 week'
    },
    {
      step: 4,
      title: 'Execution & Support',
      description: 'We guide you through implementation and provide ongoing support for optimization.',
      duration: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow Solutions',
      content: 'Waati AI helped us choose the right automation platform and implemented n8n workflows that saved us 40 hours per week.',
      avatar: 'SC'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Operations Director, InnovateCorp',
      content: 'Their platform assessment was thorough and their Copilot Studio implementation transformed our customer service.',
      avatar: 'RK'
    }
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
                fontFamily: '"Chalkboard", "Chalkduster", "Comic Neue", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                mb: 3,
                color: '#073B4C',
                lineHeight: 1.1,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                Transform Your Business with{' '}
                <Box component="span" sx={{ 
                  background: 'linear-gradient(45deg, #008080, #073B4C)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}>
                  AI Consulting
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
                Expert guidance on AI platform selection and automation implementation. From choosing the right AI platforms to building powerful automations with n8n, Copilot Studio, and more.
              </Typography>

              {/* Contact Information */}
              <Box sx={{ 
                mb: 4,
                p: 3,
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(0, 128, 128, 0.2)',
                maxWidth: '500px'
              }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700,
                  color: '#073B4C',
                  mb: 2
                }}>
                  Get Your Free 30-Minute Consultation
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <Email sx={{ color: '#008080', fontSize: 20 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      <a href="mailto:sanjita.sahu@waatiai.com" style={{ color: '#073B4C', textDecoration: 'none' }}>
                        sanjita.sahu@waatiai.com
                      </a>
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <Phone sx={{ color: '#008080', fontSize: 20 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      <a href="https://wa.me/19053175009" target="_blank" rel="noopener noreferrer" style={{ color: '#073B4C', textDecoration: 'none' }}>
                        +1 905-317-5009
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </Box>

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
                  href="/contact"
                  endIcon={<ArrowForward />}
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
                  Book Discovery Call
                </AnimatedButton>
                <AnimatedButton
                  variant="outlined"
                  size="large"
                  href="#services"
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
                  View Services
                </AnimatedButton>
              </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ 
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
              Our Consulting Services
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
              We help businesses make informed decisions and implement solutions that drive real results.
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
            {services.map((service, index) => (
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
                    background: `linear-gradient(90deg, #008080 ${index * 25}%, #FFD166 ${index * 25 + 25}%, #FF6B6B ${index * 25 + 50}%)`,
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
                    {service.icon}
                  </Box>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ 
                    fontWeight: 700,
                    color: '#073B4C',
                    mb: 1,
                    fontSize: { xs: '1.4rem', md: '1.6rem' }
                  }}>
                    {service.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ 
                    color: '#008080',
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}>
                    {service.subtitle}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#073B4C', 
                    mb: 3, 
                    lineHeight: 1.6,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    opacity: 0.8,
                    flexGrow: 1
                  }}>
                    {service.description}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {service.highlights.map((highlight, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <CheckCircle sx={{ color: '#008080', fontSize: 18, mr: 1.5, flexShrink: 0 }} />
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
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Platforms Section */}
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
              Platforms We Work With
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
              We have expertise in leading AI and automation platforms to help you build the right solution.
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, 
            gap: 4, 
            maxWidth: '1200px', 
            mx: 'auto'
          }}>
            {platforms.map((platform, index) => (
              <Box key={index} sx={{ 
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
                <Typography variant="h3" component="div" sx={{ 
                  fontWeight: 800, 
                  background: 'linear-gradient(135deg, #008080, #FF6B6B)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                  lineHeight: 1.2
                }}>
                  {platform.name}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#008080',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.4,
                  mb: 1
                }}>
                  {platform.category}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#073B4C',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.4,
                  opacity: 0.8
                }}>
                  {platform.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Process Section */}
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
              Our Process
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
              A structured approach to ensure successful AI implementation and automation.
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 4, 
            maxWidth: '1000px', 
            mx: 'auto'
          }}>
            {processSteps.map((step, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 4,
                p: 4,
                borderRadius: '20px',
                backgroundColor: '#F8F9FA',
                border: '1px solid rgba(0, 128, 128, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateX(8px)',
                  boxShadow: '0 8px 24px rgba(0, 128, 128, 0.15)',
                  borderColor: '#008080',
                }
              }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #008080, #FF6B6B)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  {step.step}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 700,
                    color: '#073B4C',
                    mb: 1,
                    fontSize: { xs: '1.3rem', md: '1.5rem' }
                  }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    fontSize: '1rem', 
                    lineHeight: 1.6,
                    color: '#073B4C',
                    opacity: 0.8,
                    mb: 1
                  }}>
                    {step.description}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#008080',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Duration: {step.duration}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
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
              What Our Clients Say
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
              Real results from real businesses we've helped transform with AI and automation.
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            justifyContent: 'center'
          }}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ 
                flex: { xs: '1 1 100%', md: '1 1 45%' }, 
                maxWidth: '500px'
              }}>
                <Box sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  boxShadow: '0 6px 24px rgba(0, 128, 128, 0.12)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  border: '1px solid rgba(0, 128, 128, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 36px rgba(0, 128, 128, 0.2)',
                    borderColor: '#008080',
                  }
                }}>
                  <Typography variant="body1" sx={{ 
                    color: '#073B4C', 
                    mb: 4, 
                    lineHeight: 1.6,
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    opacity: 0.9
                  }}>
                    "{testimonial.content}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 50, 
                      height: 50, 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #008080, #FF6B6B)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.2rem'
                    }}>
                      {testimonial.avatar}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ 
                        fontWeight: 700,
                        color: '#073B4C',
                        fontSize: '1.1rem'
                      }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: '#008080',
                        fontWeight: 600,
                        fontSize: '0.9rem'
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
      </Box>

      {/* Why Choose Waati AI Section */}
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
              Why Choose Waati AI
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
              We bring deep expertise, proven methodologies, and a commitment to your success.
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
            gap: 4, 
            maxWidth: '1000px', 
            mx: 'auto'
          }}>
            {[
              {
                title: 'Expert Team',
                description: 'Our consultants have years of experience in AI implementation and automation across various industries.'
              },
              {
                title: 'Proven Methodology',
                description: 'We follow a structured approach that ensures successful implementation and measurable results.'
              },
              {
                title: 'Ongoing Support',
                description: 'We don\'t just implement solutions—we provide continuous support and optimization.'
              },
              {
                title: 'ROI Focused',
                description: 'Every recommendation and implementation is designed to deliver measurable business value.'
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
        </Container>
      </Box>

      {/* Contact Section */}
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
              Ready to Get Started?
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
              Let's discuss how AI and automation can transform your business. Contact us today for a free consultation.
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}>
            <Box sx={{ 
              textAlign: 'center',
              p: 4,
              borderRadius: '20px',
              backgroundColor: 'white',
              boxShadow: '0 6px 24px rgba(0, 128, 128, 0.12)',
              border: '1px solid rgba(0, 128, 128, 0.1)',
              flex: 1
            }}>
              <Email sx={{ fontSize: 40, color: '#008080', mb: 2 }} />
              <Typography variant="h6" sx={{ 
                fontWeight: 700,
                color: '#073B4C',
                mb: 1
              }}>
                Email Us
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#073B4C',
                mb: 2
              }}>
                <a href="mailto:sanjita.sahu@waatiai.com" style={{ color: '#008080', textDecoration: 'none', fontWeight: 600 }}>
                  sanjita.sahu@waatiai.com
                </a>
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#073B4C',
                opacity: 0.7
              }}>
                We'll respond within 24 hours
              </Typography>
            </Box>
            
            <Box sx={{ 
              textAlign: 'center',
              p: 4,
              borderRadius: '20px',
              backgroundColor: 'white',
              boxShadow: '0 6px 24px rgba(0, 128, 128, 0.12)',
              border: '1px solid rgba(0, 128, 128, 0.1)',
              flex: 1
            }}>
              <Phone sx={{ fontSize: 40, color: '#008080', mb: 2 }} />
              <Typography variant="h6" sx={{ 
                fontWeight: 700,
                color: '#073B4C',
                mb: 1
              }}>
                Call Us
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#073B4C',
                mb: 2
              }}>
                <a href="https://wa.me/19053175009" target="_blank" rel="noopener noreferrer" style={{ color: '#008080', textDecoration: 'none', fontWeight: 600 }}>
                  +1 905-317-5009
                </a>
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#073B4C',
                opacity: 0.7
              }}>
                Available Mon-Fri, 9 AM - 6 PM EST
              </Typography>
            </Box>
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
            Ready to Transform Your Business?
          </Typography>
          <Typography variant="h5" sx={{ 
            mb: 6, 
            opacity: 0.95,
            fontSize: '1.4rem',
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto'
          }}>
            Join the growing number of businesses transforming their operations with Waati AI Consulting.
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
            endIcon={<ArrowForward />}
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

export default Consulting; 