import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import {Link} from 'react-router-dom'
import React from 'react';

function Header(props){
    return(
        <div style={{backgroundColor: "#1C1C1C"}}>
            <div style={headerContainer}>
                <ul style={list}>
                    <li style={link}><Link style={link} to="/">Home</Link></li>
                    <li style={link}><Link style={link} to="/planner">Planner</Link></li>
                    <li style={link}><Link style={link} to="/professor-search">Faculty Members</Link></li>
                    {/* <li style={link}>Class search</li> */}
                    <li style={link}><Link style={link} to="/signIn">Sign in</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;

const headerContainer = {
    paddingTop: '20px',
    paddingBottom: '20px',
    color: "white",
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
    backgroundColor: "black",
    borderShadow: "5px 10px black"
}

const link = {
    textDecoration: 'none',
    display: 'inline',
    padding: '20px 20px',
    fontWeight: '700',
    fontSize: 'large',
    cursor: 'pointer',
    color: "white"
}

const toprightContainer =  {
    float: 'right',
    display: 'inline',
    color: 'red',
    marginTop: 0,
    width: 100,
    cursor: 'pointer'
}

const list = {
    textAlign: 'center'
}

