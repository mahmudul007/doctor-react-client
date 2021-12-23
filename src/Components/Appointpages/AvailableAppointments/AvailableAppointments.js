import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import axios from 'axios';




const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);


    const [doctors, setDoctor] = useState([]);
    //find all products
    useEffect(() => {
        axios.get("http://localhost:8000/api/doctor/list")
            .then(resp => {
                // console.log(resp.data.alldoctor);
                setDoctor(resp.data.alldoctor);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Booking successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    doctors.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;