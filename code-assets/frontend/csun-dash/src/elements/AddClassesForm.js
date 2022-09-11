import { Dropdown } from 'semantic-ui-react'
import {useState, useEffect} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DropDownItems from '../components/DropDownItems'
import {getCatalogNumbers} from '../fetchServices'


function AddClassesForm(props){
    const [term, setTerm] = useState("")
    const [subject, setSubject] = useState("")
    const [catalogNumber, setCatalogNumber] = useState("")

    const [subjectDropDown, setSubjectDropDown] = useState(false)
    const [catalogNumberDropDown, setCatalogNumberDropDown] = useState(false)

    function handleTermChange(event){
        setTerm(event.target.value);
        setSubjectDropDown(true)
    };

    function handleSubjectChange(event){
        setSubject(event.target.value);
        setCatalogNumberDropDown(true)
    };


    function handleCatalogNumberChange(event){
        setCatalogNumber(event.target.value);
    }

    function renderMenuItems(menuItems){
        let items = []

        for(let i=0; i < menuItems.length; i++){
            items.push(<MenuItem key={i} value={menuItems[i]}>{menuItems[i]}</MenuItem>)
        }
        
        return items;
    }

    function fetchMenuItems(url){
        let items = []

        fetch(url)
            .then(response => response.json())
            .then(data => {
                for(let i=0; i < data.classes.length; i++){
                    items.push(data.classes[i].catalog_number)
                }
                
            })
            return items;
        
    }
    console.log(props.csunClasses)
  
    return(
        <div style={formContainer}>

            <FormControl error style={formStyle}>
                <InputLabel style={{color:"white"}}>Term</InputLabel>
                <Select
                style={{color:"white"}}
                value={term}
                label="Term"
                onChange={handleTermChange}
                MenuProps={{
                    style: {
                       maxHeight: 250,
                          },
                    }}
                >
                    {renderMenuItems(props.terms)}
                </Select>
            </FormControl>

             {subjectDropDown ? 
                <FormControl error style={formStyle}>
                    <InputLabel style={{color:"white"}}>Subject</InputLabel>
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
                        {renderMenuItems(props.classCodes)}
                    </Select>
                </FormControl> 
                : <div></div>
            }

            {catalogNumberDropDown ? 
                <FormControl error style={formStyle}>
                    <InputLabel style={{color:"white"}}>Catalog Number</InputLabel>
                    <Select
                    style={{color:"white"}}
                    value={catalogNumber}
                    label="Catalog Number"
                    onChange={handleCatalogNumberChange}
                    MenuProps={{
                        style: {
                        maxHeight: 250,
                            },
                        }}
                    >
                        {/* {fetchMenuItems(`http://127.0.0.1:8000/${subject}/schedule`)} */}
                    </Select>
                </FormControl> 
                : <div></div>
            }
        </div>
    )
}

export default AddClassesForm;

const formContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "75px"
}

const formStyle = {
    width: "300px",
    color: "white",
    marginRight: "30px"
}