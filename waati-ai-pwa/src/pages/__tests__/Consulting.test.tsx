import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Consulting from '../Consulting';

describe('Consulting Page', () => {
  it('renders the main heading', () => {
    render(<Consulting />);
    expect(screen.getByText('AI Consulting Services')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Consulting />);
    expect(screen.getByText('Expert guidance on AI platform selection and automation implementation')).toBeInTheDocument();
  });

  it('renders the services section', () => {
    render(<Consulting />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('AI Platform Assessment')).toBeInTheDocument();
    expect(screen.getByText('Automation Strategy & Implementation')).toBeInTheDocument();
    expect(screen.getByText('AI Integration Consulting')).toBeInTheDocument();
    expect(screen.getByText('Team Training & Enablement')).toBeInTheDocument();
  });

  it('renders the platforms section', () => {
    render(<Consulting />);
    expect(screen.getByText('Platforms We Specialize In')).toBeInTheDocument();
    expect(screen.getByText('n8n')).toBeInTheDocument();
    expect(screen.getByText('Copilot Studio')).toBeInTheDocument();
  });

  it('renders the process section', () => {
    render(<Consulting />);
    expect(screen.getByText('Our Process')).toBeInTheDocument();
    expect(screen.getByText('Discovery & Assessment')).toBeInTheDocument();
    expect(screen.getByText('Platform Selection')).toBeInTheDocument();
  });

  it('renders the testimonials section', () => {
    render(<Consulting />);
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument();
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
    expect(screen.getByText('Rajesh Kumar')).toBeInTheDocument();
  });

  it('renders the why choose us section', () => {
    render(<Consulting />);
    expect(screen.getByText('Why Choose Waati AI')).toBeInTheDocument();
    expect(screen.getByText('Proven Results')).toBeInTheDocument();
    expect(screen.getByText('Technical Expertise')).toBeInTheDocument();
  });

  it('renders the discovery call button', () => {
    render(<Consulting />);
    const links = screen.getAllByRole('link');
    const found = links.some(link => within(link).queryByText(/book discovery call/i));
    expect(found).toBe(true);
  });

  it('renders the final CTA section', () => {
    render(<Consulting />);
    expect(screen.getByText('Ready to Transform Your Business with AI?')).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    const found = links.some(link => within(link).queryByText(/schedule your free discovery call/i));
    expect(found).toBe(true);
  });
}); 