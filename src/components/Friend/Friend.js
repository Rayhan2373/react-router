import React, { useEffect, useState } from 'react';
import Fd from '../Fd/Fd';

const Friend = () => {
    const [users, setUsers] = useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res=>res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h1>friend : {users.length} </h1>
            {
                users.map(user =><Fd key = {user.id} user = {user}></Fd>)

            }
        </div>
    );
};

export default Friend;