import React from 'react';
import AppointmentBanner from '../Appointment/Appointmentbanner';
import Banner from '../Banner/Banner';
import Topnav from '../Shared/Topnav';

const Home = () => {
    return (
        <div>
            <Topnav></Topnav>
            <Banner></Banner>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;