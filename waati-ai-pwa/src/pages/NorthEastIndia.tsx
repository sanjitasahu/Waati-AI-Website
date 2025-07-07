import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { formatINR, formatCAD, inrToCad } from '../utils/currency';

const states = [
  {
    name: 'Assam',
    capital: 'Guwahati',
    intro: 'In Assam, we blend traditional wisdom with cutting-edge AI education. Our curriculum respects Assamese cultural values while preparing students for the digital future. With a focus on practical applications, we help students understand how AI can solve local challenges.',
  },
  {
    name: 'Meghalaya',
    capital: 'Shillong',
    intro: 'Known as the "Scotland of the East," Meghalaya\'s schools are embracing AI education. Our program adapts to the state\'s unique educational landscape, offering flexible learning paths that work with both urban and rural school schedules.',
  },
  {
    name: 'Manipur',
    capital: 'Imphal',
    intro: 'In Manipur, we\'re bringing AI education to life through interactive sessions that connect with the state\'s rich cultural heritage. Our curriculum is designed to engage students through practical projects that reflect local contexts.',
  },
  {
    name: 'Nagaland',
    capital: 'Kohima',
    intro: 'Nagaland\'s forward-thinking schools are pioneering AI education in the region. Our program supports this vision with hands-on learning experiences that prepare students for future opportunities in technology.',
  },
  {
    name: 'Tripura',
    capital: 'Agartala',
    intro: 'Tripura\'s educational institutions are embracing digital transformation. Our AI program provides the tools and knowledge needed to prepare students for the evolving technological landscape.',
  },
  {
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    intro: 'In Arunachal Pradesh, we\'re making AI education accessible to all. Our program is designed to work with the state\'s diverse educational needs, from urban centers to remote communities.',
  },
  {
    name: 'Mizoram',
    capital: 'Aizawl',
    intro: 'Mizoram\'s schools are leading the way in digital education. Our AI program complements this vision with practical, engaging content that prepares students for the future.',
  },
  {
    name: 'Sikkim',
    capital: 'Gangtok',
    intro: 'Sikkim\'s commitment to quality education aligns perfectly with our AI program. We provide comprehensive training that helps students understand and apply AI concepts in real-world scenarios.',
  },
];

const faqs = [
  {
    question: 'How does this fit SEBA\'s AI elective?',
    answer: 'Our curriculum is specifically designed to align with SEBA\'s AI elective requirements. We cover all core concepts while adding practical, hands-on projects that make learning engaging and relevant.'
  },
  {
    question: 'What if our internet is slow?',
    answer: 'We\'ve optimized our platform to work with lower bandwidth connections. Classes are recorded and available for download, and we provide offline learning materials. Our technical team also helps schools optimize their internet setup.'
  },
  {
    question: 'Is there teacher training included?',
    answer: 'Yes! We provide comprehensive teacher training programs, including orientation sessions, ongoing support, and access to our teaching resources. Teachers receive certification upon completion.'
  },
  {
    question: 'Pricing in ₹ and CA$?',
    answer: `Our pricing is designed to be accessible for schools in the North-East region:
    • Per-student pricing: ${formatINR(5000)} (${formatCAD(inrToCad(5000))}) per term
    • School-wide license: ${formatINR(100000)} (${formatCAD(inrToCad(100000))}) per year
    • Custom packages available for larger institutions`
  }
];

const NorthEastIndia: React.FC = () => {
  const [selectedState, setSelectedState] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    state: '',
    email: '',
    whatsapp: '',
    demoDate: '',
  });

  const handleStateChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedState(newValue);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #0F172A 0%, #1E293B 100%)',
          color: 'white',
          py: 12,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
            <Box sx={{ flex: 1 }}>
              <Typography variant="h2" component="h1" gutterBottom>
                AI for North-East India Schools
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Board-aligned live classes broadcast from Canada, rooted in Assamese values.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  component="a"
                  href="#demo-form"
                  sx={{
                    backgroundColor: '#246BFE',
                    '&:hover': { backgroundColor: '#1E5CD9' },
                  }}
                >
                  Book a Free Demo
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="/pdfs/sample-lesson.pdf"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' },
                  }}
                >
                  Download Sample Lesson
                </Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Box
                  component="img"
                  src="/Logo v2 medium.png"
                  alt="Waati AI Learning"
                  sx={{
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              </motion.div>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* State Tabs */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedState}
            onChange={handleStateChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                minWidth: 120,
              },
            }}
          >
            {states.map((state, index) => (
              <Tab key={state.name} label={state.name} />
            ))}
          </Tabs>
        </Box>
        {states.map((state, index) => (
          <Box
            key={state.name}
            role="tabpanel"
            hidden={selectedState !== index}
            sx={{ py: 3 }}
          >
            {selectedState === index && (
              <Box>
                <Typography variant="body1" paragraph>
                  {state.intro}
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                  "My Grade-8 class built its first chatbot in just 4 weeks!" — Teacher, {state.capital}
                </Typography>
                <Button
                  component="a"
                  href={`mailto:sanjita.sahu@waatiai.com?subject=AI for ${state.name}`}
                  variant="text"
                  color="primary"
                >
                  Schedule State-Specific Webinar
                </Button>
              </Box>
            )}
          </Box>
        ))}
      </Container>

      {/* Case Study Teaser */}
      <Box sx={{ backgroundColor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
            <Box sx={{ flex: 1 }}>
              <Paper sx={{ p: 4, backgroundColor: 'primary.main', color: 'white' }}>
                <Typography variant="h4" gutterBottom>
                  "30% jump in STEM interest at DPS Guwahati after pilot"
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Button
                component={Link}
                to="/blog/dps-guwahati-ai-pilot"
                variant="text"
                size="large"
                sx={{ fontSize: '1.2rem' }}
              >
                Read full story →
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* Demo Form */}
      <Box
        id="demo-form"
        sx={{
          backgroundColor: 'background.default',
          py: 8,
          position: 'relative',
        }}
      >
        <Container maxWidth="md">
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom textAlign="center">
                Book a Free Demo
              </Typography>
              <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 4 }}>
                <Stack spacing={3}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label="School"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      required
                    />
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <TextField
                      fullWidth
                      select
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    >
                      {states.map((state) => (
                        <MenuItem key={state.name} value={state.name}>
                          {state.name}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <TextField
                      fullWidth
                      label="WhatsApp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label="Preferred Demo Date"
                      name="demoDate"
                      type="date"
                      value={formData.demoDate}
                      onChange={handleInputChange}
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                  </Stack>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Submit Request
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default NorthEastIndia; 