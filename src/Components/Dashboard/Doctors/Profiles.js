import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Profiles = (props) => {
    const { doc_name } = props.pro;
    return (
        <>
            <Box>

                <Typography gutterBottom variant="h5" component="div">
                    {doc_name}
                </Typography>
            </Box>


        </>
    );
};

export default Profiles;