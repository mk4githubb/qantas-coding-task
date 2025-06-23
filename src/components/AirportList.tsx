import Loader from './Loader';
import {Typography, Alert, List, ListItem, ListItemText, Grid, Pagination, Container} from '@mui/material';
import {useState} from 'react';
import {useNavigate, useOutletContext} from 'react-router-dom';
import type {Airport} from '../types/Airport';

const ITEMS_PER_PAGE = 8;

type ContextType = {
    data: Airport[];
    isLoading: boolean;
    isError: boolean;
};

const AirportList = () => {
    const {data, isLoading, isError} = useOutletContext<ContextType>();
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    if (isLoading) return <Loader/>;
    if (isError) {
        return (
            <Alert severity="error" sx={{mt: 2}}>
                Failed to load airports. Please try again later.
            </Alert>
        );
    }

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE) || 1;
    const paginatedData = data.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const handlePageChange = (_: unknown, value: number) => setPage(value);
    const handleListItemClick = (airportCode: string) => navigate(`/airport/${airportCode}`);

    return (
        <Container maxWidth="md" sx={{p: 2}}>
            <Typography variant="h4" gutterBottom>
                Airports
            </Typography>
            <List>
                {paginatedData.map(({airportCode, airportName, city, country}) => (
                    <ListItem
                        key={airportCode}
                        sx={{borderBottom: '1px solid #ddd', py: 0.5, cursor: 'pointer'}}
                        onClick={() => handleListItemClick(airportCode)}
                    >
                        <ListItemText
                            primary={<Typography variant="h5" gutterBottom component="span">{airportName}</Typography>}
                            secondary={
                                <Typography component="div" sx={{ mt: 2 /* optional margin-top */ }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <strong>Code:</strong> {airportCode}
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <strong>City:</strong> {city.cityName} ({city.cityCode})
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <strong>Country:</strong> {country.countryName} ({country.countryCode})
                                        </Grid>
                                    </Grid>
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                sx={{mt: 2, display: 'flex', justifyContent: 'center'}}
            />
        </Container>
    );
};

export default AirportList;