import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const  About = (props) => {
    const  location = useLocation();
    const history = useHistory();
    return(
        <>
            <h1>My Name Is {props.name}</h1>
            <br/>
            <p1>My current location is {location.pathname }</p1>
            <br/>
            <button onClick ={()=>history.goBack()}>GoBack</button>
        </>
    );
}

export default About;