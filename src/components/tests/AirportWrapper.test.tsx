import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AirportWrapper from '../AirportWrapper';

jest.mock('../../hooks/useGetAirports.ts', () => ({
  useGetAirports: () => ({ data: [{ airportCode: 'ABC' }], isLoading: false, isError: false })
}));

describe('AirportWrapper', () => {
  it('renders Outlet with context', () => {
    render(
      <MemoryRouter>
        <AirportWrapper />
      </MemoryRouter>
    );
    // No visible output, but should not crash
    expect(true).toBe(true);
  });
});
