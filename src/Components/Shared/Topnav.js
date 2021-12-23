import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
const logout = e => {
    localStorage.removeItem('user');
    localStorage.removeItem('data');
    alert('logged out');
    e.preventDefault();


}
var admin = null;
if (localStorage.getItem('data')) {
    var obj = JSON.parse(localStorage.getItem('data'));
    if (obj.type === 'doctor') {
        admin = obj.type;
    }
}

const Topnav = () => {
    return (
        <div>
            {
                JSON.parse(window.localStorage.getItem('user')) == null ?

                    <NavLink to={'/login'}>  <Button variant="contained">Log in</Button></NavLink>
                    :
                    <Button onClick={logout} variant="contained">Log out</Button>




            }



            {

                admin ?
                    <NavLink to={'/dashboard'}>  <Button variant="contained">Dash Board</Button></NavLink>


                    :

                    <NavLink to={'/'}>  <Button variant="contained">Blogs</Button></NavLink>




            }


            <NavLink to={'/'}>  <Button variant="contained">Home</Button></NavLink>
            <NavLink to={'/appointment'}>  <Button variant="contained">Appointment</Button></NavLink>
            <NavLink to={'/profile'}>  <Button variant="contained">Profile</Button></NavLink>




        </div>
    );
};

export default Topnav;