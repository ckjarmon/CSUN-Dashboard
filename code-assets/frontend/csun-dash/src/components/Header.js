import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div style={{ backgroundColor: "#1C1C1C" }}>
            <img style={logo} src={require("../matador.png")} alt="MatadorLogo" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="50" height="50" ></img>
            <div style={headerContainer}>
                <ul style={list}>
                    <li style={link}><Link style={link} to="/">Home</Link></li>
                    <li style={link}><Link style={link} to="/majors">Majors</Link></li>
                    <li style={link}><Link style={link} to="/planner">Planner</Link></li>
                    <li style={link}><Link style={link} to="/professor-search">Faculty Members</Link></li>
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

const logo = {
    textDecoration: 'none',
    marginTop: "9px",
    paddingLeft: "9px",
    float: "left",
    paddingBottom: "10px",
    display: "inlineFlex"
}

const toprightContainer = {
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

