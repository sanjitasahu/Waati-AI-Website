import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Chip,
  Button,
  Avatar
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const About: React.FC = () => {
  const sanjitaSkills = [
    'AI/ML Product Strategy & Development',
    'Generative AI (GenAI) Applications',
    'LLMs & Retrieval-Augmented Generation (RAG)',
    'Agentic RAG Frameworks',
    'Text-to-SQL Capabilities',
    'AI Agents & Automation',
    'Low-Code Automation',
    'Product Analytics & User Insights',
    'Cross-functional Team Leadership',
    'Prototyping with CursorAI & Claude',
  ];

  const souravSkills = [
    'Artificial Intelligence (AI)',
    'Software as a Service (SaaS)',
    'Business Transformation',
    'Product Management',
    'Data Products & Solutions',
    'GenAI Applications',
    'OpenAI API Integration',
    'Agile Frameworks',
    'Cross-functional Leadership',
    'Customer Experience Enhancement'
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
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Meet the Founders
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.8, maxWidth: '800px', mx: 'auto' }}>
            Transforming businesses through innovative AI solutions and strategic product leadership
          </Typography>
          
          {/* Founders Avatars */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 8, mb: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src="/sanjita-profile.jpg"
                alt="Sanjita Sahu"
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  border: '4px solid white',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Sanjita Sahu</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>Co-Founder & AI Product Lead</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                alt="Sourav Dasgupta"
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  border: '4px solid white',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  bgcolor: 'primary.main',
                  fontSize: '2rem',
                  fontWeight: 'bold'
                }}
              >
                SD
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Sourav Dasgupta</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>Co-Founder & Senior Product Manager</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Founders Profiles */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' }, 
          gap: 6,
          alignItems: 'stretch'
        }}>
          {/* Sanjita's Profile */}
          <Box sx={{ flex: 1 }}>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Avatar
                    src="/sanjita-profile.jpg"
                    alt="Sanjita Sahu"
                    sx={{
                      width: 100,
                      height: 100,
                      mx: 'auto',
                      mb: 2,
                      border: '3px solid',
                      borderColor: 'primary.main'
                    }}
                  />
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Sanjita Sahu
                  </Typography>
                  <Typography variant="h6" color="primary.main" gutterBottom>
                    Co-Founder & AI Product Lead
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 3 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<LinkedInIcon />}
                      href="https://www.linkedin.com/in/sanjita-sahu/"
                      target="_blank"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<EmailIcon />}
                      href="mailto:sanjita.sahu@waatiai.com"
                    >
                      Contact
                    </Button>
                  </Box>
                </Box>

                <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', fontStyle: 'italic' }}>
                  Innovative and strategic AI Product Lead with extensive expertise in leading AI-driven products and automation solutions. 
                  Demonstrated success in developing and scaling advanced AI systems including AI Agents, Agentic RAG, and Text-to-SQL functionalities.
                </Typography>

                {/* Skills */}
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                  Core Expertise
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {sanjitaSkills.slice(0, 6).map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Sourav's Profile */}
          <Box sx={{ flex: 1 }}>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Avatar
                    alt="Sourav Dasgupta"
                    sx={{
                      width: 100,
                      height: 100,
                      mx: 'auto',
                      mb: 2,
                      border: '3px solid',
                      borderColor: 'primary.main',
                      bgcolor: 'primary.main',
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    SD
                  </Avatar>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Sourav Dasgupta
                  </Typography>
                  <Typography variant="h6" color="primary.main" gutterBottom>
                    Co-Founder & Senior Product Manager
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Artificial Intelligence | Real Estate | Finance
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 3 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<LinkedInIcon />}
                      href="https://www.linkedin.com/in/souravdasgupta"
                      target="_blank"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<EmailIcon />}
                      href="mailto:sourav@waatiai.com"
                    >
                      Contact
                    </Button>
                  </Box>
                </Box>

                <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', fontStyle: 'italic' }}>
                  As a Product Manager, I apply my MBA and engineering skills to lead the development and implementation of innovative data 
                  products and solutions that enhance customer experience and support business goals. Passionate about bridging business and technology.
                </Typography>

                {/* Skills */}
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                  Top Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {souravSkills.slice(0, 6).map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      variant="outlined"
                      color="secondary"
                      size="small"
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Mission Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #cdffd8 0%, #94b9ff 100%)',
            borderRadius: 3,
            p: 6,
            textAlign: 'center',
            mt: 8,
            color: '#1A202C'
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Mission with Waati AI
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', opacity: 0.9 }}>
            Through Waati AI, we're committed to democratizing AI knowledge and helping businesses harness the transformative power of artificial intelligence. 
            Our combined hands-on experience in building enterprise AI solutions, product management expertise, and passion for education drives us to create 
            accessible learning experiences and strategic consulting services that empower organizations to thrive in the AI-driven future.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 