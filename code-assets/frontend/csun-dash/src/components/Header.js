import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import {Link} from 'react-scroll'

function Header(props){
    return(
        <div style={{backgroundColor: "#1C1C1C", height: "100vh"}}>
            <div style={headerContainer}>
                <ul style={list}>
                    <li style={link}><Link to="classes" spy={true} smooth={true}>Start Planning</Link></li>
                    <li style={link}>Professor Ratings</li>
                    <li style={link}>Class search</li>
                    <li style={toprightContainer}>Sign in</li>
                </ul>
            </div>

            <div style={landingSectionContainer}>
                <div syle={landingSection}>
                    <h1 style={headerText}>The CSUN course planner <br></br> you've been looking for</h1>
                    <h3 style={headerparagraph}>Free online platform that provides college students like you <br></br> with the tools to effectively plan <br></br> your upcomming schedule</h3>
                    <Link to="classes" spy={true} smooth={true}><Button style={headerButton} variant="contained">Get Started</Button></Link>
                </div>
                <div style={imgContainer}>
                    <img style={imageStyle} src="https://stayhometogether.org/wp-content/uploads/2020/04/Oviatt-Library-Background-1-scaled.jpg"></img>
                </div>
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

const landingSectionContainer = {
    display: "flex",
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: "15vh",
}



const link = {
    textDecoration: 'none',
    display: 'inline',
    padding: '20px 20px',
    fontWeight: '700',
    fontSize: 'large',
    cursor: 'pointer'
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

const landingSection = {
    
}

const headerText = {
    textAlign: 'left',
    fontSize: '42px',
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
    lineHeight: "1.3", 
    textShadow: "0px 2px 1px #000000",
    letterSpacing: "-1.3px",
    marginBottom: "35px",
    color: "#BB000E"
}

const headerparagraph = {
    textAlign: 'left',
    fontSize: '20px',
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
    lineHeight: "1.5", 
    marginBottom: "40px",
    color: 'white'
}

const headerButton = {
    fontSize: '17px',
    fontWeight: "600",
    color: 'white',
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    color: "white",
    backgroundColor: "#E31C25",
}

const imgContainer = {
    marginLeft: "50px"
}

const imageStyle = {
    width: '540px',
    height: '320px',
    paddingTop: '10px',

}

