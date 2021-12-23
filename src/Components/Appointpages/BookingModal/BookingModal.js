import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    let user;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        user = obj.username;

    }
    const { doc_name, userid, name, available } = booking;

    const initialInfo = { username: user, doc_name: doc_name, available: available, doctoruserid: userid }

    const [bookingInfo, setBookinginfo] = useState(initialInfo);
    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;

        setBookinginfo(newInfo);
        // console.log(newInfo);

    }
    const handleBookingSubmit = e => {
        // collect data
        const appointment = {
            ...bookingInfo,

            date: date.toLocaleDateString()

        }
        JSON.stringify(appointment)



        console.log(appointment);
        // send to the server
        axios.post('http://localhost:8000/api/patient/booking', appointment)
            .then(function (response) {
                // console.log(response.data);
                alert('ok');
                handleBookingClose();
            })
            .catch(function (error) {
                console.log(error.message);
            });




        e.preventDefault();
    }


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={doc_name}
                            size="small"
                        // name='doc_name'
                        // onBlur={handleOnblur}
                        />
                        <TextField
                            disabled

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={available}
                            size="small"
                        // name='available'

                        // onBlur={handleOnblur}
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnblur}
                            size="small"
                            placeholder='enter patient name'
                        />
                        <TextField
                            disabled

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user}
                            size="small"
                        />
                        <TextField
                            type="number"
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnblur}
                            defaultValue="Phone Number"
                            size="small"
                            placeholder='number press'

                        />

                        <TextField

                            disabled
                            type="number"



                            sx={{ width: '90%', m: 1, }}
                            id="outlined-size-small"
                            // name="doctoruserid"
                            // onBlur={handleOnblur}
                            defaultValue={userid}
                            size="small"
                        />
                        <TextField

                            disabled

                            name="time"
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"


                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;