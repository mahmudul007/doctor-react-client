import { Container, Grid } from '@mui/material';
import React from 'react';
import Doctors from '../Doctors/Doctors';
import Reports from './Reports';

const Report = () => {
    return (
        <Container style={{ display: 'flex', height: '100%' }}>
            <div >

                <Doctors></Doctors>
            </div>


            <div>

                <Reports></Reports>
            </div>

        </Container>

    );
};

export default Report;