import { FormControl, InputLabel, Input, TextField, Slider, RadioGroup, Radio, FormControlLabel, Typography, Button, Select, MenuItem } from "@mui/material"
import {useState} from 'react'

const gradesPossible = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F", "Audit/No Grade", "Drop/Withdrawl", "Incomplete", "Not Sure Yet", "Rather Not Say"]

function RatingsForm({rateModal, setRateModal, professorSelected, subject}){
    const [courseCode, setCourseCode] = useState("")
    const [rating, setRating] = useState(3)
    const [difficulty, setDifficulty] = useState(3)
    const [grade, setGrade] = useState("")
    const [retakeProfessor, setRetakeProfessor] = useState(null)
    const [requireTextbooks, setRequireTextbooks] = useState(null)
    const [mandatory, setMandatory] = useState(null)
    const [reviewText, setReviewText] = useState("")
    const [cancelForm, setCancelForm] = useState(null)

    const [postBody, setPostBody] = useState({})

    function handleCancel(){
        setRateModal(!rateModal)
    }

    function handleSubmit(){
        setRateModal(!rateModal)

        //Post Request Here
        let body = {
            "professor_first_name": professorSelected.split(/\s(.+)/)[0],
            "professor_last_name": professorSelected.split(/\s(.+)/)[1],
            "subject": subject,
            "catalog_number": courseCode,
            "star_rating": rating,
            "grade": grade,
            "difficulty": difficulty,
            "retake _professor": retakeProfessor,
            "require_textbooks": requireTextbooks,
            "mandatory": mandatory,
            "review": reviewText
        }

        console.log(body)
        setPostBody(body)

        fetch(`http://127.0.0.1:5000/${subject}/rating`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
    }

    return(
        <div>
            <div style={{display:"flex", justifyContent:"space-between", margin:"50px"}}>
                <div>
                    <Typography style={{fontWeight:"bold", marginBottom: "4px"}}>Course Code</Typography>
                    <TextField style={courseCodeStyle} label="Ex. COMP 110" variant="outlined" onChange={(e) => setCourseCode(e.target.value)}/>
                </div>
                
                <div>
                    <Typography style={questionStyle}>Rate your professor</Typography>
                    <Slider style={sliderStyle} defaultValue={3} step={1} max={5} valueLabelDisplay="auto" onChange={(e) => setRating(e.target.value)}/>
                </div>

                <div>
                    <Typography style={questionStyle}>How difficult was this professor?</Typography>
                    <Slider style={sliderStyle} defaultValue={3} step={1} max={5} valueLabelDisplay="auto" onChange={(e) => setDifficulty(e.target.value)}/>
                </div>
            </div>


            <div style={{display:"flex", justifyContent:"space-between", margin:"50px"}}>
                <div>
                    <div>
                        <Typography style={{fontWeight:"bold", marginBottom: "4px"}}>Select Grade</Typography>
                        <Select
                            value={grade}
                            label="Grade"
                            onChange={(e) => setGrade(e.target.value)}
                            style={{width:"100px"}}
                        >
                            {
                                gradesPossible.map((grade) => (
                                    <MenuItem key={grade} value={grade}>{grade}</MenuItem>
                                ))
                            }
                        </Select>
                    </div>
                </div>

                <div>
                    <Typography style={questionStyle}>Would you take this professor again?</Typography>
                    <RadioGroup style={radioStyle} row onChange={(e) => setRetakeProfessor(e.target.value)}>
                        <FormControlLabel value="yes" control={<Radio style={{color:"red"}}/>} label="Yes" />
                        <FormControlLabel value="no" control={<Radio style={{color:"red"}}/>} label="No" />
                    </RadioGroup>
                </div>

                <div>
                    <Typography style={questionStyle}>Did this professor use textbooks?</Typography>
                    <RadioGroup style={radioStyle} row onChange={(e) => setRequireTextbooks(e.target.value)}>
                        <FormControlLabel value="yes" control={<Radio style={{color:"red"}}/>} label="Yes" />
                        <FormControlLabel value="no" control={<Radio style={{color:"red"}}/>} label="No" />
                    </RadioGroup>
                </div>

                <div>
                    <Typography style={questionStyle}>Was attendance mandatory?</Typography>
                    <RadioGroup style={radioStyle} row onChange={(e) => setMandatory(e.target.value)}>
                        <FormControlLabel value="yes" control={<Radio style={{color:"red"}}/>} label="Yes" />
                        <FormControlLabel value="no" control={<Radio style={{color:"red"}}/>} label="No" />
                    </RadioGroup>
                </div>
            </div>
            
            

            <div>
                <Typography style={{fontWeight:"bold"}}>Write a Review</Typography>
                <textarea style={textAreaStyle} onChange={(e) => setReviewText(e.target.value)}></textarea>
            </div>

            <div style={{display:"flex", justifyContent:'center'}}>
                <Button onClick={handleCancel} style={buttonStyle}>Cancel</Button>
                <Button onClick={handleSubmit} style={buttonStyle}>Post</Button>
            </div>
        </div>
    )
}

export default RatingsForm

const textFieldStyle = {
    backgroundColor: "#A9A9A9",
}

const textAreaStyle = {
    width: "100%",
    height: "150px",
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "2px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f8f8f8",
    fontSize: "16px",
    resize: "none",
}

const courseCodeStyle = {
    fontWeight: "bold",
    backgroundColor: "#f8f8f8"
}

const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    margin: "25px 10px",
    width: "100px",
    fontWeight: "bold"
}

const questionStyle = {
    textAlign:"center",
    fontWeight: "bold"
}

const radioStyle = {
    display:"flex", 
    justifyContent:"center",
}

const sliderStyle = {
    width:"300px", 
    color: 'red'
}