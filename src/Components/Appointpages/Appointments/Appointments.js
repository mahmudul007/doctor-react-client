import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Appointments = ({ date }) => {

    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/patient/patientList?${date}`)
            .then(resp => {
                console.log(resp.data.patientList);
                setAppointments(resp.data.patientList);

            }).catch(err => {
                alert('error');
                console.log(err);
            });
    }, [date]);


    return (
        <div>
            <h1>Appointments  {appointments.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.available}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right"> {row.date}</TableCell>

                                <TableCell align="right">{
                                    <Link to={`/dashboard/prescribe/${row.id}`}> <Button variant="contained"> Prescribe</Button> </Link>}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;