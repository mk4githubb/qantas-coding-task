import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import type { Airport } from '../types/Airport';
import { useMemo } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Container,
  Button,
} from '@mui/material';
import Loader from './Loader';

type ContextType = {
  data: Airport[];
  isLoading: boolean;
  isError: boolean;
};

const AirportDetailsPage = () => {
  const { airportCode } = useParams();
  const { data, isLoading, isError } = useOutletContext<ContextType>();
  const navigate = useNavigate();

  const airport = useMemo(() => {
    if (!data || !airportCode) {
      return undefined;
    }
    return data.find((a) => a.airportCode === airportCode);
  }, [data, airportCode]);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Typography color="error" sx={{ mt: 2 }}>
        Error loading airport details.
      </Typography>
    );
  if (!airport) return <Typography sx={{ mt: 2 }}>Airport not found</Typography>;

  const boolCell = (val: boolean) => (val ? 'Yes' : 'No');
  const loc = airport.location;

  const details = [
    { label: 'City', value: `${airport.city.cityName} (${airport.city.cityCode})` },
    { label: 'Country', value: `${airport.country.countryName} (${airport.country.countryCode})` },
    { label: 'Region', value: `${airport.region.regionName} (${airport.region.regionCode})` },
    { label: 'International Airport', value: boolCell(airport.internationalAirport) },
    { label: 'Domestic Airport', value: boolCell(airport.domesticAirport) },
    { label: 'Regional Airport', value: boolCell(airport.regionalAirport) },
    { label: 'Online Indicator', value: boolCell(airport.onlineIndicator) },
    { label: 'eTicketable Airport', value: boolCell(airport.eticketableAirport) },
    { label: 'Latitude', value: `${loc.latitude}° ${loc.latitudeDirection}` },
    { label: 'Longitude', value: `${loc.longitude}° ${loc.longitudeDirection}` },
    { label: 'Above Sea Level', value: `${loc.aboveSeaLevel} m` },
  ];

  return (
    <Container maxWidth="md" sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        {airport.airportName} ({airport.airportCode})
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 800, mx: 'auto', mt: 3 }}>
        <Table size="small" aria-label="airport details">
          <TableBody>
            {details.map(({ label, value }) => (
              <TableRow key={label}>
                <TableCell>
                  <strong>{label}</strong>
                </TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{ mt: 3, display: 'block', mx: 'auto' }}
      >
        Back
      </Button>
    </Container>
  );
};

export default AirportDetailsPage;
