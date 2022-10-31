import Header from "../components/Header"
import ProfessorRatingsSearch from "../elements/Professor Ratings/ProfessorRatingsSearch"
import {useEffect, useState} from "react"
import ProfessorHeader from "../elements/Professor Ratings/ProfessorHeader"
import StudentReviews from "../elements/Professor Ratings/SudentReviews"
import { Alert } from "@mui/material"

function RatingsPage(){
    const [subject, setSubject] = useState("")
    const [professorSelected, setProfessorSelected] = useState("")
    const [professors, setProfessors] = useState([])
    const [allClassesInSubject, setAllClassesInSubject] = useState([])

    const [postedReview, setPostedReview] = useState(false)

    // const [classesTaught, setClassesTaught] = useState([])
    // const [ratings, setRatings] = useState([])
    
    const [enableSearch, setEnableSearch] = useState(false)

    function handleSubjectChange(event){
        setSubject(event.target.value)
        setEnableSearch(true)

        fetch(`http://127.0.0.1:5000/${event.target.value}/profname`)
        .then(response => response.json())
        .then(professorItems => {
            setProfessors(Object.values(professorItems))
        })

        fetch(`http://127.0.0.1:5000/${event.target.value}/classes`)
        .then(response => response.json())
        .then(classes => {
            let classesArray = []

            classes.map((classItem) => {
                classesArray.push(classItem)
            })

            setAllClassesInSubject(classesArray)
        })


    }

    function handleProfessorChange(event){
        setProfessorSelected(event.target.value)
    }

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:5000/${professorSelected}/rating`)
    //     .then(response => response.json())
    //     .then(professorHistory => {
            
    //     })

    // }, [professorSelected])

    return(
        <div style={{minHeight: "100vh", backgroundColor:"#1C1C1C"}}>
            <div>
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
                {
                    postedReview == true ?
                        <Alert style={{float:"right"}} variant="filled" severity="success">
                            Successfully Posted Review!
                        </Alert> : <div></div>
                }
                {professorSelected.length > 0 ? 
                    <div>
                        <ProfessorHeader 
                            professorSelected={professorSelected} 
                            subject={subject} 
                            setPostedReview={setPostedReview}
                            allClassesInSubject={allClassesInSubject}>
                        </ProfessorHeader> 
                        <StudentReviews subject={subject} professorSelected={professorSelected} postedReview={postedReview}></StudentReviews>
                    </div> : <div></div>
                }
            </div>
        </div>
    )
}

export default RatingsPage