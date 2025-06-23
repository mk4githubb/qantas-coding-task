import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Loader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(118,116,116,0.8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <FlightTakeoffIcon sx={{ fontSize: 60, color: 'white', mb: 2 }} />
      <CircularProgress color="inherit" />
      <Typography variant="body1" sx={{ mt: 2, color: 'white' }}>
        Loading airports...
      </Typography>
    </Box>
  );
};

export default Loader;