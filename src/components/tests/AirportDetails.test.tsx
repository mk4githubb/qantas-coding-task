import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AirportDetails from '../AirportDetails';
import * as routerDom from 'react-router-dom';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ airportCode: 'ABC' }),
  useNavigate: () => mockNavigate,
  useOutletContext: () => ({ data: [], isLoading: false, isError: false }),
}));

describe('AirportDetails', () => {
  it('shows loader when loading', () => {
    jest
      .spyOn(routerDom, 'useOutletContext')
      .mockReturnValue({ data: [], isLoading: true, isError: false });
    render(<AirportDetails />);
    expect(screen.getByText(/loading airports/i)).toBeInTheDocument();
  });

  it('shows error when error', () => {
    jest
      .spyOn(routerDom, 'useOutletContext')
      .mockReturnValue({ data: [], isLoading: false, isError: true });
    render(<AirportDetails />);
    expect(screen.getByText(/error loading airport details/i)).toBeInTheDocument();
  });

  it('shows not found when airport missing', () => {
    jest
      .spyOn(routerDom, 'useOutletContext')
      .mockReturnValue({ data: [], isLoading: false, isError: false });
    render(<AirportDetails />);
    expect(screen.getByText(/airport not found/i)).toBeInTheDocument();
  });

  it('shows airport details', () => {
    const airport = {
      airportCode: 'ABC',
      city: { cityName: 'Sydney', cityCode: 'SYD' },
      country: { countryName: 'Australia', countryCode: 'AU' },
      region: { regionName: 'NSW', regionCode: 'NSW' },
      internationalAirport: true,
      domesticAirport: false,
      regionalAirport: false,
      onlineIndicator: true,
      eticketableAirport: true,
      location: { latitude: 1, longitude: 2 },
    };
    jest
      .spyOn(routerDom, 'useOutletContext')
      .mockReturnValue({ data: [airport], isLoading: false, isError: false });
    render(
      <MemoryRouter>
        <AirportDetails />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Sydney \(SYD\)/)).toBeInTheDocument();
    expect(screen.getByText(/Australia \(AU\)/)).toBeInTheDocument();
    expect(screen.getByText(/NSW \(NSW\)/)).toBeInTheDocument();
  });
});
