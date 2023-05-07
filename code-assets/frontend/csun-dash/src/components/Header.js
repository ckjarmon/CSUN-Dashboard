import { Link } from 'react-router-dom';
import './gradient.css';


function Header() {
    return (
        <div style={{ borderRadius: "30px", marginBottom: "5px" }}>
            <div style={logo}><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><img alt="Matalogo" src={require("../matador.png")} width="50" height="50" /></a></div>

            <div style={headerContainer}>
                <ul style={list}>

                    <div style={{ display: "inline" }} >
                        <Link style={link}
                            onMouseOver={(e) => { e.target.className = "gradient-animation" }}
                            onMouseOut={(e) => e.target.style.className = ""} to="/">Home</Link>
                    </div>
                    <div style={{ display: "inline" }}>
                        <Link style={link}
                            onMouseOver={(e) => { e.target.className = "gradient-animation" }}
                            onMouseOut={(e) => e.target.style.className = ""} to="/planner">Planner</Link>
                    </div>
                    <div style={{ display: "inline" }}>
                        <Link style={link}
                            onMouseOver={(e) => { e.target.className = "gradient-animation" }}
                            onMouseOut={(e) => e.target.style.className = ""} to="/majors">Majors</Link>
                    </div>
                    <div style={{ display: "inline" }}>
                        <Link style={link}
                            onMouseOver={(e) => { e.target.className = "gradient-animation" }}
                            onMouseOut={(e) => e.target.style.className = ""} to="/faculty">Faculty Members</Link>
                    </div>

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
    backgroundColor: "#4C4E52",
    borderShadow: "5px 10px black",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    outlineStyle: "solid",
    outlineColor: "red",
    width: "99.7vw",
    marginLeft: "3px"
}

const link = {
    marginLeft: '7px',
    marginRight: '7px',
    textAlign: "center",
    backgroundColor: "#D9001E",
    textDecoration: 'none',
    display: 'inline',
    padding: '5px 25px',
    fontWeight: '600',
    fontSize: '18px',
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
    width: "50px",
    height: "50px"
}


const list = {
    textAlign: 'center',
    justifyContent: "spaceBetween",
    display: "inlineBlock"
}

