import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function StudentRatings({ subject, first_name, last_name, postedReview }) {
    const [reviews, setReviews] = useState([])
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`http://130.166.160.102/${subject}/rating/${first_name}/${last_name}`)
            .then(response => response.json())
            .then(reviews => {
                if (!reviews.length) {
                    setReviews([])
                    setCourses([])
                } else {
                    let reviewArray = []
                    let classArray = []

                    reviews.map((review) => {
                        reviewArray.push(review)
                        classArray.push(review.catalog_number)
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
                <h1 style={headerStyle}>Student Reviews</h1>
            </div>

            {reviews.length > 0 ?
                reviews.map((review, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "center", paddingBottom: "25px", marginTop: "25px" }}>
                        <Card style={{ width: "1000px", backgroundColor: "white", borderRadius: "25px" }}>
                            <CardContent>
                                <div style={{ display: "flex", padding: "25px", marginTop: "25px" }}>
                                    <div>
                                        <Typography style={ratingHeaderStyle} variant="h5" component="div">Rating</Typography>
                                        <div style={ratingContainer}><h2 style={ratingStyle}>{review.star_rating}</h2></div>

                                        <Typography style={ratingHeaderStyle} variant="h5" component="div">Difficulty</Typography>
                                        <div style={ratingContainer}><h2 style={ratingStyle}>{review.difficulty}</h2></div>
                                    </div>

                                    <div style={{ marginLeft: "40px" }}>
                                        <div>
                                            <Typography style={bodyHeaderTextStyle} variant="h6" component="div">{review.catalog_number}</Typography>
                                        </div>

                                        <div style={{ display: "flex", margin: "25px 0px" }}>
                                            <Typography style={bodyHeaderTextStyle} variant="h7" component="div">Attendence Mandatory: <span style={{ fontWeight: "normal" }}>{review.mandatory}</span></Typography>
                                            <Typography style={bodyHeaderTextStyle} variant="h7" component="div">Would Take Again: <span style={{ fontWeight: "normal" }}>{review.retake_professor}</span></Typography>
                                            <Typography style={bodyHeaderTextStyle} variant="h7" component="div">Grade: <span style={{ fontWeight: "normal" }}>{review.grade}</span></Typography>
                                            <Typography style={bodyHeaderTextStyle} variant="h7" component="div">Textbook Required: <span style={{ fontWeight: "normal" }}>{review.require_textbooks}</span></Typography>
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
    textAlign: "center",
    marginBottom: "50px",
    padding: "25px",
    backgroundColor: "rgb(127, 246, 195)",
    fontWeight: "bold",
    fontSize: "25px"
}

const bodyHeaderTextStyle = {
    fontWeight: "bold",
    marginRight: "30px",
}

const noReviewsTextStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "100px 0px",
    color: "white"
}