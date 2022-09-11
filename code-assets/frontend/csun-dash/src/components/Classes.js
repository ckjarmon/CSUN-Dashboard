import AddClassesFormFetch from '../elements/AddClassesFormFetch'
import AddClassesForm from '../elements/AddClassesForm';
function Classes(){
    return(
        <div id="classes" style={{height:"100vh", backgroundColor:"#1C1C1C", borderTop: "1px solid black", paddingTop:"25px"}}>
            <div>
                <div>
                    <h1 style={headerStyle}>Add Your Classes</h1>
                </div>

                <div>
                    <AddClassesFormFetch></AddClassesFormFetch>
                </div>
            </div>
        </div>
    )
}

export default Classes;

const headerStyle = {
    textAlign: "center",
    color: "white",
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
    fontSize: "50px"
}