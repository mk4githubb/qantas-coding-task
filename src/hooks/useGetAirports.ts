import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { Airport } from '../types/Airport';

const fetchAirports = async () => {
  try {
    // Fetching airport data from the Qantas API
    const response = await axios.get<Airport[]>('https://api.qantas.com/flight/refData/airport');
    console.log('Airports fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching airports:', error);
    throw new Error('Failed to fetch airports');
  }
};

export const useGetAirports = () => {
  return useQuery({
    queryKey: ['airports'],
    queryFn: fetchAirports,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
  });
};
