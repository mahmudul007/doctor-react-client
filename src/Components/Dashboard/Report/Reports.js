import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2'


const Reports = () => {
    const [total, setTotal] = useState();




    const [reportinfo, setreportinfo] = useState({});
    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reportinfo };
        newInfo[field] = value;

        setreportinfo(newInfo);
        console.log(newInfo);

    }
    const handleBookingSubmit = e => {
        // collect data
        const appointment = {
            ...reportinfo

        }
        JSON.stringify(appointment)



        console.log(appointment);
        // send to the server
        axios.post('http://localhost:8000/api/report', appointment)
            .then(function (response) {
                console.log(response.data);
                setTotal(response.data)

                Swal.fire({
                    position: 'top-mid',
                    icon: 'success',
                    title: 'Your report is made',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(function (error) {
                console.log(error.message);
            });




        e.preventDefault();
    }



    return (
        <Grid >
            <Box >
                <h3>See Total  Patient:</h3>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        type='date'
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="start_date"
                        onChange={handleOnblur}
                        size="small"

                    />
                    <TextField
                        type='date'
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="end_date"
                        onChange={handleOnblur}
                        size="small"

                    />
                    <Button type="submit" variant="contained">Submit</Button>
                </form >

            </Box>
            <Grid>
                <h2>Total:{total}</h2>
            </Grid>
        </Grid>
    );
};

export default Reports;