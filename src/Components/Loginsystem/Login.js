import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import login from '../images/login.png';
import Topnav from '../Shared/Topnav';
import Swal from 'sweetalert2';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const [error, setError] = useState({})
    const [success, setSuccess] = useState({});


    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);
        console.log(newLoginData)

    }
    const logout = e => {
        localStorage.removeItem('user');
        localStorage.removeItem('data');
        alert('logged out');
        e.preventDefault();


    }

    const handleLoginSubmit = e => {
        axios.post('http://localhost:8000/api/login', loginData)
            .then(res => {
                var token = res.data
                console.log(token);

                var user = { userId: token.userid, access_token: token.token };

                localStorage.setItem('user', JSON.stringify(user))
                console.log(JSON.parse(window.localStorage.getItem('user')))

                var data = { username: token.user.username, type: token.user.type }
                localStorage.setItem('data', JSON.stringify(data))
                console.log(JSON.parse(window.localStorage.getItem('data')))



                if (user.access_token !== undefined) {
                    Swal.fire({
                        position: 'top-mid',
                        icon: 'success',
                        title: 'Logget in success',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    setSuccess(token);
                    console.log(success);


                }
                else {
                    alert(token)
                    setError(token, 'error')


                }

            })
            .catch(function (error) {
                console.log(error);
            });
        e.preventDefault();


    }




    return (
        <Container>
            <Topnav></Topnav>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit} >

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Username"
                            name="username"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard" />

                        {

                            JSON.parse(window.localStorage.getItem('user')) !== null
                                ?


                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" onClick={logout}  >Logout</Button>

                                :

                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >Login</Button>


                        }


                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>


                    </form>
                    <p>------------------------</p>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;