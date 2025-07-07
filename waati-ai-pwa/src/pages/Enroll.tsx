import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Chip,
  Stack,
  Divider,
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  FormGroup
} from '@mui/material';
import {
  School as SchoolIcon,
  Business as BusinessIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  hours: string;
  price: number;
  icon: React.ReactNode;
  highlights: string[];
  gradeRange: string;
  features: string[];
}

interface EnrollmentData {
  program: string;
  studentName: string;
  studentAge: string;
  studentGrade: string;
  studentSchool: string;
  codingExperience: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  relationship: string;
  timezone: string;
  preferredDays: string[];
  preferredTime: string;
  enrollmentDate: string;
  specialRequirements: string;
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}

const programs: Program[] = [
  {
    id: 'workshops',
    title: 'Interactive Workshops',
    subtitle: 'Grades 6–8',
    description: 'Spark curiosity with AI fundamentals, logic puzzles, and beginner coding in Scratch or Python.',
    duration: '4 weeks',
    hours: '16 hours total',
    price: 5000,
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    highlights: ['AI Fundamentals', 'Logic Puzzles', 'Scratch/Python Coding'],
    gradeRange: 'Grades 6-8',
    features: [
      'No coding experience required',
      'Drag-and-drop tools',
      'Live interactive sessions',
      'Digital badge upon completion',
      'Family demo showcase'
    ]
  },
  {
    id: 'bootcamps',
    title: 'Skill-Building Bootcamps',
    subtitle: 'Grades 9–10',
    description: 'Dive into machine learning basics, data ethics, and real-world case studies. Build chatbots and image classifiers.',
    duration: '6 weeks',
    hours: '24 hours total',
    price: 8000,
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    highlights: ['Machine Learning', 'Data Ethics', 'Build Chatbots'],
    gradeRange: 'Grades 9-10',
    features: [
      'Basic programming concepts',
      'Real-world AI projects',
      'Ethics and bias awareness',
      'Portfolio development',
      'Career exploration'
    ]
  },
  {
    id: 'labs',
    title: 'Advanced Labs & Capstones',
    subtitle: 'Grades 11–12',
    description: 'Deepen technical know-how with neural networks, NLP, and hands-on capstone projects showcasing innovation.',
    duration: '8 weeks',
    hours: '32 hours total',
    price: 10000,
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    highlights: ['Neural Networks', 'NLP Projects', 'Capstone Showcases'],
    gradeRange: 'Grades 11-12',
    features: [
      'Advanced AI concepts',
      'Research methodology',
      'Capstone project',
      'College preparation',
      'Industry connections'
    ]
  }
];

const getEnrollmentDates = (selectedProgram: string) => {
  const baseDates = [
    {
      id: 'august-9',
      date: 'August 9th, 2024',
      day: 'Friday',
      spots: 12,
      available: true
    },
    {
      id: 'september-6',
      date: 'September 6th, 2024',
      day: 'Friday',
      spots: 15,
      available: true
    },
    {
      id: 'october-4',
      date: 'October 4th, 2024',
      day: 'Friday',
      spots: 18,
      available: true
    },
    {
      id: 'november-1',
      date: 'November 1st, 2024',
      day: 'Friday',
      spots: 20,
      available: true
    }
  ];

  // Customize timing based on program
  const getTimeSlot = (programId: string) => {
    switch (programId) {
      case 'workshops':
        return '6:00 PM - 7:00 PM IST';
      case 'bootcamps':
        return '7:00 PM - 8:00 PM IST';
      case 'labs':
        return '8:00 PM - 9:00 PM IST';
      default:
        return '6:00 PM - 7:00 PM IST';
    }
  };

  // Get weekly schedule based on program
  const getWeeklySchedule = (programId: string) => {
    switch (programId) {
      case 'workshops':
        return [
          'Week 1-2: Fridays 6:00 PM - 7:00 PM IST',
          'Week 3-4: Fridays 6:00 PM - 7:00 PM IST'
        ];
      case 'bootcamps':
        return [
          'Week 1-2: Fridays 7:00 PM - 8:00 PM IST',
          'Week 3-4: Fridays 7:00 PM - 8:00 PM IST',
          'Week 5-6: Fridays 7:00 PM - 8:00 PM IST'
        ];
      case 'labs':
        return [
          'Week 1-2: Fridays 8:00 PM - 9:00 PM IST',
          'Week 3-4: Fridays 8:00 PM - 9:00 PM IST',
          'Week 5-6: Fridays 8:00 PM - 9:00 PM IST',
          'Week 7-8: Fridays 8:00 PM - 9:00 PM IST'
        ];
      default:
        return ['Fridays 6:00 PM - 7:00 PM IST'];
    }
  };

  return baseDates.map(date => ({
    ...date,
    time: getTimeSlot(selectedProgram),
    weeklySchedule: getWeeklySchedule(selectedProgram)
  }));
};





