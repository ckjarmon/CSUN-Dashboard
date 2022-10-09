import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IoAdd} from 'react-icons/io5'
import {FiX} from 'react-icons/fi'
import {useState, useEffect} from 'react'
import { globalState } from '../../globalState';
import {useSnapshot} from "valtio"

function CourseDataTable({classes, course}){
    const globalValtioState = useSnapshot(globalState)
    
    const [displayClasses, setDisplayClasses] = useState([])
    const [addedClass, setAddedClass] = useState({})

    function fetchCourseList(){
        let filterSection = classes.filter(classItem => classItem.catalog_number == course)
        setDisplayClasses(filterSection)
    }

    useEffect(() => {
        fetchCourseList()
    }, [])

    function classAlreadyAdded(event){
        // globalValtioState.addedClasses.map(classItem => {
        //     if(event.catalog_number == classItem.catalog_number){
        //         return true
        //     }
        // })
        // return false
        
        for(let i = 0; i < globalValtioState.addedClasses.length; i++){
            if(event.catalog_number == globalValtioState.addedClasses[i].catalog_number){
                return true
            }
        }
        return false
    }

    function handleClassAdditon(event){

        if(!addedClass[event.class_number]){
            if(!classAlreadyAdded(event)){
                setAddedClass({
                    ...addedClass,
                    [event.class_number]:  !addedClass[event.class_number]
                })
                globalState.addedClasses.push(event)
                console.log(globalValtioState.addedClasses)
            }else{
                console.log("This Class Is Already Added To Your Schedule!")
            }
        }else{
            setAddedClass({
                ...addedClass,
                [event.class_number]:  !addedClass[event.class_number]
            })
            globalState.addedClasses.filter(classItem => classItem.class_number != event.class_number)
            console.log(globalValtioState.addedClasses)
        }
    }

    return(
        <TableContainer component={Paper} style={{backgroundColor: "#1C1C1C"}}>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
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
                        <TableRow
                        key={row.class_number}
                        >
                        <TableCell style={tableCellStyle} align="center"><Button onClick={() => handleClassAdditon(row)}>{addedClass[row.class_number] ? <FiX style={removeIconStyle}/>: <IoAdd style={addIconStyle}/>}</Button></TableCell>
                        <TableCell style={tableCellStyle} align="center">{row.class_number}</TableCell>
                        <TableCell style={tableCellStyle} align="center">{(row.enrollment_cap - row.enrollment_count)}</TableCell>
                        <TableCell style={tableCellStyle} align="center">{row.meetings[0].location}</TableCell>
                        <TableCell style={tableCellStyle} align="center">{row.meetings[0].days}</TableCell>
                        <TableCell style={tableCellStyle} align="center">{`${row.meetings[0].start_time}` + `-` + `${row.meetings[0].end_time}`}</TableCell>
                        <TableCell style={tableCellStyle} align="center">{row.instructors[0].instructor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CourseDataTable;

const tableCellStyle = {
    color: "white"
}

const addIconStyle = {
    color: 'green', 
    fontSize: '25px', 
    fontWeight: 'bold'
}

const removeIconStyle = {
    color: 'red', 
    fontSize: '25px', 
    fontWeight: 'bold'
}