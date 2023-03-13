import { useState, useEffect } from 'react'
import DataTableRow from './Data_Table_Components/DataTableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ProfessorsSearchPage({ allProfessors }) {
    const [professors, setProfessors] = useState([])

    useEffect(() => {
        setProfessors(allProfessors)


    }, [allProfessors])

    return (
        <div style={{ margin: "100px 100px 0px 100px", paddingBottom: "50px" }}>
            <TableContainer style={{ backgroundColor: "#E31C25", borderRadius: "25px" }} component={Paper}>
                <Table >
                    <TableHead >
                        <TableRow >
                            <TableCell style={columnStyles} align="center"></TableCell>
                            <TableCell style={columnStyles} align="center">Name</TableCell>
                            <TableCell style={columnStyles} align="center">Location</TableCell>
                            <TableCell style={columnStyles} align="center">Email</TableCell>
                            <TableCell style={columnStyles} align="center">Phone Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{backgroundColor: "black"}}>
                        {professors.map((professor, i) => (
                            <DataTableRow key={i} professor={professor} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProfessorsSearchPage

const columnStyles = {
    fontWeight: "bold",
    fontSize: "18px",
    paddingRight: "35px",
    color: "white"
}
