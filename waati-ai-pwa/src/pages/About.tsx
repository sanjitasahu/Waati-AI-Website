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
          background: 'url("/who-are-we.jpg") center center / cover no-repeat',
          color: 'white',
          py: 12,
          textAlign: 'center',
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 59, 76, 0.7)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold', 
            mb: 2,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Waati AI Consulting
          </Typography>
          <Typography variant="h4" sx={{ 
            mb: 6, 
            opacity: 0.95, 
            maxWidth: '800px', 
            mx: 'auto',
            color: 'white',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Empowering Tomorrow's Innovators, Today
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Who We Are */}
        <Box sx={{ mb: 10, textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ 
            fontWeight: 'bold', 
            color: '#073B4C',
            mb: 4
          }}>
            Who We Are
          </Typography>
          <Typography variant="body1" sx={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.7,
            color: '#073B4C',
            textAlign: 'center'
          }}>
            Waati AI Consulting brings the spirit of "Saraswati"—the goddess of knowledge—into the modern classroom. 
            We partner with schools and educational institutes to introduce students in Grades 6–12 to the world of 
            artificial intelligence through hands-on sessions, workshops, and ongoing mentorship.
          </Typography>
        </Box>

        {/* Our Mission */}
        <Box sx={{ mb: 10, textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ 
            fontWeight: 'bold', 
            color: '#073B4C',
            mb: 4
          }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.7,
            color: '#073B4C',
            textAlign: 'center'
          }}>
            To equip young learners with the critical thinking skills, creative problem-solving techniques, and technical 
            know-how needed to thrive in a rapidly evolving, AI-driven world. We believe that understanding AI isn't just 
            for future engineers—it's a foundational literacy for every 21st-century learner.
          </Typography>
        </Box>

        {/* Meet the Founders Title */}
        <Typography variant="h3" component="h2" gutterBottom sx={{ 
          fontWeight: 'bold', 
          color: '#073B4C',
          mb: 6,
          textAlign: 'center'
        }}>
          Meet the Founders
        </Typography>

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
                    src="/sourav-profile.jpg"
                    alt="Sourav Dasgupta"
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
                      href="https://www.linkedin.com/in/sourav-dasgupta/"
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

        {/* Why AI Matters for Young Learners */}
        <Box sx={{ mb: 8, mt: 12, textAlign: 'center' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ 
            fontWeight: 'bold',
            color: '#073B4C',
            mb: 6
          }}>
            Why AI Matters for Young Learners
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
            gap: 4,
            maxWidth: '900px',
            mx: 'auto'
          }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 600,
                color: '#073B4C',
                mb: 2
              }}>
                Future-Ready Skills
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1rem', 
                lineHeight: 1.6,
                color: '#073B4C',
                opacity: 0.9
              }}>
                From critical thinking to collaboration, AI projects build competencies that transcend the technology itself.
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 600,
                color: '#073B4C',
                mb: 2
              }}>
                Empowered Creativity
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1rem', 
                lineHeight: 1.6,
                color: '#073B4C',
                opacity: 0.9
              }}>
                Students learn to imagine and prototype AI-powered solutions to problems in their communities.
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 600,
                color: '#073B4C',
                mb: 2
              }}>
                Responsible Citizenship
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1rem', 
                lineHeight: 1.6,
                color: '#073B4C',
                opacity: 0.9
              }}>
                Through discussions on data privacy and ethics, learners become aware digital citizens.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Waati Name Origin */}
        <Box sx={{ 
          mb: 10, 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          gap: 4,
          maxWidth: '1000px',
          mx: 'auto'
        }}>
          {/* Saraswati Image */}
          <Box sx={{ 
            flex: '0 0 auto',
            width: { xs: '200px', md: '250px' },
            mx: { xs: 'auto', md: 0 }
          }}>
            <Box
              component="img"
              src="/saraswati.jpg"
              alt="Goddess Saraswati"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                border: '3px solid #008080'
              }}
            />
          </Box>

          {/* Content */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ 
              fontSize: '1.2rem', 
              lineHeight: 1.7,
              color: '#073B4C',
              fontStyle: 'italic',
              mb: 4,
              textAlign: { xs: 'center', md: 'left' }
            }}>
              "Waati" is inspired by the Sanskrit name "Saraswati," the Hindu goddess of knowledge, music, art and wisdom. 
              By borrowing the latter half of her name, Waati captures:
            </Typography>
            
            {/* Three Points Side by Side */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 3,
              textAlign: { xs: 'center', sm: 'left' }
            }}>
              <Box>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 600,
                  color: '#008080',
                  mb: 1,
                  fontSize: '0.95rem'
                }}>
                  Knowledge & Learning
                </Typography>
                <Typography variant="body2" sx={{ 
                  fontSize: '0.85rem', 
                  lineHeight: 1.5,
                  color: '#073B4C',
                  opacity: 0.8
                }}>
                  A direct nod to the pursuit of wisdom and understanding.
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 600,
                  color: '#008080',
                  mb: 1,
                  fontSize: '0.95rem'
                }}>
                  Creativity & Insight
                </Typography>
                <Typography variant="body2" sx={{ 
                  fontSize: '0.85rem', 
                  lineHeight: 1.5,
                  color: '#073B4C',
                  opacity: 0.8
                }}>
                  Reflecting the imaginative spark that drives innovation.
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 600,
                  color: '#008080',
                  mb: 1,
                  fontSize: '0.95rem'
                }}>
                  Guidance & Growth
                </Typography>
                <Typography variant="body2" sx={{ 
                  fontSize: '0.85rem', 
                  lineHeight: 1.5,
                  color: '#073B4C',
                  opacity: 0.8
                }}>
                  Signifying our role in guiding young minds toward their full potential in an AI-driven future.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #008080 0%, #073B4C 100%)',
            borderRadius: 4,
            p: 6,
            textAlign: 'center',
            mt: 8,
            color: 'white'
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Ready to Transform Education?
          </Typography>
          <Typography variant="h6" sx={{ 
            maxWidth: '700px', 
            mx: 'auto', 
            opacity: 0.95,
            mb: 4,
            lineHeight: 1.6
          }}>
            Partner with Waati AI Consulting to prepare your students for tomorrow's challenges with today's AI skills.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{
              backgroundColor: '#FF6B6B',
              color: 'white',
              fontWeight: 700,
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: '#ff5252',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)'
              }
            }}
          >
            Partner With Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 