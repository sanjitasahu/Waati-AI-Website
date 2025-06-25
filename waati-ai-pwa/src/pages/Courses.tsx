import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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
        <Typography variant="h3" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
          A Month with Waati AI
        </Typography>
        <TableContainer component={Paper} sx={{ overflowX: 'auto', mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Session</strong></TableCell>
                <TableCell><strong>Focus</strong></TableCell>
                <TableCell><strong>Outcome</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                  Week 1
                </TableCell>
                <TableCell>Foundations of AI: algorithms, history, ethics</TableCell>
                <TableCell>Confidence solving logic challenges</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                  Week 2
                </TableCell>
                <TableCell>Hands-on ML: data collection, training basic models</TableCell>
                <TableCell>Build a simple image-recognition prototype</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                  Week 3
                </TableCell>
                <TableCell>Advanced Applications: NLP, capstone ideation</TableCell>
                <TableCell>Pitch a real-world AI solution to peers & mentors</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
          Outside these sessions, students use their new "gift of time" to explore clubs, sports, or passion projects—fostering creativity, leadership, and critical thinking.
        </Typography>
      </Box>

      {/* A Day with Waati AI */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 3, color: 'primary.main' }}>
          A Day with Waati AI
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          Students dive into interactive AI-powered academic sessions, mastering concepts 2x faster with hands-on projects and real-world datasets. Instructors provide motivational support and high expectations to foster growth.
        </Typography>
      </Box>

      {/* Transforming the Role of Educators */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 3, color: 'primary.main' }}>
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
        <Typography variant="h3" gutterBottom sx={{ mb: 3, color: 'primary.main' }}>
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