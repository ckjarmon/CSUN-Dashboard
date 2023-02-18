import DisplayClasses from "./DisplayClasses";
import CostAnalysis from './CostAnalysis';
import { useEffect, useState } from "react";


function ClassSelections({classesAdded, removeClassHandler}){
    const [totalUnits, setTotalUnits] = useState(0)

    useEffect(() => {
        //Do Class Cost Analysis here
        let units = 0
        classesAdded.map((section) => {
            units += parseInt(section.units)
        })
        setTotalUnits(units)
    }, [classesAdded])
    
    return(
        <div>
            {/* <h2 style={sectionTitle}>Class Selections</h2> */}
            <CostAnalysis totalUnits={totalUnits}/>
            <DisplayClasses classesAdded={classesAdded} removeClassHandler={removeClassHandler}></DisplayClasses>
        </div>
    )
}

export default ClassSelections;

const sectionTitle = {
    color: "#E31C25",
    textAlign: "center"
}