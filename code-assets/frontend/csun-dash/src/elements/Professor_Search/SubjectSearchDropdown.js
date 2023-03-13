import { class_codes } from '../../classCodes';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SubjectSearchDropdown({ handleSubjectChange, subject }) {
    return (
        <div style={searchContainer}>
            <FormControl error style={dropdownStyle}>
                <InputLabel style={{ color: "white" }}>Select Subject</InputLabel>
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
            </FormControl>
        </div>
    )
}


export default SubjectSearchDropdown

const searchContainer = {
    display: 'flex',
    justifyContent: "center",
    margin: "15px",
    color: "white"
}

const dropdownStyle = {
    width: "150px",
    color: "white",
    margin: "15px",
}