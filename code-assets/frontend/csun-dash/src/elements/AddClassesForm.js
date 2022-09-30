import { Dropdown } from 'semantic-ui-react'
import React, { Component }  from 'react';
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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';



function AddClassesForm(props){
    const [term, setTerm] = useState("")
    const [subject, setSubject] = useState("")
    const [catalogNumber, setCatalogNumber] = useState("")

    const [subjectDropDown, setSubjectDropDown] = useState(false)
    const [catalogNumberDropDown, setCatalogNumberDropDown] = useState(false)
    const [searchClassesButton, setSearchClassesButton] = useState(false)
    const [openSearchModal, setOpenSearchModal] = useState(false)
    const [addedSuccessfully, setAddedSuccessfully] = useState(false)
    const [removedSuccessfully, setRemovedSuccessfully] = useState(false)

    const [selectedClass, setSelectedClass] = useState([])
    const [catalogList,setcatalogList] = useState([])
    const [classList, setClassList] = useState([])
    const [assignedProf, setAssignedProf] = useState([])

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

        fetch(`http://127.0.0.1:8000/${value}/catalog`)
            .then(response => response.json())
            .then(data => {
                let catalogNums = []

                for(let i=0; i < data.length; i++){
                    catalogNums.push(data[i].catalog_number)
                }

                setcatalogList(catalogNums)
            })

        fetch(`http://127.0.0.1:8000/${value}/schedule`)
            .then(response => response.json())
            .then(data => {
                
                let classList = []

                for(let i=0; i < data.classes.length; i++){
                    classList.push(data.classes[i])
                }
                setClassList(classList)
            })
        
        fetch(`http://127.0.0.1:8000/${value}/prof`)
            .then(response => response.json())
            .then(data => {
                let profList = []
                let arrAssignedProf = []

                for(let i=0; i < data.profs.length; i++){
                    profList.push(data.profs[i])
                }

                for(let i=0; i < profList.length; i++){
                    for(let j=0; j < data[profList[i]].classes.length; j++){
                        arrAssignedProf.push(data[profList[i]].classes[j])
                    }
                }
                console.log(arrAssignedProf)
                setAssignedProf(arrAssignedProf)
            })
            
    }


    function onSelectClick(classItem){

        let arr = selectedClass
        if(arr.includes(classItem)){
            alert('Class Has Already Been Added')
        }else{
            arr.push(classItem)
            setSelectedClass(arr)
            handleSearchButtonClick(!openSearchModal)
            setAddedSuccessfully(true)
            setTimeout(() => {
                setAddedSuccessfully(false)
            }, 1500)
        }
    
    }

    const deleteClass = (classItem) => {
        let arr = selectedClass
         const filtredArr = arr.filter(element => element !== classItem)  
         setSelectedClass(filtredArr)
         setRemovedSuccessfully(true)
        setTimeout(() => {
            setRemovedSuccessfully(false)
        }, 1500) 
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
                        assignedProf={assignedProf}
                        onSelectClick={(item)=>onSelectClick(item)}
                    >
                    </ClassCards>
                </Typography>
            </Box>
            </Modal>

            {addedSuccessfully ? 
                <div style={{display:'flex', justifyContent:'center', marginTop: "40px"}}>
                    <Alert style={{width:'300px'}} variant="filled" severity="success">
                        Class Successfully Added
                    </Alert> 
                </div>
                : <div></div>}

            {removedSuccessfully ? 
                            <div style={{display:'flex', justifyContent:'center', marginTop: "40px"}}>
                                <Alert style={{width:'300px'}} variant="filled" severity="error">
                                    Class Successfully Removed
                                </Alert> 
                            </div>
                            : <div></div>}

            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
            {
                    selectedClass.map((item,i)=>(

                        <Box key={i} sx={{display:'flex', justifyContent:'center'}} style={{marginTop: "30px"}}>
                            <Card style={{width:'350px', margin: '20px'}} variant="outlined">
                            <CardContent sx={{p: 3}}>
                                <Typography style={{fontWeight: "bold" }} variant="h7" component="div">
                                    {item.classInfo.subject} {item.classInfo.catalog_number} - {item.classInfo.title}
                                </Typography>
                                <Typography style={{fontWeight: 'bold'}} sx={{ mb: 1.5 }} color="text.secondary">
                                    Professor: {item.instructor}
                                </Typography>
                                <Typography style={{fontWeight: 'bold'}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Class Number: {item.classNumber}
                                </Typography>
                                <Typography style={{fontWeight: 'bold'}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Location: {item.location}
                                </Typography>
                                <Typography style={{fontWeight: 'bold'}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Days: {item.days}
                                </Typography>
                                <Typography style={{fontWeight: 'bold'}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Time: {item.time}
                                </Typography>
                                <Typography style={{fontWeight: 'bold'}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Seats Available: {item.seatsAvailable}
                                </Typography>
                                </CardContent>
                                <CardActions style={{display:'flex', justifyContent:'center', paddingBottom:'20px'}}>
                                    <Button style={cardButtons} size="small" variant="contained">Ratings</Button>
                                    <Button onClick={() => deleteClass(item)}  style={cardButtons} size="small" variant="contained">Remove</Button>
                                </CardActions>
                            </Card>
                        </Box>


                    ))
                }
            </div>


        </div>
    )
}

export default AddClassesForm;

const formContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "50px"
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

  const cardButtons = {
    backgroundColor: "#E31C25",
    width: '100px'
  }