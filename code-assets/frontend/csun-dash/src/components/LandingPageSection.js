import { Link } from 'react-router-dom'
import './gradient.css'

function LandingPageSeciong() {
    return (
        <div style={landingSectionContainer}>
            <div>
                <h1 style={headerText}>The CSUN course planner <br></br> you've been looking for</h1>
                <h3 style={headerparagraph}>Free online platform that provides college students like you <br></br> with the tools to effectively plan <br></br> your upcoming schedule</h3>
                <Link className='get-started' to="/planner">Get Started</Link>
            </div>
            <div style={imgContainer}>
                <img style={imageStyle} alt="You found an easter egg, brag about it" src={require("../oviatt.jpg")}></img>
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

    lineHeight: "1.3",
    textShadow: "0px 2px 1px #000000",
    letterSpacing: "-1.3px",
    marginBottom: "35px",
    color: "white"
}

const headerparagraph = {
    textAlign: 'left',
    fontSize: '20px',
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
    backgroundColor: "#E31C25",
}

const imgContainer = {
    marginLeft: "50px"
}

const imageStyle = {
    width: '540px',
    height: '320px',
    paddingTop: '10px',
    borderRadius: "35px"

}
