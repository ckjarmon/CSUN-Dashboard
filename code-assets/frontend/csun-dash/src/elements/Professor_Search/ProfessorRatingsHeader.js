import { useState, useEffect } from 'react'
import { Button, Rating, Typography, Box, Modal } from "@mui/material"
import RatingsForm from './RatingsForm'

function ProfessorRatingsHeader({ ratings, professorName, postedReview, setPostedReview, subject, allClassesInSubject }) {

    const [rateModal, setRateModal] = useState(false)

    const [reviews, setReviews] = useState([])
    const [selectedSubject, setSelectedSubject] = useState("")
    const [overallRating, setOverallRating] = useState(0.0)
    const [overallDifficulty, setOverallDifficulty] = useState(0.0)
    const [overallRetake, setOverallRetake] = useState("N/A")
    const [ratingsOutlook, setRatingsOutlook] = useState({ "5": 0, "4": 0, "3": 0, "2": 0, "1": 0, })

    useEffect(() => {
        setReviews(ratings)
        setSelectedSubject(subject)
    }, [ratings, subject])


    useEffect(() => {
        let numReviews = reviews.length
        let ratingsAdded = 0
        let difficultyAdded = 0
        let retakeAgain = 0

        let ratingsOutlook = {
            "5": 0,
            "4": 0,
            "3": 0,
            "2": 0,
            "1": 0,
        }

        if (numReviews > 0) {
            reviews.map((review) => {
                ratingsAdded += review.star_rating
                difficultyAdded += review.difficulty

                if (review.retake_professor == "Yes") {
                    retakeAgain += 1
                }

                switch (review.star_rating) {
                    case 5:
                        ratingsOutlook["5"] += 1
                        break
                    case 4:
                        ratingsOutlook["4"] += 1
                        break
                    case 3:
                        ratingsOutlook["3"] += 1
                        break
                    case 2:
                        ratingsOutlook["2"] += 1
                        break
                    case 1:
                        ratingsOutlook["1"] += 1
                        break
                }
            })
        }
        ratingsAdded = ratingsAdded / numReviews
        difficultyAdded = difficultyAdded / numReviews
        retakeAgain = (retakeAgain / numReviews) * 100

        setOverallRating(ratingsAdded.toFixed(2))
        setOverallDifficulty(difficultyAdded.toFixed(2))
        setOverallRetake(retakeAgain.toFixed(2))
        setRatingsOutlook(ratingsOutlook)

    }, [reviews])

    function handleRateModal() {
        setRateModal(!rateModal)
    }

    return (
        <div style={mainContainerStyle}>
            <div style={headerContainerStyle}>
                <h1 style={ratingStyle}>{overallRating}/5</h1>
                <h3 style={totalRatingstyle}>Overall Quality Based on {reviews.length} ratings</h3>
                <h1 style={professorNameStyle}>{professorName}</h1>
                <div style={professorStatsStyle}>
                    <div style={wouldTakeAgainStyle}>
                        <h2>{overallRetake}%</h2>
                        <h4>Would take again</h4>
                    </div>
                    <div style={difficultyStyle}>
                        <h2>{overallDifficulty}</h2>
                        <h4>Level of Difficulty</h4>
                    </div>
                </div>
                <Button style={rateButtonStyle} onClick={handleRateModal}>Rate Professor {professorName.split(/\s(.+)/)[1]}</Button>
            </div>

            <div style={starsContainerStyle}>
                <div style={starsRatingsContainer}>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography component="legend">{ratingsOutlook["5"]} ratings</Typography>
                </div>
                <div style={starsRatingsContainer}>
                    <Rating name="read-only" value={4} readOnly />
                    <Typography component="legend">{ratingsOutlook["4"]} ratings</Typography>
                </div>
                <div style={starsRatingsContainer}>
                    <Rating name="read-only" value={3} readOnly />
                    <Typography component="legend">{ratingsOutlook["3"]} ratings</Typography>
                </div>
                <div style={starsRatingsContainer}>
                    <Rating name="read-only" value={2} readOnly />
                    <Typography component="legend">{ratingsOutlook["2"]} ratings</Typography>
                </div>
                <div style={starsRatingsContainer}>
                    <Rating name="read-only" value={1} readOnly />
                    <Typography component="legend">{ratingsOutlook["1"]} ratings</Typography>
                </div>
            </div>

            <div>
                <Modal
                    open={rateModal}
                    onClose={handleRateModal}>
                    <Box sx={modalStyle}>
                        <Typography variant="h4" component="h2" style={{ textAlign: "center" }}>
                            Post New Rating for <span style={{ fontWeight: "bold" }}>{professorName}</span>
                        </Typography>
                        <RatingsForm
                            rateModal={rateModal}
                            setRateModal={setRateModal}
                            professorName={professorName}
                            subject={selectedSubject}
                            setPostedReview={setPostedReview}
                            allClassesInSubject={allClassesInSubject}>
                        </RatingsForm>
                    </Box>
                </Modal>
            </div>

        </div>
    )
}

export default ProfessorRatingsHeader



const mainContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",

}

const headerContainerStyle = {
    backgroundColor: "#1C1C1C",
    color: "white",
    marginBottom: "50px"
}

const ratingStyle = {
    fontSize: "50px",
    fontWeight: "bold",
    paddingBottom: "8px"
}

const totalRatingstyle = {
    fontSize: "15px",
    paddingBottom: "8px"
}

const professorNameStyle = {
    fontSize: "50px",
    fontWeight: "bold",
    paddingBottom: "8px"
}

const professorStatsStyle = {
    display: "flex",
    paddingBottom: "8px"
}

const wouldTakeAgainStyle = {
    borderRight: "1px solid white",
    textAlign: "center",
    padding: "8px"
}

const difficultyStyle = {
    padding: "8px",
    textAlign: "center"
}

const rateButtonStyle = {
    backgroundColor: "blue",
    width: "250px",
    height: "35px",
    borderRadius: "15px",
    color: "white",
    fontWeight: "bold"
}

const starsContainerStyle = {
    marginLeft: "30px",
}

const starsRatingsContainer = {
    color: "white",
    display: "flex",
    padding: "10px"
}


const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75vw",
    height: "80vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};