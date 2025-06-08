import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';

const Home: React.FC = () => {
  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry experts with hands-on AI and machine learning courses.',
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      title: 'Business Consulting',
      description: 'Transform your business with our AI consulting and implementation services.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Growth-Focused',
      description: 'Strategies designed to accelerate your business growth through AI adoption.',
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
          background: 'linear-gradient(90deg, #cdffd8 0%, #94b9ff 100%)',
          color: '#1A202C',
          py: 12,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Logo */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.1,
            zIndex: 1,
          }}
        >
          <img
            src="/WAATI AI consulting logo.png"
            alt=""
            style={{
              width: '400px',
              height: 'auto',
              maxWidth: '60vw',
            }}
          />
        </Box>
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Transform Your Business with AI
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Expert-led courses and consulting services to accelerate your AI journey
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/courses"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': { backgroundColor: 'primary.dark' },
              }}
            >
              Explore Courses
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/consulting"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': { borderColor: 'primary.dark', backgroundColor: 'rgba(102,102,102,0.1)' },
              }}
            >
              Get Consulting
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Why Choose Waati AI?
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
          We provide comprehensive AI solutions tailored to your needs
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {features.map((feature, index) => (
            <Card key={index} sx={{ maxWidth: 300, textAlign: 'center', p: 2 }}>
              <CardContent>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Courses Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <img
              src="/WAATI AI learning logo.png"
              alt="Waati AI Learning"
              style={{
                height: '60px',
                width: 'auto',
                marginBottom: '16px',
              }}
            />
            <Typography variant="h3" component="h2" gutterBottom>
              Featured Courses
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary' }}>
              Start your AI journey with our expert-designed courses
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {courses.map((course, index) => (
              <Card key={index} sx={{ maxWidth: 300 }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {course.description}
                  </Typography>
                  <Typography variant="h6" color="primary.main" sx={{ mb: 1 }}>
                    {course.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {course.duration}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" component={Link} to="/courses">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          What Our Clients Say
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
          Success stories from businesses and individuals we've helped
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} sx={{ maxWidth: 350, p: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
                  ))}
                </Box>
                <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                  "{testimonial.content}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of professionals who have transformed their careers with AI
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/register"
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': { backgroundColor: 'grey.100' },
            }}
          >
            Start Your Journey
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 