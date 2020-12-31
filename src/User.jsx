import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';


const User =() => {
    const {fname,lname} = useParams();
    // both should have same name parametrs which we pass at App.jsx file
    const location = useLocation();
    const history  = useHistory();
    return(
        <>
            <h1> Hey User {fname} {lname} </h1>
            <br/>
            <p>My current location is {location.pathname}</p>
            {location.pathname === `/user/meraj/alam` ?(
                <button on onClick = {()=> history.goBack()}>GoBack</button>
            ) : null }
        </>
    );

};
export default User;