import Header from "../components/Header";
import AddClasses from "../elements/Add Classes/AddClasses";
import ClassSelections from "../elements/Add Classes/ClassSelections";

function PlannerPage(){
    return(
        <div>
            <Header></Header>
            <div style={container}>
                <div style={coursesContainer}>
                    <AddClasses></AddClasses>
                </div>
                <div style={selectionsContianer}>
                    <ClassSelections/>
                </div>
            </div>
        </div>
    )
}

export default PlannerPage;


const container = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#1C1C1C"
}

const coursesContainer = {
    height: '92vh',
    width: '50vw',
    border: '1px solid black',
    overflow: 'auto'
}

const selectionsContianer = {
    height: '92vh',
    width: '50vw',
    border: '1px solid black',
    overflow: 'auto'
}