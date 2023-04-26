import { class_codes } from "../../classCodes"
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AddClassesDropDown({ searchDone }) {
    const terms = ["Spring 2023"]

    const [term, setTerm] = useState("")
    const [subject, setSubject] = useState("")

    const [subjectDropDown, setSubjectDropDown] = useState(null)
    const [doneWithSearch, setDoneWithSearch] = useState(null)

    function handleTermChange(event) {
        setTerm(event.target.value);
        setSubjectDropDown(true)
    }

    function handleSubjectChange(event) {
        setSubject(event.target.value)
        setDoneWithSearch(true)
        searchDone(term, event.target.value)
    }


    return (
        <div>
            <div style={dropDownContainers}>
                <FormControl error style={formStyle}>
                    <InputLabel style={{ color: "white" }}>Term</InputLabel>
                    <Select
                        style={{ color: "white" }}
                        value={term}
                        label="Term"
                        onChange={handleTermChange}
                        MenuProps={{
                            style: {
                                maxHeight: 250,
                            },
                        }}
                    >
                        {terms.map(termItem => (
                            <MenuItem key={termItem} value={termItem}>{termItem}</MenuItem>
                        ))}
                    </Select>
                </FormControl>


                {subjectDropDown ?
                    <FormControl error style={formStyle}>
                        <InputLabel style={{ color: "white" }}>Subject</InputLabel>
                        <Select
                            style={{ color: "white" }}
                            value={subject}
                            label="Subject"
                            onChange={handleSubjectChange}
                            MenuProps={{
                                style: {
                                    maxHeight: 250,
                                },
                            }}>
                            {class_codes.map(subjectItem => (
                                <MenuItem key={subjectItem} value={subjectItem}>{subjectItem}</MenuItem>
                            ))}
                        </Select>
                    </FormControl> : <div></div>
                }
            </div>
        </div>
    )
}

export default AddClassesDropDown;

const dropDownContainers = {
    display: 'flex',
    justifyContent: "center",

    
}

const formStyle = {
    width: "150px",
    color: "white",
    margin: "15px",
    borderRadius: "50px"
}

