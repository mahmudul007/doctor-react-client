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


const Doctors = () => {

    const [doctors, setDoctor] = React.useState([]);
    //find all products
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/doctor/list")
            .then(resp => {
                setDoctor(resp.data.alldoctor);
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
            <h2>Doctors</h2>
            <Grid >

                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="customized table">
                        <TableHead>
                            <TableRow>

                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Active</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {doctors.map((row) => (
                                <StyledTableRow key={row.userid}>

                                    <StyledTableCell align="left">{row.doc_name}</StyledTableCell>
                                    <StyledTableCell align="left">{row.available}</StyledTableCell>

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
export default Doctors
