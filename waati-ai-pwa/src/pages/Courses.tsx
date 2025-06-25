import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const Courses: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{
          fontFamily: '"Chalkboard", "Chalkduster", "Comic Neue", sans-serif'
        }}>
          Our Programs
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          Transforming education through AI-powered learning
        </Typography>
      </Box>

      {/* A Month with Waati AI */}
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

      {/* A Day with Waati AI */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 3, color: '#008080' }}>
          A Day with Waati AI
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          Students dive into interactive AI-powered academic sessions, mastering concepts 2x faster with hands-on projects and real-world datasets. Instructors provide motivational support and high expectations to foster growth.
        </Typography>
      </Box>

      {/* Transforming the Role of Educators */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 3, color: '#008080' }}>
          Transforming the Role of Educators
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
          With Waati AI, teachers shift from traditional tasks like grading and lesson plan creation to becoming mentors, coaches, and guides:
        </Typography>
        <Box sx={{ pl: 3 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>• Mentor:</strong> Provide emotional encouragement and ethical perspectives on AI projects.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>• Coach:</strong> Support students through troubleshooting code, refining prototypes, and presenting ideas with confidence.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>• Facilitator:</strong> Curate tools, datasets, and project ideas that resonate with students' interests and school objectives.
          </Typography>
        </Box>
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
    </Container>
  );
};

export default Courses;