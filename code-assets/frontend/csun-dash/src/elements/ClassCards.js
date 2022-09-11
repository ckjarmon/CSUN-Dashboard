import {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {BsInfoLg} from "react-icons/bs"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function ClassCards(props){
    const [classList, setClassList] = useState([])
    const [classTitle, setClassTitle] = useState("")
    const [classUnits, setClassUnits] = useState("")
    const [classDescription, setClassDescription] = useState("")

    const [openInfo, setOpenInfo] = useState(false)

    
    useEffect(() => {
        let classes = []
        props.assignedProf.forEach(classItem => {
            if(classItem.catalog_number == props.classCatalogNumber && classItem.term == props.classTerm){
                setClassTitle(classItem.title)
                setClassUnits(classItem.units)
                setClassDescription(classItem.description)
                
                console.log(classItem)
                classes.push({
                    classInfo: classItem,
                    classNumber: classItem.class_number, 
                    seatsAvailable: (classItem.enrollment_cap - classItem.enrollment_count), 
                    waitlistCount: classItem.waitlist_count,
                    location: classItem.meetings[0].location,
                    days: classItem.meetings[0].days,
                    time: (classItem.meetings[0].start_time + "-" + classItem.meetings[0].end_time),
                    instructor: classItem.instructors[0].instructor,
                    units: classItem.units,
                    preReqs: classItem.description
                })
            }
        })
        
        // props.classList.forEach(classItem => {
        //     classes.forEach(element => {
        //         console.log(element.classNumber, classItem.class_number)
        //         if(element.classNumber == classItem.class_number){
        //             element.instructor = classItem.instructors[0].instructor
        //         }
        //     })
        // })
        setClassList(classes)
    }, [])

    
    function handleInfoClick(){
        setOpenInfo(!openInfo)
    }
    

    return(
        <div>
            <div style={{display: 'flex', justifyContent:'center', gap: '10px'}}>
                
                <Button onClick={handleInfoClick} style={infoButton} variant="contained">Info</Button>
                <h2 style={{textAlign: 'center'}}>{props.classSubject} {props.classCatalogNumber} - {classTitle} ({classUnits} Units)</h2>
            </div>

            <div>
                <Modal
                    open={openInfo}
                    onClose={handleInfoClick}
                    >
                    <Box sx={infoModalStyle}>
                        <Typography style={{color: '#E31C25', fontWeight: 'bold'}} id="modal-modal-title" variant="h6" component="h2">
                        Class Descripton
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {classDescription}
                        </Typography>
                    </Box>
                </Modal>
            </div>
            

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead style={{backgroundColor: '#111111'}}>
                    <TableRow>
                        <TableCell style={headerCellStyle}>Class Number</TableCell>
                        <TableCell style={headerCellStyle}>Seats Available</TableCell>
                        <TableCell style={headerCellStyle}>Waitlist</TableCell>
                        <TableCell style={headerCellStyle}>Location</TableCell>
                        <TableCell style={headerCellStyle}>Days</TableCell>
                        <TableCell style={headerCellStyle}>Time</TableCell>
                        <TableCell style={headerCellStyle}>Instructor</TableCell>
                        <TableCell style={headerCellStyle}></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {classList.map((classItem,i) => (
                        <TableRow
                        key={classItem.classNumber}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell key={classItem} style={rowStyle}>{classItem.classNumber}</TableCell>
                        <TableCell key={classItem}  style={rowStyle}>{classItem.seatsAvailable}</TableCell>
                        <TableCell key={classItem}  style={rowStyle}>{classItem.waitlistCount}</TableCell>
                        <TableCell key={classItem}  style={rowStyle}>{classItem.location}</TableCell>
                        <TableCell key={classItem}  style={rowStyle}>{classItem.days}</TableCell>
                        <TableCell key={classItem}  style={rowStyle}>{classItem.time}</TableCell>
                        <TableCell key={classItem}  style={rowStyle}>{classItem.instructor}</TableCell>
                        <TableCell key={classItem} ><Button onClick={()=>props.onSelectClick(classItem)} style={addClassButton} variant="contained">Select</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

        </div>
    )
}

export default ClassCards;

const headerCellStyle = {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif"

}

const rowStyle = {
    fontWeight: "bold",
    paddingLeft: "30px",
}

const addClassButton = {
    width: '75px',
    height: '25px',
    fontSize: '12px',
    backgroundColor: "#E31C25",
}

const infoButton = {
    width: '0px',
    height: '30px',
    fontSize: '12px',
    backgroundColor: "#E31C25",
    marginTop: '10px'
}

const infoModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'white'
}