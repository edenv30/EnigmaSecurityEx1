import React, { useState, useEffect } from 'react';

import util from '../utils/utils';

const Ex2 = () => {

    const [users, setUsers] = useState([]);
    const [usersAsync, setUsersAsync] = useState([]);

    useEffect( () => {
        async function fetchData() {
            // You can await here
            // setTimeout(setUsers(await util.getUsersData()), 3000);
            setUsers(await util.getUsersData());
            // ...
          }
          fetchData();
        

    },[]);

    useEffect( () => {
        async function fetchData() {
            var i;
            for(i = 0; i > users.length; i++) {
                console.log(users[i])
                setTimeout( () => {usersAsync.push(users[i])
                    setUsersAsync([...usersAsync, users[i]])
                    } ,3000 )
            }
        }
        fetchData();
        // const timer = setTimeout(() => {
        //     console.log('This will run after 1 second!')
        //   }, 1000);
        //   return () => clearTimeout(timer);
        // users.map(user => {
        //     setTimeout( (user) => {
        //         console.log(user)
        //         usersAsync.push(user)
        //     } ,3000)
        // })
    },[users])

    const asyncGetUsers = async () => {

    }

    return (
        <div>
            {
                (usersAsync.length > 0) ?
                  <ul>{usersAsync.map( (user, index) => <li key={index}>{user.name}<br />{user.email}</li> )}</ul>  : null
            }
        </div>
    )
}

export default Ex2;