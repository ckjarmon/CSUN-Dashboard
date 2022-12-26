import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

function LandingPageSeciong() {
    return (
        <div style={landingSectionContainer}>
            <div>
                <h1 style={headerText}>The CSUN course planner <br></br> you've been looking for</h1>
                <h3 style={headerparagraph}>Free online platform that provides college students like you <br></br> with the tools to effectively plan <br></br> your upcoming schedule</h3>
                <Link to="/planner"><Button style={headerButton} variant="contained">Get Started</Button></Link>
            </div>
            <div style={imgContainer}>
                <img style={imageStyle} src="https://stayhometogether.org/wp-content/uploads/2020/04/Oviatt-Library-Background-1-scaled.jpg"></img>
            </div>
        </div>
    )
}


export default LandingPageSeciong;

const landingSectionContainer = {
    display: "flex",
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: "15vh",
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
