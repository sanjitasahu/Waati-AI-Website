import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Courses from '../Courses';

describe('Courses Page', () => {
  const renderWithRouter = (component: React.ReactElement) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  it('renders the main heading', () => {
    renderWithRouter(<Courses />);
    expect(screen.getByText('Expert-Led AI Courses')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    renderWithRouter(<Courses />);
    expect(screen.getByText('Live, cohort-based, hands-on.')).toBeInTheDocument();
  });

  it('renders the tracks table', () => {
    renderWithRouter(<Courses />);
    expect(screen.getByText('Tracks & Syllabi')).toBeInTheDocument();
    expect(screen.getByText('AI Foundations')).toBeInTheDocument();
    expect(screen.getByText('Applied Gen AI')).toBeInTheDocument();
    expect(screen.getByText('MLOps Fast-Track')).toBeInTheDocument();
  });

  it('renders the pricing section', () => {
    renderWithRouter(<Courses />);
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText(/₹5,000 \/ learner \/ track/)).toBeInTheDocument();
    expect(screen.getByText(/Starts ₹1,00,000 for up to 25 learners/)).toBeInTheDocument();
  });

  it('renders the download syllabus button', () => {
    renderWithRouter(<Courses />);
    const downloadButton = screen.getByText('Download full syllabus (PDF)');
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton.closest('a')).toHaveAttribute('href', '/syllabus.pdf');
  });
}); 