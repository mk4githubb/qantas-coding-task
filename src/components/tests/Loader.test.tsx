import { render, screen } from '@testing-library/react';
import Loader from '../Loader';
import '@testing-library/jest-dom';

describe('Loader', () => {
  it('renders loading spinner and text', () => {
    render(<Loader />);
    expect(screen.getByText(/loading airports/i)).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByTestId('FlightTakeoffIcon')).toBeInTheDocument();
  });
});
