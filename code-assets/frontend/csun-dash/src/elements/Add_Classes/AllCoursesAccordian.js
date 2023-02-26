import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdOutlineExpandMore } from 'react-icons/md';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react'
import CourseDataTable from './CourseDataTable';



function AllCoursesAccordian({ classes, scheduleExistDict, schedule, addedClassHandler, addIcon }) {
    useEffect(() => {
        classes.map(course => {
            // console.log(course.substring(0, course.indexOf(' ')))
        })

        // schedule.map(item => {
        //     console.log(item)
        // })
    }, [])

    return (
        <div>
            <div style={courseListContainer}>
                {classes.map(course => (
                    scheduleExistDict[`${course.substring(0, course.indexOf(' '))}`] ?
                        <Accordion style={accordianStyle} key={course}>
                            <AccordionSummary
                                expandIcon={<MdOutlineExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography style={{ fontWeight: "bold" }}>{course}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <CourseDataTable addIcon={addIcon} addedClassHandler={addedClassHandler} classes={schedule} course={course.substring(0, course.indexOf(' '))}></CourseDataTable>
                            </AccordionDetails>
                        </Accordion> : <div key={course}></div>
                ))}
            </div>
        </div>
    )
}

export default AllCoursesAccordian;


const courseListContainer = {
    margin: "20px",

}

const accordianStyle = {
    marginTop: "10px",
    borderRadius: "50px",
    backgroundColor: "#8F8F8F"
}