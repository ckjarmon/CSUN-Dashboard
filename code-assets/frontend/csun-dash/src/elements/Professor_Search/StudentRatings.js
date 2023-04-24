import { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function StudentRatings({ subject, email, first_name, last_name, postedReview }) {
    const [reviews, setReviews] = useState([])
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/${email}/ratings`)
            .then(response => response.json())
            .then(reviews => {
                if (!reviews.length) {
                    setReviews([])
                    setCourses([])
                } else {
                    let reviewArray = []
                    let classArray = []

                    reviews.map((review) => {
                        reviewArray.unshift(review)
                        classArray.unshift(review.catalog_number)
                    })

                    let uniqueClassArray = []

                    classArray.forEach(function (item) {
                        if (uniqueClassArray.indexOf(item) < 0) {
                            uniqueClassArray.push(item);
                        }
                    });
                    setReviews(reviewArray)
                    setCourses(uniqueClassArray)
                }
            })
    }, [subject, first_name, postedReview])

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", paddingBottom: "25px", marginTop: "25px" }}>
                <u style={headerStyle}>Student Reviews</u>
            </div>

            {reviews.length > 0 ?
                reviews.map((review, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "center", paddingBottom: "25px", marginTop: "25px" }}>
                        <Card style={{ width: "1000px", backgroundColor: "#4C4E52", borderRadius: "25px" }}>
                            <CardContent>
                                <div style={{ display: "flex",padding: "25px", marginTop: "25px", color: "white" }}>
                                    <div>
                                        <Typography style={ratingHeaderStyle} variant="h5" component="div">Rating</Typography>
                                        <div style={ratingContainer}><h2 style={ratingStyle}>{review.star_rating}/5</h2></div>
                                        <br></br>
                                        <Typography style={ratingHeaderStyle} variant="h5" component="div">Difficulty</Typography>
                                        <div style={ratingContainer}><h2 style={difficultyStyle}>{review.difficulty}/5</h2></div>
                                    </div>

                                    <div style={{ marginLeft: "40px" }}>
                                        <div>
                                            <Typography style={bodyHeaderTextStyle} variant="h6" component="div">{review.catalog_number}</Typography>
                                        </div>

                                        <div style={{ display: "flex", flexWrap: "wrap", margin: "25px 0px" }}>
                                            <Typography style={bodyHeaderTextStyle} variant="h7" component="div">Attendence Mandatory: <span style={{ fontWeight: "normal" }}>{review.mandatory}</span></Typography>
                                            <Typography style={bodyHeaderTextStyle} variant="h7" component="div">Would Take Again: <span style={{ fontWeight: "normal" }}>{review.retake_professor}</span></Typography>
                                            <Typography style={bodyHeaderTextStyle} variant="h7" component="div">Grade: <span style={{ fontWeight: "normal" }}>{review.grade}</span></Typography>
                                            <Typography style={bodyHeaderTextStyle} variant="h7" component="div">Textbook Required: <span style={{ fontWeight: "normal" }}>{review.require_textbooks}</span></Typography>
                                            <Typography style={bodyHeaderTextStyle} variant="h7" component="div">Class Type: <span style={{ fontWeight: "normal" }}>{review.class_type}</span></Typography>
                                        </div>

                                        <div style={{ margin: "25px 0px" }}>
                                            <Typography style={{ fontSize: "18px" }} variant="h7" component="div">{review.review}</Typography>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )) : <h1 style={noReviewsTextStyle}>Be the first review for professor {`${first_name} ${last_name}`}</h1>
            }


        </div>
    )
}

export default StudentRatings


const headerStyle = {
    fontWeight: "bold",
    color: "#E31C25",
    fontSize: "40px"
}

const ratingHeaderStyle = {
    textAlign: "center",
    fontWeight: "bold"
}

const ratingContainer = {
    fontWeight: "bold"
}

const ratingStyle = {
    borderRadius: "25px",
    textAlign: "center",
    // marginBottom: "50px",
    // padding: "25px",
    backgroundColor: "rgb(0, 182, 30)",
    // backgroundColor: "rgb(55, 36, 230)",
    fontWeight: "bold",
    fontSize: "35px"
}

const difficultyStyle = {
    borderRadius: "25px",
    textAlign: "center",
    backgroundColor: "rgb(230, 36, 42)",
    fontWeight: "bold",
    fontSize: "35px"
}

const bodyHeaderTextStyle = {
    fontWeight: "bold",
    marginRight: "30px",
    marginBottom: "15px"
}

const noReviewsTextStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "100px 0px",
    color: "white"
}