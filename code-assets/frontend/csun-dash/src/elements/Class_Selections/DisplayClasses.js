import { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { FiX } from 'react-icons/fi'
import { BsInfoCircleFill } from 'react-icons/bs'


function DisplayClasses({ classesAdded, removeClassHandler }) {
    const [openModal, setOpenModal] = useState(false)
    const [selectedCourseInfo, setSelectedCourseInfo] = useState({})

    function handleInfoButton(event) {
        console.log(event)
        setOpenModal(!openModal)

        fetch(`https://api.kyeou.xyz/${event.subject}/catalog`)
            .then(response => response.json())
            .then(catalogData => {
                let catalogInfo = {}

                for (let i = 0; i < catalogData.length; i++) {
                    if (event.catalog_number === catalogData[i].catalog_number) {
                        catalogInfo = catalogData[i]
                    }
                }
                catalogInfo["prerequisites"] = catalogInfo["prerequisites"]

                setSelectedCourseInfo(catalogInfo)
            })
    }

    function handleInfoButtonClose() {
        setOpenModal(!openModal)
    }

    return (
        <div style={{ margin: "20px" }}>
            <TableContainer component={Paper} style={{ backgroundColor: "#1C1C1C" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={tableCellStyle} align="center"></TableCell>
                            <TableCell style={tableCellStyle} align="center">Section</TableCell>
                            <TableCell style={tableCellStyle} align="center">Subject</TableCell>
                            <TableCell style={tableCellStyle} align="center">Available Seats</TableCell>
                            <TableCell style={tableCellStyle} align="center">Location</TableCell>
                            <TableCell style={tableCellStyle} align="center">Days</TableCell>
                            <TableCell style={tableCellStyle} align="center">Time</TableCell>
                            <TableCell style={tableCellStyle} align="center">Instructor</TableCell>
                            <TableCell style={tableCellStyle} align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {classesAdded.map((row) => (
                            <TableRow
                                key={row.class_number}
                            >
                                <TableCell style={tableCellStyle} align="center"><Button onClick={() => removeClassHandler(row)}>{<FiX style={removeIconStyle} />}</Button></TableCell>
                                <TableCell style={tableCellStyle} align="center">{row.class_number}</TableCell>
                                <TableCell style={tableCellStyle} align="center">{`${row.subject} - ${row.catalog_number}`}</TableCell>
                                <TableCell style={tableCellStyle} align="center">{(row.enrollment_cap - row.enrollment_count)}</TableCell>
                                <TableCell style={tableCellStyle} align="center">{row.location}</TableCell>
                                <TableCell style={tableCellStyle} align="center">{row.days}</TableCell>
                                <TableCell style={tableCellStyle} align="center">{`${row.start_time}` + `-` + `${row.end_time}`}</TableCell>
                                <TableCell style={tableCellStyle} align="center">{row.instructor}</TableCell>
                                <TableCell style={tableCellStyle} align="center"><Button onClick={() => handleInfoButton(row)}>{<BsInfoCircleFill style={infoIconStyle} />}</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



            <Modal
                open={openModal}
                onClose={handleInfoButtonClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={modalStyle}>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
                            {`${selectedCourseInfo.catalog_number} - ${selectedCourseInfo.title}`}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            {selectedCourseInfo.description}
                        </Typography>
                        <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                            {"Prerequisites: " + selectedCourseInfo.prerequisites}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>


        </div>
    )
}

export default DisplayClasses;

const tableCellStyle = {
    color: "white"
}

const removeIconStyle = {
    color: 'red',
    fontSize: '25px',
    fontWeight: 'bold'
}

const infoIconStyle = {
    fontSize: '25px',
    fontWeight: 'bold'
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};