import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, List, ListItem, ListItemText } from '@mui/material';

const Courses: React.FC = () => {
  const monthlySchedule = [
    {
      session: 'Week 1',
      focus: 'Foundations of AI: algorithms, history, ethics',
      outcome: 'Confidence solving logic challenges'
    },
    {
      session: 'Week 2',
      focus: 'Hands-on ML: data collection, training basic models',
      outcome: 'Build a simple image-recognition prototype'
    },
    {
      session: 'Week 3',
      focus: 'Advanced Applications: NLP, capstone ideation',
      outcome: 'Pitch a real-world AI solution to peers & mentors'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
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
              {monthlySchedule.map((week) => (
                <TableRow key={week.session}>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                    {week.session}
                  </TableCell>
                  <TableCell>{week.focus}</TableCell>
                  <TableCell>{week.outcome}</TableCell>
                </TableRow>
              ))}
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
        <List sx={{ pl: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1 }}>
            <ListItemText 
              primary={<strong>Mentor:</strong>}
              secondary="Provide emotional encouragement and ethical perspectives on AI projects."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1 }}>
            <ListItemText 
              primary={<strong>Coach:</strong>}
              secondary="Support students through troubleshooting code, refining prototypes, and presenting ideas with confidence."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1 }}>
            <ListItemText 
              primary={<strong>Facilitator:</strong>}
              secondary="Curate tools, datasets, and project ideas that resonate with students' interests and school objectives."
            />
          </ListItem>
        </List>
      </Box>

      {/* Why Waati AI Works */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 3, color: 'primary.main' }}>
          Why Waati AI Works
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1 }}>
            <ListItemText 
              primary={<strong>Personalized Learning Pathways:</strong>}
              secondary="Every student progresses at their own pace through AI modules tailored to their grade level and interests."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1 }}>
            <ListItemText 
              primary={<strong>Project-Based Mastery:</strong>}
              secondary="Theory meets practice: from chatbots to data-driven social impact projects, learners see AI in action."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1 }}>
            <ListItemText 
              primary={<strong>Ethics & Empathy Built In:</strong>}
              secondary="We integrate discussions on bias, privacy, and societal impact so students become responsible innovators."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1 }}>
            <ListItemText 
              primary={<strong>Sustainable Implementation:</strong>}
              secondary="Our Teacher Academy and resource portal ensure that AI education continues long after our trainers leave campus."
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Courses; 