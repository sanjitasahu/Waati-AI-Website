import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainNav from '../MainNav';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('MainNav Component', () => {
  it('renders all navigation links', () => {
    renderWithRouter(<MainNav />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Courses')).toBeInTheDocument();
    expect(screen.getByText('Consulting')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
    expect(screen.getByText('NE India')).toBeInTheDocument();
  });

  it('renders links with correct href attributes', () => {
    renderWithRouter(<MainNav />);
    
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Courses').closest('a')).toHaveAttribute('href', '/courses');
    expect(screen.getByText('Consulting').closest('a')).toHaveAttribute('href', '/consulting');
    expect(screen.getByText('Growth').closest('a')).toHaveAttribute('href', '/growth');
    expect(screen.getByText('NE India').closest('a')).toHaveAttribute('href', '/north-east-india');
  });
}); 