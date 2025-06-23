import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AirportListPage from './components/AirportList';
import AirportDetailsPage from './components/AirportDetails';
import AirportWrapper from './components/AirportWrapper';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<AirportWrapper />}>
              <Route index element={<AirportListPage />} />
              <Route path="airport/:airportCode" element={<AirportDetailsPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
