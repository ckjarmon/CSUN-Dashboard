import React from 'react'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div style={{ backgroundColor: "#D9001E",alignItems:"bottom" }}>
        <footer clasName = "footer">
            <ul style={list}>
                <li style={link}><Link style={link} to="/">Home</Link></li>
                <li style={link}><Link style={link} to="/majors">Majors</Link></li>
                <li style={link}><Link style={link} to="/planner">Planner</Link></li>
                <li style={link}><Link style={link} to="/professor-search">Faculty Members</Link></li>
            </ul>
        </footer>
    </div>
    )
}
export default Footer;


const link = {
    marginLeft:'5px',
    marginRight:'5px',
    textAlign: "center",
   // backgroundColor: "#D9001E",
    textDecoration: 'underline',
    display: 'inline',
    padding: '5px 15px',
    fontWeight: '700',
    fontSize: 'medium',
    cursor: 'pointer',
    color: "white",
    height: "5px",
    borderRadius: "40px",
}


const list = {
    textAlign: 'center',
    justifyContent: "spaceBetween",
    display: "inlineBlock"
}
