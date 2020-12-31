import React from 'react';
import {NavLink}  from "react-router-dom";

const Menu = () => {
    return(
        <>
          <div className="menu_style">
            <NavLink exact activeClassName="active_class" to="/" > AboutUs</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact" > ContactUs</NavLink>
            <NavLink exact activeClassName="active_class" to="/service" > Services</NavLink>
            <NavLink exact activeClassName="active_class" to="/user/meraj/alam" > User</NavLink>
          </div>
        </>
    );
};

export default Menu;