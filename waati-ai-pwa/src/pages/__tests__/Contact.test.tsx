import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact Page', () => {
  it('renders the main heading', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Contact />);
    expect(screen.getByText('Get in touch with our team for any questions or inquiries.')).toBeInTheDocument();
  });

  it('renders the form fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello, this is a test message.' } });
    fireEvent.click(screen.getByText('Send Message'));
    await waitFor(() => {
      expect(screen.getByText('Thank you! Your message has been sent.')).toBeInTheDocument();
    });
  });
}); 