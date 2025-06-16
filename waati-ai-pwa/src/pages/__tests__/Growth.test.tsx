import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Growth from '../Growth';

describe('Growth Page', () => {
  const renderWithRouter = (component: React.ReactElement) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  it('renders the main heading', () => {
    renderWithRouter(<Growth />);
    expect(screen.getByText('Growth-Focused AI Program')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    renderWithRouter(<Growth />);
    expect(screen.getByText('Revenue-centric AI roll-outs')).toBeInTheDocument();
  });

  it('renders the features list', () => {
    renderWithRouter(<Growth />);
    expect(screen.getByText("What's inside")).toBeInTheDocument();
    expect(screen.getByText('KPI audit & model mapping')).toBeInTheDocument();
    expect(screen.getByText('Monthly A/B test loops')).toBeInTheDocument();
    expect(screen.getByText('GTM workflow automation (upsell, churn prediction)')).toBeInTheDocument();
    expect(screen.getByText('Executive dashboards & governance templates')).toBeInTheDocument();
  });

  it('renders the pricing tiers', () => {
    renderWithRouter(<Growth />);
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Starter')).toBeInTheDocument();
    expect(screen.getByText('Scale')).toBeInTheDocument();
    expect(screen.getByText('₹4,50,000')).toBeInTheDocument();
    expect(screen.getByText('₹9,00,000')).toBeInTheDocument();
  });

  it('renders the performance bonus text', () => {
    renderWithRouter(<Growth />);
    expect(screen.getByText('Performance bonus: 10% of verified cost-savings or revenue lift')).toBeInTheDocument();
  });

  it('renders the discovery call button', () => {
    renderWithRouter(<Growth />);
    const callButton = screen.getByText('Book a 30-min discovery call');
    expect(callButton).toBeInTheDocument();
    expect(callButton.closest('a')).toHaveAttribute('href', '/contact');
  });
}); 