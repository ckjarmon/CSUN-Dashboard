import React from 'react'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div srtyle={{height: "100vh"}}>
        <footer style={footerContainer} className = "footer">
            <ul style={list}>
                <li style={link}><Link style={link} to="/">Home</Link></li>
                <li style={link}><Link style={link} to="/majors">Majors</Link></li>
                <li style={link}><Link style={link} to="/planner">Planner</Link></li>
                <li style={link}><Link style={link} to="/faculty">Faculty Members</Link></li>
            </ul>
        </footer>
    </div>
    )
}
export default Footer;


const footerContainer = {
    position:"fixed", 
    bottom:"0",
    paddingTop: '25px',
    paddingBottom: '20px',
    color: "black",
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
    backgroundColor: "black",
    borderShadow: "5px 10px black",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    outlineStyle: "solid",
    outlineColor: "red",
    width: "99.7vw",
    marginLeft: "3px"
    
}

const link = {
    marginLeft:'5px',
    marginRight:'5px',
    textAlign: "center",
    backgroundColor: "#D9001E",
    textDecoration: 'none',
    display: 'inline',
    padding: '5px 15px',
    fontWeight: '700',
    fontSize: 'large',
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
