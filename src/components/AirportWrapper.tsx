import { Outlet } from 'react-router-dom';
import { useGetAirports } from '../hooks/useGetAirports';

const AirportWrapper = () => {
  const { data, isLoading, isError } = useGetAirports();

  // Other common logic can be added here if needed

  return <Outlet context={{ data, isLoading, isError }} />;
};

export default AirportWrapper;
