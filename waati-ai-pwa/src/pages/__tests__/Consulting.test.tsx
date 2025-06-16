import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Consulting from '../Consulting';

describe('Consulting Page', () => {
  const renderWithRouter = (component: React.ReactElement) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  it('renders the main heading', () => {
    renderWithRouter(<Consulting />);
    expect(screen.getByText('AI Business Consulting')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    renderWithRouter(<Consulting />);
    expect(screen.getByText('Transform your org from pilot to production.')).toBeInTheDocument();
  });

  it('renders the engagement phases', () => {
    renderWithRouter(<Consulting />);
    expect(screen.getByText('3-Phase Engagement')).toBeInTheDocument();
    expect(screen.getByText('Opportunity Sprint')).toBeInTheDocument();
    expect(screen.getByText('Pilot Build & Deploy')).toBeInTheDocument();
    expect(screen.getByText('Enable & Scale')).toBeInTheDocument();
  });

  it('renders the ROI section', () => {
    renderWithRouter(<Consulting />);
    expect(screen.getByText('Typical ROI')).toBeInTheDocument();
    expect(screen.getByText('20% cost reduction in 120 days')).toBeInTheDocument();
  });

  it('renders the discovery call button', () => {
    renderWithRouter(<Consulting />);
    const callButton = screen.getByText('Book a 30-min discovery call');
    expect(callButton).toBeInTheDocument();
    expect(callButton.closest('a')).toHaveAttribute('href', '/contact');
  });
}); 