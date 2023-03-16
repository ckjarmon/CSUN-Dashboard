import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow, { tableRowClasses } from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoAdd } from 'react-icons/io5'
import { useState, useEffect } from 'react'


function CourseDataTable({ classes, course, addedClassHandler, addIcon }) {

    const [displayClasses, setDisplayClasses] = useState([])

    function fetchCourseList() {
        let filterSection = classes.filter(classItem => classItem.catalog_number === course)
        setDisplayClasses(filterSection)
    }

    const TwentyFourToTwelve = (time) => {
        let hours = parseInt(time.substring(0, 2));
        let minutes = time.substring(2);
        let period = hours >= 12 ? "PM" : "AM";
        hours = ((hours + 11) % 12 + 1);
        let output = hours.toString().padStart(2, '0') + ':' + minutes + ' ' + period;
        return output;
    }

    const convertClassTime = (row) => {
        // don't convert if it's already in correct format or if the class is TBA
        if (row.start_time[5] === ' ' || row.start_time[0] ==='T')
            return;
        // fix "ARR-ARR" showing up on invalid time
        if (row.start_time[0] === 'A' ) {
            row.start_time = "TBA";
            row.end_time = "TBA";
            return;
        }
        row.start_time = (row.start_time.toString()).slice(0,4);
        row.end_time = (row.end_time.toString()).slice(0,4);
        row.start_time = TwentyFourToTwelve(row.start_time);
        row.end_time = TwentyFourToTwelve(row.end_time);
    }

    // convert times
    (() => {
        displayClasses.map((row) => (
            convertClassTime(row)
        ))
    } )();

    useEffect(() => {
        fetchCourseList()
    }, [])

    return (
        <TableContainer component={Paper} style={{ backgroundColor: "#1C1C1C",    borderRadius: "40px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={tableCellStyle} align="center"></TableCell>
                        <TableCell style={tableCellStyle} align="center">Section</TableCell>
                        <TableCell style={tableCellStyle} align="center">Available Seats</TableCell>
                        <TableCell style={tableCellStyle} align="center">Location</TableCell>
                        <TableCell style={tableCellStyle} align="center">Days</TableCell>
                        <TableCell style={tableCellStyle} align="center">Time</TableCell>
                        <TableCell style={tableCellStyle} align="center">Instructor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayClasses.map((row) => (
                        <TableRow key={row.class_number}>
                            <TableCell style={tableCellStyle} align="center"><Button onClick={() => addedClassHandler(row)}>
                            {addIcon[row.class_number] ? <div></div> : <IoAdd style={addIconStyle} />}</Button></TableCell>
                            
                            <TableCell style={tableCellStyle} align="center">{row.class_number}</TableCell>
                            <TableCell style={tableCellStyle} align="center">{(row.enrollment_cap - row.enrollment_count)}</TableCell>
                            <TableCell style={tableCellStyle} align="center">{row.location}</TableCell>
                            <TableCell style={tableCellStyle} align="center">{row.days}</TableCell>
                            <TableCell style={tableCellStyle} align="center">{`${row.start_time}` + ` - ` + `${row.end_time}`}</TableCell>
                            <TableCell style={tableCellStyle} align="center">{row.instructor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CourseDataTable;

const tableCellStyle = {
    color: "white",

}

const addIconStyle = {
    color: 'green',
    fontSize: '25px',
    fontWeight: 'bold'
}

