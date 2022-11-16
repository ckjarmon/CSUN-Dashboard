import {useState, useEffect} from 'react'
import DataTableRow from './Data Table Components/DataTableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { padding } from '@mui/system';
import React, { Component }  from 'react';


function ProfessorsSearchPage({allProfessors}){
    const [professors, setProfessors] = useState([])

    useEffect(() => {
        setProfessors(allProfessors)


    }, [allProfessors])

    return(
        <div style={{margin:"100px 100px 0px 100px", paddingBottom: "50px"}}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{backgroundColor: "#E31C25"}}>
                    <TableRow>
                        <TableCell style={columnStyles} align="center"></TableCell>
                        <TableCell style={columnStyles} align="center">Name</TableCell>
                        <TableCell style={columnStyles} align="center">Location</TableCell>
                        <TableCell style={columnStyles} align="center">Email</TableCell>
                        <TableCell style={columnStyles} align="center">Phone Number</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
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
