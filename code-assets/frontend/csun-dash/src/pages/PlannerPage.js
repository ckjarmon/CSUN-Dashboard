import Header from "../components/Header";
import AddClasses from "../elements/Add_Classes/AddClasses";
import ClassSelections from "../elements/Class_Selections/ClassSelections";
import { useState } from 'react'

function PlannerPage() {
    const [addedClasses, setAddedClasses] = useState([])

    const [addedClassIcon, setAddedClassIcon] = useState({})

    function classAlreadyAdded(event) {
        for (let i = 0; i < addedClasses.length; i++) {
            if (event.catalog_number === addedClasses[i].catalog_number) {
                return true
            }
        }
        return false
    }

    function handleClassAdded(event) {
        if (!addedClassIcon[event.class_number]) {
            if (!classAlreadyAdded(event)) {
                setAddedClassIcon({
                    ...addedClassIcon,
                    [event.class_number]: !addedClassIcon[event.class_number]
                })
                setAddedClasses(oldArray => [...oldArray, event])
            } else {
                console.log("This Class Is Already Added To Your Schedule!")
            }
        } else {

        }
    }

    function handleClassRemoved(event) {
        let filteredClasses = addedClasses.filter(classItem => classItem.class_number !== event.class_number)
        setAddedClasses(filteredClasses)

        setAddedClassIcon({
            ...addedClassIcon,
            [event.class_number]: !addedClassIcon[event.class_number]
        })
    }

    console.log(addedClasses)

    return (
        <div>
            <Header></Header>
            <div style={container}>
                <div style={coursesContainer}>
                    <AddClasses addIcon={addedClassIcon} addedClassHandler={handleClassAdded}></AddClasses>
                </div>
                <div style={selectionsContianer}>
                    <ClassSelections classesAdded={addedClasses} removeClassHandler={handleClassRemoved}></ClassSelections>
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