import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Tabs,
  Tab,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  School as SchoolIcon,
  Business as BusinessIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Work as WorkIcon,
  Psychology as PsychologyIcon,
  Science as ScienceIcon,
  Computer as ComputerIcon
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`program-tabpanel-${index}`}
      aria-labelledby={`program-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Programs: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const location = useLocation();

  // Handle anchor links from homepage
  useEffect(() => {
    if (location.hash === '#students') {
      setTabValue(0);
    } else if (location.hash === '#parents') {
      setTabValue(1);
    }
  }, [location.hash]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const programs = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Interactive Workshops',
      subtitle: 'Grades 6–8',
      description: 'Spark curiosity with AI fundamentals, logic puzzles, and beginner coding in Scratch or Python.',
      highlights: ['AI Fundamentals', 'Logic Puzzles', 'Scratch/Python Coding'],
      duration: '4 weeks',
      hours: '16 hours total',
      price: '₹8,000'
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      title: 'Skill-Building Bootcamps',
      subtitle: 'Grades 9–10',
      description: 'Dive into machine learning basics, data ethics, and real-world case studies. Build chatbots and image classifiers.',
      highlights: ['Machine Learning', 'Data Ethics', 'Build Chatbots'],
      duration: '6 weeks',
      hours: '24 hours total',
      price: '₹12,000'
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Advanced Labs & Capstones',
      subtitle: 'Grades 11–12',
      description: 'Deepen technical know-how with neural networks, NLP, and hands-on capstone projects showcasing innovation.',
      highlights: ['Neural Networks', 'NLP Projects', 'Capstone Showcases'],
      duration: '8 weeks',
      hours: '32 hours total',
      price: '₹16,000'
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{
          fontFamily: '"Chalkboard", "Chalkduster", "Comic Neue", sans-serif',
          fontWeight: 800,
          color: '#073B4C',
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
        }}>
          Our Programs
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ 
          fontStyle: 'italic',
          color: '#073B4C',
          opacity: 0.8
        }}>
          Transforming education through AI-powered learning
        </Typography>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="program tabs"
          sx={{
            '& .MuiTab-root': {
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none',
              minHeight: '60px'
            },
            '& .Mui-selected': {
              color: '#008080'
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#008080',
              height: '3px'
            }
          }}
        >
          <Tab label="For Students" />
          <Tab label="For Parents" />
        </Tabs>
      </Box>

      {/* Students Tab */}
      <TabPanel value={tabValue} index={0}>
        {/* Program Cards */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ 
            mb: 4, 
            color: '#008080',
            fontWeight: 700
          }}>
            Choose Your Program
          </Typography>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(350px, 1fr))' },
            gap: 4
          }}>
            {programs.map((program, index) => (
              <Card key={index} sx={{ 
                height: '100%',
                borderRadius: 3,
                boxShadow: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ color: '#008080', mr: 2 }}>
                      {program.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#073B4C' }}>
                        {program.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#008080', fontWeight: 600 }}>
                        {program.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#073B4C' }}>
                    {program.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#073B4C' }}>
                      What You'll Learn:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {program.highlights.map((highlight, idx) => (
                        <Chip 
                          key={idx} 
                          label={highlight} 
                          size="small"
                          sx={{ 
                            backgroundColor: 'rgba(0, 128, 128, 0.1)',
                            color: '#008080',
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#073B4C', fontWeight: 600 }}>
                        Duration: {program.duration}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#073B4C', opacity: 0.8 }}>
                        {program.hours}
                      </Typography>
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#008080' }}>
                      {program.price}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: '#008080',
                      color: 'white',
                      py: 1.5,
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      '&:hover': {
                        backgroundColor: '#006666',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Existing Content */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ mb: 4, color: '#008080' }}>
            A Month with Waati AI
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            mb: 4 
          }}>
            <Box sx={{ flex: 1 }}>
              <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#008080', mb: 2 }}>
                    Week 1
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Focus:
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    Foundations of AI: algorithms, history, ethics
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Outcome:
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    Confidence solving logic challenges
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#008080', mb: 2 }}>
                    Week 2
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Focus:
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    Hands-on ML: data collection, training basic models
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Outcome:
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    Build a simple image-recognition prototype
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#008080', mb: 2 }}>
                    Week 3
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Focus:
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    Advanced Applications: NLP, capstone ideation
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Outcome:
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    Pitch a real-world AI solution to peers & mentors
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            Outside these sessions, students use their new "gift of time" to explore clubs, sports, or passion projects—fostering creativity, leadership, and critical thinking.
          </Typography>
        </Box>

        {/* Why Waati AI Works */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ mb: 3, color: '#008080' }}>
            Why Waati AI Works
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>• Personalized Learning Pathways:</strong> Every student progresses at their own pace through AI modules tailored to their grade level and interests.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>• Project-Based Mastery:</strong> Theory meets practice: from chatbots to data-driven social impact projects, learners see AI in action.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>• Ethics & Empathy Built In:</strong> We integrate discussions on bias, privacy, and societal impact so students become responsible innovators.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>• Sustainable Implementation:</strong> Our Teacher Academy and resource portal ensure that AI education continues long after our trainers leave campus.
            </Typography>
          </Box>
        </Box>
      </TabPanel>

      {/* Parents Tab */}
      <TabPanel value={tabValue} index={1}>
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          {/* Future Job Market Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ 
              mb: 4, 
              color: '#008080',
              fontWeight: 700,
              textAlign: 'center'
            }}>
              The Future Job Market & AI
            </Typography>
            
            <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ 
                  fontWeight: 700, 
                  color: '#073B4C', 
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                  <WorkIcon sx={{ color: '#008080' }} />
                  Why AI Education Matters for Your Child
                </Typography>
                
                <Typography variant="body1" sx={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7, 
                  mb: 4,
                  color: '#073B4C'
                }}>
                  The job market is undergoing a fundamental transformation. By 2030, it's estimated that 80% of jobs will require some level of AI literacy. 
                  The question isn't whether your child will work with AI—it's whether they'll be prepared to thrive in an AI-driven world.
                </Typography>

                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: 3,
                  mb: 4
                }}>
                  <Box sx={{ 
                    p: 3, 
                    backgroundColor: 'rgba(0, 128, 128, 0.05)',
                    borderRadius: 2,
                    border: '1px solid rgba(0, 128, 128, 0.1)'
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#008080', mb: 2 }}>
                      <ComputerIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      Technical Skills
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#073B4C' }}>
                      Understanding AI fundamentals, coding basics, and how to work with AI tools will be as essential as reading and writing.
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    p: 3, 
                    backgroundColor: 'rgba(255, 107, 107, 0.05)',
                    borderRadius: 2,
                    border: '1px solid rgba(255, 107, 107, 0.1)'
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#FF6B6B', mb: 2 }}>
                      <PsychologyIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      Critical Thinking
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#073B4C' }}>
                      AI literacy includes understanding bias, ethics, and making informed decisions about when and how to use AI.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* AI Impact on Careers */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ 
              mb: 4, 
              color: '#073B4C',
              fontWeight: 700
            }}>
              AI's Impact on Different Careers
            </Typography>
            
            <List sx={{ bgcolor: 'background.paper', borderRadius: 3, boxShadow: 2 }}>
              {[
                {
                  title: 'Healthcare',
                  description: 'AI will assist doctors in diagnosis, drug discovery, and personalized treatment plans.',
                  icon: <ScienceIcon sx={{ color: '#008080' }} />
                },
                {
                  title: 'Finance',
                  description: 'AI algorithms will handle trading, risk assessment, and customer service.',
                  icon: <BusinessIcon sx={{ color: '#008080' }} />
                },
                {
                  title: 'Education',
                  description: 'AI tutors will provide personalized learning experiences and adaptive curricula.',
                  icon: <SchoolIcon sx={{ color: '#008080' }} />
                },
                {
                  title: 'Creative Industries',
                  description: 'AI will be a collaborative tool for artists, writers, and designers.',
                  icon: <TrendingUpIcon sx={{ color: '#008080' }} />
                }
              ].map((career, index) => (
                <ListItem key={index} sx={{ py: 2 }}>
                  <ListItemIcon>
                    {career.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#073B4C' }}>
                        {career.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1" sx={{ color: '#073B4C', opacity: 0.8 }}>
                        {career.description}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Resources for Parents */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ 
              mb: 4, 
              color: '#073B4C',
              fontWeight: 700
            }}>
              Resources for Parents
            </Typography>
            
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4
            }}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#008080', mb: 2 }}>
                    [PLACEHOLDER] Understanding AI Basics
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#073B4C' }}>
                    A comprehensive guide for parents to understand the fundamentals of artificial intelligence and its impact on education.
                  </Typography>
                  <Button variant="outlined" sx={{ borderColor: '#008080', color: '#008080' }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#008080', mb: 2 }}>
                    [PLACEHOLDER] Future-Proofing Your Child's Career
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#073B4C' }}>
                    Expert insights on how to prepare your child for the AI-driven job market of tomorrow.
                  </Typography>
                  <Button variant="outlined" sx={{ borderColor: '#008080', color: '#008080' }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#008080', mb: 2 }}>
                    [PLACEHOLDER] AI Ethics for Families
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#073B4C' }}>
                    How to discuss AI ethics, privacy, and responsible technology use with your children.
                  </Typography>
                  <Button variant="outlined" sx={{ borderColor: '#008080', color: '#008080' }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#008080', mb: 2 }}>
                    [PLACEHOLDER] Success Stories
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#073B4C' }}>
                    Real stories from parents whose children have benefited from AI education programs.
                  </Typography>
                  <Button variant="outlined" sx={{ borderColor: '#008080', color: '#008080' }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* CTA Section */}
          <Box sx={{ 
            textAlign: 'center',
            p: 6,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #008080 0%, #FF6B6B 100%)',
            color: 'white'
          }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 700, 
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}>
              Ready to Give Your Child the AI Advantage?
            </Typography>
            <Typography variant="h6" sx={{ 
              mb: 4,
              opacity: 0.95,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Join hundreds of parents who are already preparing their children for the future with Waati AI.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: 'white',
                color: '#008080',
                px: 4,
                py: 2,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#f7fafc',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Enroll Your Child Today
            </Button>
          </Box>
        </Box>
      </TabPanel>
    </Container>
  );
};

export default Programs; 