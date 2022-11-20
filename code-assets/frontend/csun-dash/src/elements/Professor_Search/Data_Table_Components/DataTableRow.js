import {useState} from 'react'
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import React, { Component }  from 'react';



function DataTableRow({professor}){
    const row = professor;
    const [openRow, setOpenRow] = useState(false)
    console.log(row)

    return(
        <>
            <TableRow>
                <TableCell style={rowStyle} align="center">
                    <IconButton
                        size="small"
                        onClick={() => setOpenRow(!openRow)}
                    >
                        {openRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell style={rowStyle} align="center">{row.first_name} {row.last_name}</TableCell>
                <TableCell style={rowStyle} align="center">{row.location}</TableCell>
                <TableCell style={rowStyle} align="center" >{row.email}</TableCell>
                <TableCell style={rowStyle} align="center">{row.phone_number}</TableCell>
            </TableRow>
            
            <TableRow style={{backgroundColor: "#F2F3F4"}}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={openRow} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Box style={{margin:"20px 0px"}}>
                            <div style={{display:"flex", margin: "10px", gap:"40px"}}>
                                <img style={imageStyle} src={row.image_link}/>
                                <Box>
                                    <Typography><span style={detailsStyle}>Website: </span><Link href={row.website}>{row.website}</Link></Typography>
                                    <Typography><span style={detailsStyle}>Phone Number: </span>{row.phone_number}</Typography>
                                    <Typography><span style={detailsStyle}>Mail Drop: </span>{row.mail_drop}</Typography>
                                    <Typography><span style={detailsStyle}>Office: </span>{row.office}</Typography>
                                    <Button style={ratingsButton}>Professor Ratings</Button>
                                </Box>
                            </div>                            
                        </Box>
                    </Box>
                </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default DataTableRow


const rowStyle = {
    fontWeight: "bold"
}

const imageStyle = {
    width: "100px",
    height: "100px"
}

const detailsStyle = {
    fontWeight: "bold"
}

const ratingsButton = {
    marginTop:"8px",
    backgroundColor: "#E31C25",
    color:"white"
}