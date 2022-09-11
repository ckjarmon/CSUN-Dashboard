import {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function ClassCards(props){
    const [classList, setClassList] = useState([])
    const [classTitle, setClassTitle] = useState("")


    useEffect(() => {
        let classes = []
        props.classList.forEach(classItem => {
            if(classItem.catalog_number == props.classCatalogNumber){
                setClassTitle(classItem.title)
                classes.push({
                    classInfo: classItem,
                    classNumber: classItem.class_number, 
                    seatsAvailable: (classItem.enrollment_cap - classItem.enrollment_count), 
                    location: classItem.meetings[0].location,
                    days: classItem.meetings[0].days,
                    time: (classItem.meetings[0].start_time + "-" + classItem.meetings[0].end_time),
                    instructor: classItem.instructors[0].instructor
                })
            }
        })
        setClassList(classes)
    }, [])

    

    

    return(
        <div>
            <div>
                <h2 style={{textAlign: 'center'}}>{props.classSubject} {props.classCatalogNumber} - {classTitle}</h2>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead style={{backgroundColor: '#111111'}}>
                    <TableRow>
                        <TableCell style={headerCellStyle}>Class Number</TableCell>
                        <TableCell style={headerCellStyle}>Seats Available</TableCell>
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
{/* cltr+shift+k  to remove */}



             

            {/* <div>
                {classList.map(classItem => {
                    <div>

                    </div>
                })}
            </div> */}
            
            {/* <h1>{props.classTerm}</h1>
            <h1>{props.classSubject}</h1>
            <h1>{props.classCatalogNumber}</h1> */}
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
    paddingLeft: "30px"
}

const addClassButton = {
    width: '75px',
    height: '25px',
    fontSize: '12px',
    backgroundColor: "#E31C25",
}