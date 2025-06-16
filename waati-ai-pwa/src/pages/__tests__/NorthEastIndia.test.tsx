import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NorthEastIndia from '../NorthEastIndia';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('NorthEastIndia Page', () => {
  it('renders the main heading', () => {
    renderWithRouter(<NorthEastIndia />);
    expect(screen.getByText('AI for North-East India Schools')).toBeInTheDocument();
  });

  it('renders the sub-headline', () => {
    renderWithRouter(<NorthEastIndia />);
    expect(screen.getByText('Board-aligned live classes broadcast from Canada, rooted in Assamese values.')).toBeInTheDocument();
  });

  it('renders the demo form section', () => {
    renderWithRouter(<NorthEastIndia />);
    expect(screen.getByText('Book a Free Demo')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('School')).toBeInTheDocument();
    expect(screen.getByLabelText('State')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByLabelText('Preferred Demo Date')).toBeInTheDocument();
  });

  it('renders state tabs', () => {
    renderWithRouter(<NorthEastIndia />);
    expect(screen.getByText('Assam')).toBeInTheDocument();
    expect(screen.getByText('Meghalaya')).toBeInTheDocument();
    expect(screen.getByText('Manipur')).toBeInTheDocument();
    expect(screen.getByText('Nagaland')).toBeInTheDocument();
    expect(screen.getByText('Tripura')).toBeInTheDocument();
    expect(screen.getByText('Arunachal Pradesh')).toBeInTheDocument();
    expect(screen.getByText('Mizoram')).toBeInTheDocument();
    expect(screen.getByText('Sikkim')).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    renderWithRouter(<NorthEastIndia />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('How does this fit SEBA\'s AI elective?')).toBeInTheDocument();
    expect(screen.getByText('What if our internet is slow?')).toBeInTheDocument();
    expect(screen.getByText('Is there teacher training included?')).toBeInTheDocument();
    expect(screen.getByText('Pricing in ₹ and CA$?')).toBeInTheDocument();
  });

  it('renders case study teaser', () => {
    renderWithRouter(<NorthEastIndia />);
    expect(screen.getByText('"30% jump in STEM interest at DPS Guwahati after pilot"')).toBeInTheDocument();
    expect(screen.getByText('Read full story →')).toBeInTheDocument();
  });
}); 