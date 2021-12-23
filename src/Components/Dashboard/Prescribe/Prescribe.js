import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Prescribe = () => {

    const { id } = useParams();
    const [prescribe, setPrescribe] = useState({})
    // const initialInfo = { patientName: prescribe.patientName }
    const [update, updateData] = useState({});




    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;

        const newData = { ...update };
        newData[field] = value;

        updateData(newData);
        console.log(newData)

    }






    console.log(id);



    //find all products
    useEffect(() => {
        axios.get(`http://localhost:8000/api/patient/prescribe/${id}`)
            .then(resp => {
                console.log(resp.data.prescribe);
                setPrescribe(resp.data.prescribe)
            }).catch(err => {
                console.log(err);
            });
    }, []);
    //submit

    const handleUpdateSubmit = e => {
        // collect data
        const appointment = {
            ...update,



        }
        JSON.stringify(appointment)



        console.log(appointment);
        // send to the server
        axios.put(`http://localhost:8000/api/patient/bookupdate/${id}`, appointment)
            .then(function (response) {
                // console.log(response.data);
                alert('ok');


            })
            .catch(function (error) {
                console.log(error.message);
            });




        e.preventDefault();
    }



    return (
        <div>
            <h1>prescribe for :: {prescribe.patientName}</h1>
            <form onSubmit={handleUpdateSubmit}>




                <TextField

                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Prescribe"
                    name="prescribe"
                    placeholder='enter prescribed'
                    required
                    defaultValue={prescribe.prescribe}
                    onBlur={handleOnChange}

                    variant="standard" />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default Prescribe;