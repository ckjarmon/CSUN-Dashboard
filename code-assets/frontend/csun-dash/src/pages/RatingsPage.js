import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import Header from "../components/Header"
import ProfessorRatingsHeader from "../elements/Professor_Search/ProfessorRatingsHeader";
import StudentRatings from "../elements/Professor_Search/StudentRatings";
import { Alert } from "@mui/material"

function RatingsPage() {
    const { subject, email } = useParams()
    const [allClassesInSubject, setAllClassesInSubject] = useState([])
    const [ratings, setRatings] = useState([])
    const [postedReview, setPostedReview] = useState(false)
    const [professor, setProfessor] = useState({})


    function fetchRatingsAndClasses() {
        fetch(`https://api.kyeou.xyz/${email}/ratings`)
            .then(response => response.json())
            .then(ratings => {
                let ratingsArray = []

                ratings.map((rating) => {
                    ratingsArray.push(rating)
                })

                setRatings(ratingsArray)
            })

        fetch(`https://api.kyeou.xyz/${subject}/classes`)
            .then(response => response.json())
            .then(classes => {
                let classesArray = []

                classes.map((classItem) => {
                    classesArray.push(classItem)
                })

                setAllClassesInSubject(classesArray)
            })
    }

    function fetchProfessor(){
        fetch(`https://api.kyeou.xyz/${subject}/professors`)
            .then(response => response.json())
            .then(professors => {
                professors.map((professor) => {
                    if(professor.email === email){
                        setProfessor(professor)
                    }
                })
            })
    }


    useEffect(() => {
        fetchRatingsAndClasses()
        fetchProfessor()
    }, [])

    useEffect(() => {
        fetchRatingsAndClasses()
    }, [postedReview])



    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
            <Header></Header>
            {
                postedReview === true ?
                    <Alert style={{ float: "right" }} variant="filled" severity="success">
                        Successfully Posted Review!
                    </Alert> : <div></div>
            }

            <div>
                <ProfessorRatingsHeader
                    ratings={ratings}
                    professorName={`${professor.first_name} ${professor.last_name}`}
                    postedReview={postedReview}
                    setPostedReview={setPostedReview}
                    subject={subject}
                    allClassesInSubject={allClassesInSubject}>
                </ProfessorRatingsHeader>
                <StudentRatings
                    subject={subject}
                    email={professor.email}
                    first_name={professor.first_name}
                    last_name={professor.last_name}
                    postedReview={postedReview}>
                </StudentRatings>
            </div>

        </div>
    )
}

export default RatingsPage