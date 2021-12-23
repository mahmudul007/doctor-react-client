import axios from 'axios';
import React, { useState } from 'react';

const Test = () => {
    const [profile, setProfile] = useState({});
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/doctor/profile")
            .then(resp => {
                console.log(resp.data.profile);
                setProfile(resp.data.profile)
            }).catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <h1>Testing</h1>

        </div>
    );
};

export default Test;