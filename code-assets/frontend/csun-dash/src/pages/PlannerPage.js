import Header from "../components/Header";
import Footer from '../components/Footer';
import AddClasses from "../elements/Add_Classes/AddClasses";
import ClassSelections from "../elements/Class_Selections/ClassSelections";
import { useState } from 'react'

function PlannerPage({ handleAlert }) {
    const [addedClasses, setAddedClasses] = useState([])

    const [addedClassIcon, setAddedClassIcon] = useState({})

    function doesClassConflict(event) {
        for (let i = 0; i < addedClasses.length; i++) {
            let new_start = event.start_time.substring(0, event.start_time.length - 3)
            let new_end = event.end_time.substring(0, event.end_time.length - 3)

            let added_start = addedClasses[i].start_time.substring(0, addedClasses[i].start_time.length - 3)
            let added_end = addedClasses[i].end_time.substring(0, addedClasses[i].end_time.length - 3)

            if (new_start >= added_start && new_start < added_end) {return true}
            if (new_end > added_start && new_end <= added_end) {return true}

            if (added_start >= new_start && added_start < new_start) {return true}
            if (added_end > new_start && added_end <= new_end) {return true}

            if (event.catalog_number === addedClasses[i].catalog_number) { return true }
        }
        return false
    }

    function handleClassAdded(event) {
        if (!addedClassIcon[event.class_number]) {
            if (!doesClassConflict(event)) {
                setAddedClassIcon({
                    ...addedClassIcon,
                    [event.class_number]: !addedClassIcon[event.class_number]
                })
                setAddedClasses(oldArray => [...oldArray, event])
                console.log(event)
                handleAlert({ severity: "success", message: "Class has been added to your planner." })
            } else {
                handleAlert({ severity: "error", message: "This class conflicts with current schedule!" })
                console.log("This class conflicts with current schedule!")
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
    document.body.style.overflow = 'hidden';
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
    height: '95vh',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#000000",
}

const coursesContainer = {
    // height: '94vh',
    width: '50vw',
    borderRight: '1px solid white',
    borderBottom: '1px solid white',
    overflow: 'auto'
}

const selectionsContianer = {
    // height: '94vh',
    width: '50vw',
    borderLeft: '1px solid white',
    borderBottom: '1px solid white',
    overflow: 'auto'
}