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
            <CostAnalysis totalUnits={totalUnits}/>
            <DisplayClasses classesAdded={classesAdded} removeClassHandler={removeClassHandler}></DisplayClasses>
        </div>
    )
}

export default ClassSelections;
