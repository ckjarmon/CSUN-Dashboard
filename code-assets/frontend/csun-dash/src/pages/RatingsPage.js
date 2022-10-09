import Header from "../components/Header"
import ProfessorRatingsSearch from "../elements/Professor Ratings/ProfessorRatingsSearch"
import {useState} from "react"

function RatingsPage(){
    const [subject, setSubject] = useState("")
    const [professorSelected, setProfessorSelected] = useState("")
    const [professors, setProfessors] = useState([])

    const [enableSearch, setEnableSearch] = useState(false)

    function handleSubjectChange(event){
        setSubject(event.target.value)
        setEnableSearch(true)

        fetch(`http://127.0.0.1:8000/${event.target.value}/profname`)
        .then(response => response.json())
        .then(professorItems => {
            setProfessors(Object.values(professorItems))
        })


    }

    function handleProfessorChange(event){
        setProfessorSelected(event.target.value)
    }


    return(
        <div style={{backgroundColor: "#1C1C1C"}}>
            <Header></Header>
            <ProfessorRatingsSearch 
                handleSubjectChange={handleSubjectChange}
                handleProfessorChange={handleProfessorChange}
                subject={subject}
                professorSelected={professorSelected}
                professors={professors}
                enableSearch={enableSearch}
                >
            </ProfessorRatingsSearch>
        </div>
    )
}

export default RatingsPage