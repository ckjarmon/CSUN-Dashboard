import { useEffect, useState } from "react"

function StudentReviews({subject, professorSelected}){
    const [reviews, setReviews] = useState([])
    const [coures, setCourses] = useState([])
 
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/${subject}/rating`)
        .then(response => response.json())
        .then(reviews => {
            let reviewArray = []
            let classArray = []
            
            reviews[professorSelected].flat().map((review) => {
                reviewArray.push(review)
                classArray.push(review.catalog_number)
            })

            let uniqueClassArray = []
            
            classArray.forEach(function(item) {
                if(uniqueClassArray.indexOf(item) < 0) {
                    uniqueClassArray.push(item);
                }
           });
            setReviews(reviewArray)
            setCourses(uniqueClassArray)
        })
    }, [subject, professorSelected])

    return(
        <div>
            <div style={{display:"flex", justifyContent:"center", paddingBottom:"25px", marginTop:"25px"}}>
                <h1 style={headerStyle}>Student Ratings</h1>
            </div>

           

        </div>
    )
}

export default StudentReviews


const headerStyle = {
    fontWeight:"bold", 
    color: "#E31C25", 
}