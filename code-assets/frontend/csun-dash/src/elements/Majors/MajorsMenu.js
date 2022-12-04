import Header from "../../components/Header"
import { major_names } from "../../majorNames"
import { Link } from 'react-router-dom'


function MajorsMenu(){
    return(
        <div style={{ minHeight: "100vh", backgroundColor: "#1C1C1C" }}>
            <Header></Header>

            <div style={{ display: "flex", justifyContent: "center", paddingBottom: "25px", marginTop: "25px" }}>
                <h1 style={headerStyle}>Majors</h1>
            </div>

            <div style={{ display: "flex", justifyContent: "left", marginLeft:"200px"}}>
                <h1><Link style={link} to="/majors/cs">B.S., Computer Science</Link></h1>
            </div>


        </div>
    )
}

export default MajorsMenu

const headerStyle = {
    fontWeight: "bold",
    color: "#E31C25",
    fontSize: "40px"
}

const link = {
    color:"white"
}