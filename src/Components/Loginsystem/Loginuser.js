import React from 'react';

const Loginuser = () => {
    const logInuser = () => {
        let user;
        if (localStorage.getItem('user')) {
            var obj = JSON.parse(localStorage.getItem('user'));
            user = obj.username;
            return user;
        }



    }

    return (
        logInuser
    );
};

export default Loginuser;