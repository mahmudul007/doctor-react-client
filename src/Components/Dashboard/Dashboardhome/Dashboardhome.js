import { Grid } from '@mui/material';
import * as React from 'react';
import Appointments from '../../Appointpages/Appointments/Appointments';
import Calender from '../../Shared/Calendar/Calendar';
import { setDate } from 'date-fns';

const Dashboardhome = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4} >
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>

            </Grid>
            <Grid item xs={12} sm={8}>
                <Appointments
                    date={date}
                ></Appointments>
            </Grid>

        </Grid>
    );
};

export default Dashboardhome;