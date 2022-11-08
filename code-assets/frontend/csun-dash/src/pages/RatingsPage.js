import {useParams} from "react-router-dom";
import {useState, useEffect} from 'react'
import Header from "../components/Header"
import ProfessorRatingsHeader from "../elements/Professor Search/ProfessorRatingsHeader";
import StudentRatings from "../elements/Professor Search/StudentRatings";
import { Alert  } from "@mui/material"
import React from 'react';

function RatingsPage(){
    const {subject, first_name, last_name} = useParams()
    const [allClassesInSubject, setAllClassesInSubject] = useState([])
    const [ratings, setRatings] = useState([])
    const [postedReview, setPostedReview] = useState(false)


    function fetchRatingsAndClasses(){
        fetch(`http://127.0.0.1:5000/${subject}/rating/${first_name}/${last_name}`)
        .then(response => response.json())
        .then(ratings => {
            let ratingsArray = []

            ratings.map((rating) => {
                ratingsArray.push(rating)
            })
            
            setRatings(ratingsArray)
        })

        fetch(`http://127.0.0.1:5000/${subject}/classes`)
        .then(response => response.json())
        .then(classes => {
            let classesArray = []

            classes.map((classItem) => {
                classesArray.push(classItem)
            })

            setAllClassesInSubject(classesArray)
        })
    }


    useEffect(() => {
        fetchRatingsAndClasses()
    }, [])

    useEffect(() => {
        fetchRatingsAndClasses()
    }, [postedReview])

    

    return(
        <div style={{minHeight: "100vh", backgroundColor:"#1C1C1C"}}>
            <Header></Header>
            {
                postedReview == true ?
                    <Alert style={{float:"right"}} variant="filled" severity="success">
                        Successfully Posted Review!
                    </Alert> : <div></div>
            }

            <div>
                <ProfessorRatingsHeader 
                    ratings={ratings}
                    professorName={`${first_name} ${last_name}`} 
                    postedReview={postedReview}
                    setPostedReview={setPostedReview}
                    subject={subject}
                    allClassesInSubject={allClassesInSubject}>
                </ProfessorRatingsHeader> 
                <StudentRatings 
                    subject={subject} 
                    first_name={first_name}
                    last_name={last_name} 
                    postedReview={postedReview}>
                </StudentRatings>
            </div>

        </div>
    )
}

export default RatingsPage