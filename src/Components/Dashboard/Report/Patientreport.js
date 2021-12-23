import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Grid } from '@mui/material';


const Patientreport = () => {

    const [doctors, setDoctor] = React.useState([]);
    //find all products
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/patient/prescribed")
            .then(resp => {
                setDoctor(resp.data.patientList);
            }).catch(err => {
                console.log(err);
            });
    }, []);
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 5,
        },
    }));


    return (
        <>
            <Grid item xs={8}>

                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="customized table">
                        <TableHead>
                            <TableRow>

                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Number</StyledTableCell>
                                <StyledTableCell align="left">Prescribe Date</StyledTableCell>
                                <StyledTableCell align="left">Prescribe</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {doctors.map((row) => (
                                <StyledTableRow key={row.userid}>

                                    <StyledTableCell align="left">{row.patientName}</StyledTableCell>
                                    <StyledTableCell align="left">{row.phone}</StyledTableCell>
                                    <StyledTableCell align="left">{row.updated_at}</StyledTableCell>
                                    <StyledTableCell align="left">{row.prescribe}</StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    );
}
    ;
export default Patientreport
