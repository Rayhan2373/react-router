import React from 'react';
import { useNavigate } from 'react-router';

const Fd = (props) => {
    const { name , id,  username} = props.user
    const navigate = useNavigate()
    const fdDetails=()=>{
        const path = `/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h1> Name : {name}</h1>
            <button onClick={fdDetails}> {username} id : {id}</button>
        </div>
    );
};

export default Fd;