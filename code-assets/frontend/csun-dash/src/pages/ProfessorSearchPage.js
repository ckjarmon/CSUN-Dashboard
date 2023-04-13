import Header from "../components/Header";
import Footer from '../components/Footer';
import SubjectSearchDropdown from "../elements/Professor_Search/SubjectSearchDropdown";
import ProfessorsSearchBody from "../elements/Professor_Search/ProfessorsSearchBody";
import { useState } from 'react'


function ProfessorsSearchPage() {
    const [allProfessors, setAllProfessors] = useState([])
    const [subject, setSubject] = useState("")


    function handleSubjectChange(event) {
        setSubject(event.target.value)

        fetch(`${process.env.REACT_APP_API_URL}/${event.target.value}/professors`)
            .then(response => response.json())
            .then(professors => {
                let professorsArray = []

                professors.map((professor) => {
                    professorsArray.push(professor)
                })

                setAllProfessors(professorsArray)
            })


    }

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
            <Header></Header>

            <h1 style={{ textAlign: "center", marginTop: "20px", color: "white" }}>Search For Faculty Members</h1>
            <SubjectSearchDropdown
                handleSubjectChange={handleSubjectChange}
                subject={subject}
            />

            {allProfessors.length > 0 ?
                <ProfessorsSearchBody 
                    allProfessors={allProfessors}
                /> : !subject ? <div></div> : <h1 style={{ color: "white", marginTop: "100px" }}>No Professors in Selected Department</h1>
            }
            <Footer></Footer>
        </div>
    )
}

export default ProfessorsSearchPage