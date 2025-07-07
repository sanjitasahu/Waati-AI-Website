import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Typography, Button, Stack, Table, TableBody, TableCell, TableRow,
  Avatar, Accordion, AccordionSummary, AccordionDetails, Box, List, ListItem, ListItemText
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ProgramModalProps {
  open: boolean;
  onClose: () => void;
  program: 'workshops' | 'bootcamps' | 'labs';
}

export default function ProgramModal({ open, onClose, program }: ProgramModalProps) {
  if (program !== 'workshops') return null;        // other programs later

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" scroll="paper">
      <DialogTitle>Interactive AI Workshops – Grades 6–8</DialogTitle>

      <DialogContent dividers>

        {/* Hero strip */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="subtitle1">4 live sessions · ₹5,000</Typography>
          <Button variant="contained" size="small" component="a" href="/enroll?program=workshops">Enroll Now</Button>
        </Stack>

        {/* Course Snapshot */}
        <Table size="small" sx={{ mb: 3 }}>
          <TableBody>
            {[
              ['Week 1','What is AI?','Quick Draw!','Demo to family'],
              ['Week 2','Train a Picture Model','Teachable Machine','Pet-photo test'],
              ['Week 3','Chatbots in Scratch','Scratch AI blocks','Funny Q&A script'],
              ['Week 4','AI Around Us','Virtual field-trip','1-slide Canva poster'],
            ].map(([wk,theme,tool,spark]) => (
              <TableRow key={wk}>
                <TableCell><strong>{wk}</strong></TableCell>
                <TableCell>{theme}</TableCell>
                <TableCell>{tool}</TableCell>
                <TableCell>{spark}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* What You'll Learn */}
        <Typography variant="h6" gutterBottom>What You'll Learn</Typography>
        <List dense sx={{ mb: 3 }}>
          {[
            'Train and test a real AI model',
            'Think logically—no heavy code',
            'Spot bias and privacy issues early',
            'Earn an AI Explorer digital badge',
          ].map(txt => (
            <ListItem key={txt}><ListItemText primary={txt} /></ListItem>
          ))}
        </List>

        {/* Sample Project */}
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/images/teachable-catdog.gif" alt="Student training pet model" style={{ maxWidth:'100%', marginBottom: 8 }} onError={e => { e.currentTarget.style.display = 'none'; }} />
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Week 2 mini-project: "Can the computer tell my pet apart?"
            </Typography>
          </Box>
        </Box>

        {/* Schedule & Tech */}
        <Typography variant="h6" gutterBottom>Schedule & Tech</Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Live on Zoom every <strong>Saturday 10 AM–12 PM</strong> (recordings provided).<br/>
          Works on any laptop or tablet—no installs needed.
        </Typography>

        {/* Instructor */}
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Avatar src="/images/sanjita-profile.jpg" alt="Sanjita Sahu" />
          <Typography variant="body2">
            <strong>Sanjita Sahu</strong> — AI educator, founder, and STEM curriculum designer with 10+ years of experience.
          </Typography>
        </Stack>

        {/* FAQ */}
        {[
          ['Do kids need coding experience?','No — every tool is drag-and-drop.'],
          ['What if we miss a class?','Watch the recording and complete the Spark task.'],
          ['What devices are required?','Any laptop or tablet with a webcam and Chrome/Edge browser.'],
        ].map(([q,a]) => (
          <Accordion key={q}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>{q}</AccordionSummary>
            <AccordionDetails>{a}</AccordionDetails>
          </Accordion>
        ))}

      </DialogContent>

      <DialogActions>
        <Button variant="contained" component="a" href="/enroll?program=workshops">Enroll Now</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
} 