import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Service= (props) => {
    const location = useLocation();
    const history  = useHistory();
  return (
      <>
        <h2>Hey the service provided for only {props.name} </h2>
        <br/>
        <p1>My current location is {location.pathname }</p1>
        <br/>
        <button onClick ={()=>history.goBack()}>GoBack</button>
      </>
  )
};

export default Service;