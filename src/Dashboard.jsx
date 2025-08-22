import React from 'react';
import { Navigate } from 'react-router';
import Button from './Button';
import WithUser from './WithUser';

function Dashboard({user,setUser}) {
    if(!user){
        return <Navigate to="/login"/>
    }
    return <>
        <div className='text-red-500 text-3xl'>WELCOME!! { user.full_name}</div>
        <Button onClick={()=>{
            localStorage.removeItem("token");
            setUser(undefined);
        }}>Logout</Button>
    </>
}
export default WithUser(Dashboard);