const steps = [
  'Choose Program',
  'Student Information',
  'Parent Details',
  'Choose Start Date',
  'Review & Payment'
];

const Enroll: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData>({
    program: '',
    studentName: '',
    studentAge: '',
    studentGrade: '',
    studentSchool: '',
    codingExperience: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    relationship: '',
    timezone: 'IST',
    preferredDays: [],
    preferredTime: '',
    enrollmentDate: '',
    specialRequirements: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Handle program selection from URL params
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const programParam = params.get('program');
    if (programParam && programs.find(p => p.id === programParam)) {
      setEnrollmentData(prev => ({ ...prev, program: programParam }));
    }
  }, [location.search]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (field: keyof EnrollmentData, value: any) => {
    setEnrollmentData(prev => ({ ...prev, [field]: value }));
  };



  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 0:
        return enrollmentData.program !== '';
      case 1:
        return enrollmentData.studentName !== '' && 
               enrollmentData.studentAge !== '' && 
               enrollmentData.studentGrade !== '' &&
               enrollmentData.studentSchool !== '';
      case 2:
        return enrollmentData.parentName !== '' && 
               enrollmentData.parentEmail !== '' && 
               enrollmentData.parentPhone !== '' &&
               enrollmentData.relationship !== '';
      case 3:
        return enrollmentData.program !== '' && enrollmentData.enrollmentDate !== '';
      case 4:
        return enrollmentData.agreeToTerms;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setShowSuccessDialog(true);
  };

  const selectedProgram = programs.find(p => p.id === enrollmentData.program);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#073B4C', fontWeight: 700 }}>
              Choose Your Program
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#4A5568' }}>
              Select the program that best fits your child's age and learning goals
            </Typography>
            
            <Stack spacing={3}>
              {programs.map((program) => (
                <Card 
                  key={program.id}
                  sx={{ 
                    cursor: 'pointer',
                    border: enrollmentData.program === program.id ? '3px solid #008080' : '1px solid #E2E8F0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                  onClick={() => handleInputChange('program', program.id)}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Box sx={{ color: '#008080' }}>{program.icon}</Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#073B4C' }}>
                          {program.title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: '#008080', fontWeight: 600 }}>
                          {program.subtitle}
                        </Typography>
                      </Box>
                    </Stack>
                    
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {program.description}
                    </Typography>
                    
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      {program.highlights.map(highlight => (
                        <Chip 
                          key={highlight} 
                          label={highlight} 
                          size="small" 
                          sx={{ backgroundColor: '#E6FFFA', color: '#008080' }}
                        />
                      ))}
                    </Stack>
                    
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                      <Box>
                        <Typography variant="body2" sx={{ color: '#073B4C', fontWeight: 600 }}>
                          Duration: {program.duration}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#073B4C', opacity: 0.8 }}>
                          {program.hours}
                        </Typography>
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#008080' }}>
                        ₹{program.price.toLocaleString()}
                      </Typography>
                    </Stack>
                    
                    <List dense>
                      {program.features.map((feature, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircleIcon sx={{ fontSize: 16, color: '#008080' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature} 
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#073B4C', fontWeight: 700 }}>
              Student Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#4A5568' }}>
              Tell us about the student who will be joining our program
            </Typography>
            
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField
                  fullWidth
                  label="Student's Full Name"
                  value={enrollmentData.studentName}
                  onChange={(e) => handleInputChange('studentName', e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  label="Age"
                  type="number"
                  value={enrollmentData.studentAge}
                  onChange={(e) => handleInputChange('studentAge', e.target.value)}
                  required
                  inputProps={{ min: 6, max: 18 }}
                />
              </Stack>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <FormControl fullWidth required>
                  <InputLabel>Grade Level</InputLabel>
                  <Select
                    value={enrollmentData.studentGrade}
                    onChange={(e) => handleInputChange('studentGrade', e.target.value)}
                    label="Grade Level"
                  >
                    {[6, 7, 8, 9, 10, 11, 12].map(grade => (
                      <MenuItem key={grade} value={grade}>Grade {grade}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="School Name"
                  value={enrollmentData.studentSchool}
                  onChange={(e) => handleInputChange('studentSchool', e.target.value)}
                  required
                />
              </Stack>
              
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Previous Coding Experience</FormLabel>
                <RadioGroup
                  value={enrollmentData.codingExperience}
                  onChange={(e) => handleInputChange('codingExperience', e.target.value)}
                >
                  <FormControlLabel value="none" control={<Radio />} label="No experience - Complete beginner" />
                  <FormControlLabel value="basic" control={<Radio />} label="Some experience with Scratch or block-based coding" />
                  <FormControlLabel value="intermediate" control={<Radio />} label="Experience with Python or other programming languages" />
                  <FormControlLabel value="advanced" control={<Radio />} label="Advanced programming skills" />
                </RadioGroup>
              </FormControl>
            </Stack>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#073B4C', fontWeight: 700 }}>
              Parent/Guardian Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#4A5568' }}>
              We'll use this information to keep you updated on your child's progress
            </Typography>
            
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField
                  fullWidth
                  label="Parent/Guardian Full Name"
                  value={enrollmentData.parentName}
                  onChange={(e) => handleInputChange('parentName', e.target.value)}
                  required
                />
                <FormControl fullWidth required>
                  <InputLabel>Relationship to Student</InputLabel>
                  <Select
                    value={enrollmentData.relationship}
                    onChange={(e) => handleInputChange('relationship', e.target.value)}
                    label="Relationship to Student"
                  >
                    <MenuItem value="parent">Parent</MenuItem>
                    <MenuItem value="guardian">Guardian</MenuItem>
                    <MenuItem value="grandparent">Grandparent</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={enrollmentData.parentEmail}
                  onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={enrollmentData.parentPhone}
                  onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                  required
                />
              </Stack>
              
              <TextField
                fullWidth
                label="Special Requirements or Accommodations (Optional)"
                multiline
                rows={3}
                value={enrollmentData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                placeholder="Please let us know if your child has any learning accommodations, accessibility needs, or other requirements..."
              />
            </Stack>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#073B4C', fontWeight: 700 }}>
              Schedule & Preferences
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#4A5568' }}>
              Choose your preferred schedule and start date
            </Typography>
            
            {!enrollmentData.program ? (
              <Alert severity="info" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  Please select a program first to see available enrollment dates and timings.
                </Typography>
              </Alert>
            ) : (
              <Stack spacing={3}>
                <Typography variant="h6" sx={{ color: '#073B4C', fontWeight: 600 }}>
                  Choose Your Enrollment Date
                </Typography>
                <Typography variant="body2" sx={{ color: '#4A5568', mb: 2 }}>
                  Select from our upcoming enrollment dates. Each session runs for the full program duration.
                </Typography>
                
                <Stack spacing={2}>
                  {getEnrollmentDates(enrollmentData.program).map((dateOption) => (
                <Card 
                  key={dateOption.id}
                  sx={{ 
                    cursor: 'pointer',
                    border: enrollmentData.enrollmentDate === dateOption.id ? '3px solid #008080' : '1px solid #E2E8F0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: 2
                    }
                  }}
                  onClick={() => handleInputChange('enrollmentDate', dateOption.id)}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Stack spacing={2}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#073B4C' }}>
                            {dateOption.date}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#008080', fontWeight: 500 }}>
                            {dateOption.day} • {dateOption.time}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Chip 
                            label={`${dateOption.spots} spots left`} 
                            size="small" 
                            color={dateOption.spots < 5 ? "error" : "default"}
                            sx={{ 
                              backgroundColor: dateOption.spots < 5 ? '#ffebee' : '#E6FFFA',
                              color: dateOption.spots < 5 ? '#d32f2f' : '#008080'
                            }}
                          />
                        </Box>
                      </Stack>
                      
                      <Box sx={{ pl: 1 }}>
                        <Typography variant="body2" sx={{ color: '#073B4C', fontWeight: 600, mb: 1 }}>
                          Weekly Schedule:
                        </Typography>
                        {dateOption.weeklySchedule.map((schedule, index) => (
                          <Typography key={index} variant="body2" sx={{ color: '#4A5568', fontSize: '0.875rem' }}>
                            • {schedule}
                          </Typography>
                        ))}
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
              
              <Alert severity="info" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  <strong>Note:</strong> All sessions are conducted online via Zoom. You'll receive login details and materials 24 hours before your first session.
                </Typography>
              </Alert>
            </Stack>
            )}
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#073B4C', fontWeight: 700 }}>
              Review & Payment
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#4A5568' }}>
              Please review your enrollment details and complete payment
            </Typography>
            
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
              <Box sx={{ flex: 1 }}>
                <Card sx={{ mb: 3 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ color: '#073B4C', fontWeight: 600 }}>
                      Enrollment Summary
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    
                    {selectedProgram && (
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#008080' }}>
                          {selectedProgram.title} - {selectedProgram.subtitle}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#4A5568' }}>
                          Duration: {selectedProgram.duration} • {selectedProgram.hours}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#008080', mt: 1 }}>
                          ₹{selectedProgram.price.toLocaleString()}
                        </Typography>
                      </Box>
                    )}
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#073B4C' }}>
                          Student Information
                        </Typography>
                        <Typography variant="body2">Name: {enrollmentData.studentName}</Typography>
                        <Typography variant="body2">Age: {enrollmentData.studentAge}</Typography>
                        <Typography variant="body2">Grade: {enrollmentData.studentGrade}</Typography>
                        <Typography variant="body2">School: {enrollmentData.studentSchool}</Typography>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#073B4C' }}>
                          Parent Information
                        </Typography>
                        <Typography variant="body2">Name: {enrollmentData.parentName}</Typography>
                        <Typography variant="body2">Email: {enrollmentData.parentEmail}</Typography>
                        <Typography variant="body2">Phone: {enrollmentData.parentPhone}</Typography>
                        <Typography variant="body2">Relationship: {enrollmentData.relationship}</Typography>
                      </Box>
                    </Stack>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#073B4C' }}>
                      Schedule
                    </Typography>
                    <Typography variant="body2">
                      Enrollment Date: {getEnrollmentDates(enrollmentData.program).find(d => d.id === enrollmentData.enrollmentDate)?.date || 'Not selected'}
                    </Typography>
                    <Typography variant="body2">
                      Time: {getEnrollmentDates(enrollmentData.program).find(d => d.id === enrollmentData.enrollmentDate)?.time || 'Not selected'}
                    </Typography>
                    {enrollmentData.enrollmentDate && (
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#073B4C', mb: 0.5 }}>
                          Weekly Schedule:
                        </Typography>
                        {getEnrollmentDates(enrollmentData.program).find(d => d.id === enrollmentData.enrollmentDate)?.weeklySchedule.map((schedule, index) => (
                          <Typography key={index} variant="body2" sx={{ color: '#4A5568', fontSize: '0.875rem', pl: 1 }}>
                            • {schedule}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </CardContent>
                </Card>
                
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={enrollmentData.agreeToTerms}
                        onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                        required
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I agree to the{' '}
                        <Button variant="text" size="small" sx={{ p: 0, minWidth: 'auto' }}>
                          Terms of Service
                        </Button>
                        {' '}and{' '}
                        <Button variant="text" size="small" sx={{ p: 0, minWidth: 'auto' }}>
                          Privacy Policy
                        </Button>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={enrollmentData.agreeToMarketing}
                        onChange={(e) => handleInputChange('agreeToMarketing', e.target.checked)}
                      />
                    }
                    label="I would like to receive updates about new programs and educational content"
                  />
                </FormGroup>
              </Box>
              
              <Box sx={{ width: { xs: '100%', md: '350px' } }}>
                <Card sx={{ position: 'sticky', top: 20 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ color: '#073B4C', fontWeight: 600 }}>
                      Payment Summary
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Program Fee:</span>
                        <span>₹{selectedProgram?.price.toLocaleString()}</span>
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Tax:</span>
                        <span>₹{(selectedProgram?.price || 0) * 0.18}</span>
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: '#008080' }}>
                      <span>Total:</span>
                      <span>₹{((selectedProgram?.price || 0) * 1.18).toFixed(0)}</span>
                    </Typography>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      onClick={handleSubmit}
                      disabled={!enrollmentData.agreeToTerms || loading}
                      sx={{
                        mt: 3,
                        backgroundColor: '#008080',
                        '&:hover': { backgroundColor: '#006666' }
                      }}
                    >
                      {loading ? <CircularProgress size={24} color="inherit" /> : 'Complete Payment'}
                    </Button>
                    
                    <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: '#4A5568' }}>
                      Secure payment powered by Razorpay
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Stack>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{
          fontFamily: '"Chalkboard", "Chalkduster", "Comic Neue", sans-serif',
          fontWeight: 800,
          color: '#073B4C',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
        }}>
          Enroll in Waati AI
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ 
          fontStyle: 'italic',
          color: '#073B4C',
          opacity: 0.8
        }}>
          Join the future of AI education
        </Typography>
      </Box>

      {/* Stepper */}
      <Box sx={{ mb: 6 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel 
                StepIconProps={{
                  sx: {
                    color: index <= activeStep ? '#008080' : '#CBD5E0',
                    '& .MuiStepIcon-root': {
                      color: index <= activeStep ? '#008080' : '#CBD5E0',
                    }
                  }
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Step Content */}
      <Box sx={{ mb: 4 }}>
        <AnimatePresence mode="wait">
          {renderStepContent(activeStep)}
        </AnimatePresence>
      </Box>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          startIcon={<ArrowBackIcon />}
          sx={{ color: '#073B4C' }}
        >
          Back
        </Button>
        
        <Box>
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!enrollmentData.agreeToTerms || loading}
              endIcon={loading ? <CircularProgress size={20} /> : <ArrowForwardIcon />}
              sx={{
                backgroundColor: '#008080',
                '&:hover': { backgroundColor: '#006666' }
              }}
            >
              {loading ? 'Processing...' : 'Complete Enrollment'}
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!isStepValid(activeStep)}
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: '#008080',
                '&:hover': { backgroundColor: '#006666' }
              }}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>

      {/* Trust Indicators */}
      <Box sx={{ mt: 8 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="center">
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <SecurityIcon sx={{ fontSize: 40, color: '#008080', mb: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#073B4C' }}>
              Secure Payment
            </Typography>
            <Typography variant="body2" sx={{ color: '#4A5568' }}>
              Your payment information is encrypted and secure
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <SupportIcon sx={{ fontSize: 40, color: '#008080', mb: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#073B4C' }}>
              24/7 Support
            </Typography>
            <Typography variant="body2" sx={{ color: '#4A5568' }}>
              Get help whenever you need it
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <VerifiedIcon sx={{ fontSize: 40, color: '#008080', mb: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#073B4C' }}>
              Money-Back Guarantee
            </Typography>
            <Typography variant="body2" sx={{ color: '#4A5568' }}>
              30-day satisfaction guarantee
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: 'center', color: '#008080' }}>
          <CheckCircleIcon sx={{ fontSize: 60, color: '#008080', mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Enrollment Successful!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
            Thank you for enrolling in Waati AI! We've sent a confirmation email with all the details.
          </Typography>
          <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="body2">
              <strong>Next Steps:</strong>
            </Typography>
            <Typography variant="body2">
              • Check your email for login credentials
            </Typography>
            <Typography variant="body2">
              • Join our WhatsApp group for updates
            </Typography>
            <Typography variant="body2">
              • Prepare for your first session
            </Typography>
          </Alert>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button
            variant="contained"
            onClick={() => {
              setShowSuccessDialog(false);
              navigate('/dashboard');
            }}
            sx={{
              backgroundColor: '#008080',
              '&:hover': { backgroundColor: '#006666' }
            }}
          >
            Go to Dashboard
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Enroll; 