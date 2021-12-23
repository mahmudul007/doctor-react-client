import axios from 'axios';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img from '../../Picture/profilepicture.jpg';
import Profiles from './Profiles';
import Topnav from '../../Shared/Topnav';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const Profile = () => {
    const [profile, setProfile] = useState([]);
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/doctor/profile")
            .then(resp => {

                setProfile(resp.data.profile)
                console.log(resp.data.profile);
            }).catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <Topnav></Topnav>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        {
                            profile.map(user =>

                                <div
                                    key={user.userid}
                                >
                                    <Box>

                                        <Typography gutterBottom variant="h3" component="div">
                                            {user.doc_name}
                                            <Typography gutterBottom variant="h5" component="div"> {user.description}</Typography>
                                        </Typography>
                                        <div >
                                            <Card sx={{
                                                maxWidth: 345,
                                                mx: 'auto',



                                            }}>
                                                <CardMedia
                                                    component="img"
                                                    height='50%'
                                                    image={img}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {user.doc_name}
                                                    </Typography>

                                                    <Typography variant="body2" color="text.secondary">
                                                        {user.description}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Department:  {user.dept}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Availble:  {user.available}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions >
                                                    <Button disabled variant='contained ' size="small">Edit</Button>

                                                </CardActions>
                                            </Card>

                                        </div>
                                    </Box>


                                </div>


                            )

                        }


                    </Grid>
                    <Grid item xs={4}>
                        <img style={{ width: '100%' }} src={img} alt="" />

                    </Grid>
                </Grid>
            </Box >
        </>
    );
};

export default Profile;