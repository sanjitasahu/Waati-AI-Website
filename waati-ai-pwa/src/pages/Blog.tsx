import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.15)',
  }
}));

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Bias in AI Amplifies Our Own Biases',
      excerpt: 'Understanding how AI systems reflect and amplify human biases, and the ethical complexities students need to navigate in an AI-driven world.',
      image: '/Ethical.jpg',
      externalUrl: 'https://www.ucl.ac.uk/news/2024/dec/bias-ai-amplifies-our-own-biases#:~:text=Bias%20in%20AI%20amplifies%20our%20own%20biases,-Bias%20in%20AI',
      category: 'Ethics & AI',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Disconnect in Modern Education',
      excerpt: 'Why traditional one-size-fits-all teaching methods are failing to engage students and prepare them for a technology-driven future.',
      image: '/disconnected-learning.png',
      externalUrl: 'https://eimpartnerships.com/articles/gen-z-learning-style-how-to-adapt-teaching-methods-for-digital-natives',
      category: 'Educational Reform',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Bridging the Future Skills Gap',
      excerpt: 'How AI literacy and 21st-century skills are becoming essential for tomorrow\'s workforce, and what educators can do today.',
      image: '/future-skill-gap.png',
      externalUrl: 'https://builtin.com/artificial-intelligence/artificial-intelligence-future#:~:text=There\'s%20virtually%20no%20major%20industry,as%20a%20result%20of%20AI.',
      category: 'Future Skills',
      readTime: '6 min read'
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#F8F9FA', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" component="h1" sx={{
            fontWeight: 900,
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
            mb: 3,
            color: '#073B4C',
            lineHeight: 1.1
          }}>
            AI Education Blog
          </Typography>
          <Typography variant="h5" sx={{
            color: '#073B4C',
            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
            lineHeight: 1.6,
            fontWeight: 400,
            opacity: 0.8,
            maxWidth: '700px',
            mx: 'auto'
          }}>
            Insights, research, and perspectives on AI education, ethics, and the future of learning
          </Typography>
        </Box>

        {/* Blog Posts Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
          gap: 4 
        }}>
          {blogPosts.map((post) => (
            <StyledCard key={post.id}>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" sx={{
                    color: '#008080',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {post.category} • {post.readTime}
                  </Typography>
                </Box>
                
                <Typography variant="h6" component="h3" sx={{
                  fontWeight: 700,
                  color: '#073B4C',
                  mb: 2,
                  fontSize: '1.25rem',
                  lineHeight: 1.3
                }}>
                  {post.title}
                </Typography>
                
                <Typography variant="body2" sx={{
                  color: '#073B4C',
                  opacity: 0.8,
                  lineHeight: 1.6,
                  mb: 3
                }}>
                  {post.excerpt}
                </Typography>
                
                <Button
                  variant="outlined"
                  href={post.externalUrl}
                  target={post.externalUrl !== '#' ? '_blank' : '_self'}
                  rel={post.externalUrl !== '#' ? 'noopener noreferrer' : ''}
                  endIcon={post.externalUrl !== '#' ? <OpenInNewIcon /> : <ArrowForwardIcon />}
                  sx={{
                    borderColor: '#008080',
                    color: '#008080',
                    textTransform: 'none',
                    fontWeight: 600,
                    mt: 'auto',
                    '&:hover': {
                      backgroundColor: '#008080',
                      color: 'white',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  {post.externalUrl !== '#' ? 'Read Article' : 'Coming Soon'}
                </Button>
              </CardContent>
            </StyledCard>
          ))}
        </Box>

        {/* Call to Action */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: 10,
          p: 6,
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <Typography variant="h4" sx={{
            fontWeight: 700,
            color: '#073B4C',
            mb: 2
          }}>
            Stay Updated
          </Typography>
          <Typography variant="body1" sx={{
            color: '#073B4C',
            opacity: 0.8,
            mb: 4,
            maxWidth: '500px',
            mx: 'auto'
          }}>
            Subscribe to our newsletter for the latest insights on AI education, teaching strategies, and industry trends.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{
              backgroundColor: '#073B4C',
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#0a4a5c',
                transform: 'translateY(-2px)',
              }
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;