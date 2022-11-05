import Header from "../components/Header";
import SubjectSearchDropdown from "../elements/Professor Search/SubjectSearchDropdown";
import ProfessorsSearchBody from "../elements/Professor Search/ProfessorsSearchBody";
import {useState} from 'react'


function ProfessorsSearchPage(){
    const [allProfessors, setAllProfessors] = useState([])
    const [subject, setSubject] = useState("")


    function handleSubjectChange(event){
        setSubject(event.target.value)

        fetch(`http://127.0.0.1:5000/${event.target.value}/professors`)
        .then(response => response.json())
        .then(professors => {
            let professorsArray = []

            professors.map((professor) => {
                professorsArray.push(professor)
            })

            setAllProfessors(professorsArray)
        })


    }

    return(
        <div style={{minHeight: "100vh", backgroundColor:"#1C1C1C"}}>
            <Header></Header>
            
            <h1 style={{textAlign:"center", margin:"40px 0px", color:"white"}}>Search For Faculty Members</h1>
            <SubjectSearchDropdown 
                handleSubjectChange={handleSubjectChange}
                subject={subject}
            />

            {allProfessors.length > 0 ? 
                <ProfessorsSearchBody
                    allProfessors={allProfessors}
                /> : !subject ? <div></div> : <h1 style={{color:"white", marginTop:"100px"}}>No Professors in Selected Department</h1>
            }
        </div>
    )
}

export default ProfessorsSearchPage