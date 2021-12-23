import React from 'react';
import Topnav from '../../Shared/Topnav';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Appointments from '../Appointments/Appointments';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';


const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Topnav></Topnav>
            < AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>


        </div>
    );
};

export default Appointment;