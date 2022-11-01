import DisplayClasses from "./DisplayClasses";
import React from 'react';


function ClassSelections({classesAdded, removeClassHandler}){
    return(
        <div>
            <h2 style={sectionTitle}>Class Selections</h2>
            <DisplayClasses classesAdded={classesAdded} removeClassHandler={removeClassHandler}></DisplayClasses>
        </div>
    )
}

export default ClassSelections;

const sectionTitle = {
    color: "#E31C25",
    textAlign: "center"
}