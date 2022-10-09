import AddClassesDropDown from "./AddClassesDropDown";
import DisplayCourses from "./DisplayCourses";
import {useState} from 'react'


function AddClasses(){
    const [searchDone, setSearchDone] = useState(null)
    const [term, setTerm] = useState("")
    const [subject, setSubject] = useState("")

    function searchDoneHandler(termSelected, subjectSelected){
        setTerm(termSelected)
        setSubject(subjectSelected)
        setSearchDone(true)
    }
    

    return(
        <div>
            <h2 style={sectionTitle}>Add Classes</h2>
            <AddClassesDropDown searchDone={searchDoneHandler}></AddClassesDropDown>
            {searchDone ? <DisplayCourses term={term} subject={subject}></DisplayCourses> : <div></div>}
        </div>
    )
}

export default AddClasses;

const sectionTitle = {
    color: "#E31C25",
    textAlign: "center"
}

