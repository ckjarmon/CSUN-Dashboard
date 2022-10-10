import { class_codes } from '../../classCodes';
import {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function ProfessorRatingsSearch({handleSubjectChange, handleProfessorChange, subject, professorSelected, professors, enableSearch}){
    

    

    

    return(
        <div>
            <div style={searchStyle}>
                <FormControl error style={formStyle}>
                    <InputLabel style={{color:"white"}}>Select Subject</InputLabel>
                    <Select
                    style={{color:"white"}}
                    value={subject}
                    label="Subject"
                    onChange={handleSubjectChange}
                    MenuProps={{
                        style: {
                        maxHeight: 250,
                            },
                        }}
                    >
                        {class_codes.map(subjectItem =>(
                            <MenuItem key={subjectItem} value={subjectItem}>{subjectItem}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {enableSearch ? 
                    <FormControl error style={formStyle}>
                        <InputLabel style={{color:"white"}}>Professors</InputLabel>
                        <Select
                        style={{color:"white"}}
                        value={professorSelected}
                        label="Subject"
                        onChange={handleProfessorChange}
                        MenuProps={{
                            style: {
                            maxHeight: 250,
                                },
                            }}
                        >
                            {professors.map(professorItem =>(
                                <MenuItem key={professorItem} value={professorItem}>{professorItem}</MenuItem>
                            ))}
                        </Select>
                    </FormControl> : <div></div>
                }

            </div>
        </div>
    )
}

export default ProfessorRatingsSearch

const searchStyle = {
    display: 'flex',
    justifyContent: "center",
    margin: "15px",
    color: "white"
}

const formStyle = {
    width: "150px",
    color: "white",
    margin: "15px",
}