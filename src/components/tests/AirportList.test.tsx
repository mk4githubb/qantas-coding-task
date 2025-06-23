import { render, screen, fireEvent } from '@testing-library/react';
import AirportList from '../AirportList';
import * as routerDom from 'react-router-dom';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useOutletContext: () => ({ data: [], isLoading: false, isError: false }),
}));

describe('AirportList', () => {
  it('shows loader when loading', () => {
    jest
      .spyOn(routerDom, 'useOutletContext')
      .mockReturnValue({ data: [], isLoading: true, isError: false });
    render(<AirportList />);
    expect(screen.getByText(/loading airports/i)).toBeInTheDocument();
  });

  it('shows error when error', () => {
    jest
      .spyOn(routerDom, 'useOutletContext')
      .mockReturnValue({ data: [], isLoading: false, isError: true });
    render(<AirportList />);
    expect(screen.getByText(/failed to load airports/i)).toBeInTheDocument();
  });

  it('shows empty list when no airports', () => {
    jest
      .spyOn(routerDom, 'useOutletContext')
      .mockReturnValue({ data: [], isLoading: false, isError: false });
    render(<AirportList />);
    expect(screen.getByText(/airports/i)).toBeInTheDocument();
  });

  it('shows paginated airports and handles click', () => {
    const airports = Array.from({ length: 10 }, (_, i) => ({
      airportCode: `CODE${i}`,
      airportName: `Airport ${i}`,
      city: { cityName: 'City', cityCode: 'C' },
      country: { countryName: 'Country', countryCode: 'CO' },
    }));
    jest
      .spyOn(routerDom, 'useOutletContext')
      .mockReturnValue({ data: airports, isLoading: false, isError: false });
    render(<AirportList />);
    expect(screen.getByText('Airport 0')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Airport 0'));
    expect(mockNavigate).toHaveBeenCalledWith('/airport/CODE0');
  });
});
