import { useQuery } from 'react-query';
import axios from 'axios';

// Define TypeScript types for the fetched data
interface StockData {
  id: number;
  name: string;
  price: number;
  change: string;
}

const fetchStocks = async (): Promise<StockData[]> => {
  const response = await axios.get('https://fakestoreapi.com/products'); // Replace with a real API endpoint if available
  // Mock response structure for example purposes
  return [
    { id: 1, name: 'Netflix', price: 5690.00, change: 'up' },
    { id: 2, name: 'Microsoft', price: 2690.00, change: 'down' },
    { id: 3, name: 'Tesla', price: 7690.00, change: 'up' }
  ];
};

export const useStocks = () => {
  return useQuery<StockData[]>('stocks', fetchStocks, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: true,
    refetchInterval: 10000, // Poll every 10 seconds
    refetchOnReconnect: true,
  });
};
