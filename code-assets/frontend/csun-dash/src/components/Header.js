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
    paddingTop: '25px',
    paddingBottom: '20px',
    color: "black",
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
    backgroundColor: "black",
    borderShadow: "5px 10px black",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    outlineStyle: "solid",
    outlineColor: "red",
    width: "99.7vw",
    marginLeft: "3px"
}

const link = {
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

const logo = {
    textDecoration: 'none',
    marginTop: "5px",
    marginLeft: "15px",
    float: "left",
    paddingBottom: "10px",
    display: "inlineFlex",
    borderRadius: "40px",
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
    textAlign: 'center',
    justifyContent: "spaceBetween",
    display: "inlineBlock"
}

