import { Dropdown } from 'semantic-ui-react'
import {useState, useEffect} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClassCards from './ClassCards';


function AddClassesForm(props){
    const [term, setTerm] = useState("")
    const [subject, setSubject] = useState("")
    const [catalogNumber, setCatalogNumber] = useState("")

    const [subjectDropDown, setSubjectDropDown] = useState(false)
    const [catalogNumberDropDown, setCatalogNumberDropDown] = useState(false)
    const [searchClassesButton, setSearchClassesButton] = useState(false)
    const [openSearchModal, setOpenSearchModal] = useState(false)
    
    const [catalogList,setcatalogList] = useState([])
    const [classList, setClassList] = useState([])

    function handleTermChange(event){
        setTerm(event.target.value);
        setSubjectDropDown(true)
    }

    function handleSubjectChange(event){
        setSubject(event.target.value);
        setCatalogNumberDropDown(true)
        fetchMenuItems(event.target.value)

    };


    function handleCatalogNumberChange(event){
        setCatalogNumber(event.target.value);
        setSearchClassesButton(true)
    }

    function handleSearchButtonClick(){
        setOpenSearchModal(!openSearchModal)
    }


    function fetchMenuItems(value){

        fetch(`http://127.0.0.1:8000/${value}/schedule`)
            .then(response => response.json())
            .then(data => {
                let catalogNums = []
                let classList = []

                for(let i=0; i < data.classes.length; i++){
                    catalogNums.push(data.classes[i].catalog_number)
                    classList.push(data.classes[i])
                }
                const unique = [...new Set(catalogNums.map(item => item))]
                setcatalogList(unique)
                setClassList(classList)
            })
        
    }
  
    return(
        <div>
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
                        {props.terms.map(term =>(
                            <MenuItem key={term} value={term}>{term}</MenuItem>
                        ))}
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
                            {props.classCodes.map(classCode =>(
                                <MenuItem key={classCode} value={classCode}>{classCode}</MenuItem>
                            ))}
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
                        {
                            catalogList.map(item=>(
                                <MenuItem key={item} value={item}>{item}</MenuItem>
                            ))
                        }
                        </Select>
                    </FormControl> 
                    : <div></div>
                }
            </div>

            {searchClassesButton ? 
                    <div style={buttonContainer}><Button onClick={handleSearchButtonClick} style={searchButton} variant="contained">Search Classes</Button></div>
                : <div></div>}

            <Modal
            open={openSearchModal}
            onClose={handleSearchButtonClick}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <ClassCards 
                        classTerm={term} 
                        classSubject={subject} 
                        classCatalogNumber={catalogNumber} 
                        classList={classList}
                    >
                    </ClassCards>
                </Typography>
            </Box>
            </Modal>

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

const searchButton = {
    fontSize: '17px',
    fontWeight: "600",
    color: 'white',
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    color: "white",
    backgroundColor: "#E31C25",
}

const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "25px"
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
  }