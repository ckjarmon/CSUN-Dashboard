import Header from "../../components/Header";
import Box from '@mui/system/Box'
import React from 'react';

const prog_reqqs = [
    "Program Requirements",
    "The B.S. in Computer Science program requires a total of 120 units, including General Education requirements, major core courses and a 15-unit senior electives package. To graduate, a student must complete a minimum of 18 residency units from the list of upper division required courses listed below in addition to all other institutional residency requirements.",
    "Special Grade Requirements",
    "Carefully check course prerequisites as many courses in the major require grades of C or better in prerequisite courses.",
    "No grade lower than a C will be accepted on transfer from another institution to satisfy Computer Science requirements. Where specific grade requirements are not specified, no CSUN grade lower than a C- will be accepted for courses required in the Computer Science program.",
    "1. Lower Division Required Courses (36 units)",
    "COMP 110/L Introduction to Algorithms and Programming and Lab (3/1)",
    "COMP 122/L Computer Architecture and Assembly Language and Lab (1/1)",
    "COMP 182/L Data Structures and Program Design and Lab (3/1)",
    "COMP 222 Computer Organization (3)",
    "COMP 256/L Discrete Structures for Computer Science and Lab ( 3/1)",
    "COMP 282 Advanced Data Structures (3)",
    "MATH 150A Calculus I (5)",
    "MATH 150B Calculus II (5)",
    "MATH 262 Introduction to Linear Algebra (3)",
    "PHIL 230 Introduction to Formal Logic (3)",
    "2. Lower Division Electives (12-14 units)",
    "a. Select one of the following science sequences (8-10 units)",
    "BIOL 106/BIOL 106L Biological Principles I and Lab (3/1)",
    "and BIOL 107/BIOL 107L Biological Principles II and Lab (3/1)*",
    "CHEM 101/CHEM 101D/CHEM 101L General Chemistry I and Discussion and Lab (3/1/1)",
    "and CHEM 102/CHEM 102D/CHEM 102L General Chemistry II and Discussion and Lab (3/1/1)",
    "PHYS 220A/PHYS 220AL Mechanics and Lab (3/1)",
    "and PHYS 220B/PHYS 220BL Electricity and Magnetism and Lab (3/1)",
    "*BIOL 107/L has recommended prerequisites of CHEM 101 and CHEM 101L.",
    "b. Select an additional science course with corresponding lab outside of the sequence selected above (4-5 units)",
    "BIOL 106/BIOL 106L Biological Principles I and Lab (3/1)",
    "CHEM 101/CHEM 101D/CHEM 101L General Chemistry I and Discussion and Lab (3/1/1)",
    "GEOG 101/GEOG 102 The Physical Environment and Lab (3/1)",
    "GEOG 103/GEOG 105 Weather and Lab (3/1)",
    "GEOL 101/GEOL 102 Geology of Planet Earth and Lab (3/1)",
    "GEOL 110/GEOL 112 Earth and Life through Time and Lab (3/1)",
    "PHYS 220A/PHYS 220AL Mechanics and Lab (3/1)",
    "3. Upper Division Required Courses (24 units)",
    "Before taking upper division courses in Computer Science, students must be admitted to the Computer Science major/minor programs, the Computer Information Technology major program, the Computer Engineering major program or the Information Systems/Information Technology major program.",
    "COMP 310 Automata, Languages and Computation (3)",
    "COMP 322/L Introduction to Operating Systems and System Architecture and Lab (3/1)",
    "COMP 333 Concepts of Programming Languages (3)",
    "COMP 380/L Introduction to Software Engineering and Lab (2/1)",
    "COMP 482 Algorithm Design and Analysis (3)",
    "or MATH 482 Combinatorial Algorithms (3)",
    "COMP 490/L Senior Design Project and Lab (3/1)",
    "COMP 491L Senior Project Lab (1)",
    "Select one of the following:",
    "MATH 340 Probability (3)",
    "MATH 341 Applied Statistics I (3)",
    "4. Upper Division Electives (15 units)",
    "Computer Science majors are required to take 15 units of senior electives.",
    "The senior electives must consist of 15 units of 400- or 500-level courses in Computer Science (not COMP 450, 480/L, 482, 490/L, 491L, 494 or 499). The electives may include MATH 481A (Numerical Analysis) as 3 of the 15 units.",
    "Requests for taking a 400- or 500-level course as a senior elective that does not meet the requirements stated above must be approved by the student's faculty advisor and by the department chair prior to enrollment in the course.",
    "It is strongly recommended that students discuss their career goals with an advisor prior to selecting their senior electives. The advisor will suggest appropriate courses for the student to consider.",
    "5. General Education (48 units)",
    "Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.",
    "18 units are satisfied by coursework in the major. Completion of the Computer Science major satisfies A3 Critical Thinking. 6 units of Physical Science or Life Science may be used to satisfy sections B1-3. MATH 150A satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; COMP 310 satisfies B5 Scientific Inquiry and Quantitative Reasoning; and COMP 110/L satisfies E Lifelong Learning.",
    "Total Units in the Major: 87-89",
    "General Education Units: 30",
    "Additional Units: 1-3",
    "Total Units Required for the B.S. Degree: 120"
]
const titleStyle = { color: 'green' }
const redBoldStyle = { color: 'red', fontWeight: 'bold', textDecorationLine: 'underline' }
const boldStyle = { fontweight: 'bold' }
function CS() {
    return (
        <div style={{ backgroundColor: "#BB000E" }}>
            <Header></Header>

            <div style={{ marginRight: '5%', marginLeft: '5%', marginTop: '30px', width: '95%' }}>
                <Box color="black" bgcolor="white" p={1}>
                    <div style={{ float: "right", marginTop: '30px', width: '20%' ,padding: "20px"}}>
                        <Box color="white" bgcolor="purple" p={1}> {/* second box within the box*/}
                            This is a test box <br></br>
                            for all the csun stuff <br></br>
                            quick links <br></br>
                            etc <br></br>
                            not entirely sure how to expand the box but it expands as you type it so good luck<br></br>
                            <br></br>
                            this is also horribly disorganized but it works so <br></br>
                            <br></br>
                            another issue is that the main box is glued to the right edge and idk how to fix that
                            
                        </Box>
                    </div>
                    <h2 style={titleStyle}>Computer Science</h2>
                    <div style={redBoldStyle}>Program Requirements</div>
                    <div>The B.S. in Computer Science program requires a total of 120 units, including General Education requirements, major core courses and a 15-unit senior electives package. To graduate, a student must complete a minimum of 18 residency units from the list of upper division required courses listed below in addition to all other institutional residency requirements.</div>
                    <div>Special Grade Requirements</div>
                    <div>Carefully check course prerequisites as many courses in the major require grades of C or
                        better in prerequisite courses.</div>
                    <div>No grade lower than a C will be accepted on transfer from another institution to satisfy
                        Computer Science requirements. Where specific grade requirements are not specified, no CSUN grade lower than a C- will be accepted for courses required in the Computer Science program.</div>
                    <div style={redBoldStyle}>1. Lower Division Required Courses (36 units)</div>
                    <div>COMP 110/L Introduction to Algorithms and Programming and Lab (3/1)</div>
                    <div>COMP 122/L Computer Architecture and Assembly Language and Lab (1/1)</div>
                    <div>COMP 182/L Data Structures and Program Design and Lab (3/1)</div>
                    <div>COMP 222 Computer Organization (3)</div>
                    <div>COMP 256/L Discrete Structures for Computer Science and Lab ( 3/1)</div>
                    <div>COMP 282 Advanced Data Structures (3)</div>
                    <div>MATH 150A Calculus I (5)</div>
                    <div>MATH 150B Calculus II (5)</div>
                    <div>MATH 262 Introduction to Linear Algebra (3)</div>
                    <div>PHIL 230 Introduction to Formal Logic (3)</div>
                    <div style={redBoldStyle}>2. Lower Division Electives (12-14 units)</div>
                    <div style={boldStyle}>a. Select one of the following science sequences (8-10 units)</div>
                    <div>BIOL 106/BIOL 106L Biological Principles I and Lab (3/1)</div>
                    <div>and BIOL 107/BIOL 107L Biological Principles II and Lab (3/1)*</div>
                    <div>CHEM 101/CHEM 101D/CHEM 101L General Chemistry I and Discussion and Lab (3/1/1)</div>
                    <div>and CHEM 102/CHEM 102D/CHEM 102L General Chemistry II and Discussion and Lab (3/1/1)</div>
                    <div>PHYS 220A/PHYS 220AL Mechanics and Lab (3/1)</div>
                    <div>and PHYS 220B/PHYS 220BL Electricity and Magnetism and Lab (3/1)</div>
                    <div>*BIOL 107/L has recommended prerequisites of CHEM 101 and CHEM 101L.</div>
                    <div>b. Select an additional science course with corresponding lab outside of the sequence selected above (4-5 units)</div>
                    <div>BIOL 106/BIOL 106L Biological Principles I and Lab (3/1)</div>
                    <div>CHEM 101/CHEM 101D/CHEM 101L General Chemistry I and Discussion and Lab (3/1/1)</div>
                    <div>GEOG 101/GEOG 102 The Physical Environment and Lab (3/1)</div>
                    <div>GEOG 103/GEOG 105 Weather and Lab (3/1)</div>
                    <div>GEOL 101/GEOL 102 Geology of Planet Earth and Lab (3/1)</div>
                    <div>GEOL 110/GEOL 112 Earth and Life through Time and Lab (3/1)</div>
                    <div>PHYS 220A/PHYS 220AL Mechanics and Lab (3/1)</div>
                    <div style={redBoldStyle}>3. Upper Division Required Courses (24 units)</div>
                    <div>Before taking upper division courses in Computer Science, students must be admitted to the Computer Science major/minor programs, the Computer Information Technology major program, the Computer Engineering major program or the Information Systems/Information Technology major program.</div>
                    <div>COMP 310 Automata, Languages and Computation (3)</div>
                    <div>COMP 322/L Introduction to Operating Systems and System Architecture and Lab (3/1)</div>
                    <div>COMP 333 Concepts of Programming Languages (3)</div>
                    <div>COMP 380/L Introduction to Software Engineering and Lab (2/1)</div>
                    <div>COMP 482 Algorithm Design and Analysis (3)</div>
                    <div>or MATH 482 Combinatorial Algorithms (3)</div>
                    <div>COMP 490/L Senior Design Project and Lab (3/1)</div>
                    <div>COMP 491L Senior Project Lab (1)</div>
                    <div>Select one of the following:</div>
                    <div>MATH 340 Probability (3)</div>
                    <div>MATH 341 Applied Statistics I (3)</div>
                    <div style={redBoldStyle}>4. Upper Division Electives (15 units)</div>
                    <div>Computer Science majors are required to take 15 units of senior electives.</div>
                    <div>The senior electives must consist of 15 units of 400- or 500-level courses in Computer Science (not COMP 450, 480/L, 482, 490/L, 491L, 494 or 499). The electives may include MATH 481A (Numerical Analysis) as 3 of the 15 units.</div>
                    <div>Requests for taking a 400- or 500-level course as a senior elective that does not meet the requirements stated above must be approved by the student's faculty advisor and by the department chair prior to enrollment in the course.</div>
                    <div>It is strongly recommended that students discuss their career goals with an advisor prior to selecting their senior electives. The advisor will suggest appropriate courses for the student to consider.</div>
                    <div style={redBoldStyle}>5. General Education (48 units)</div>
                    <div>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</div>
                    <div>18 units are satisfied by coursework in the major. Completion of the Computer Science major satisfies A3 Critical Thinking. 6 units of Physical Science or Life Science may be used to
                        satisfy sections B1-3. MATH 150A satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; COMP 310 satisfies B5 Scientific Inquiry and Quantitative Reasoning; and COMP 110/L satisfies E Lifelong Learning.</div>
                    <div>Total Units in the Major: 87-89</div>
                    <div>General Education Units: 30</div>
                    <div>Additional Units: 1-3</div>
                    <div>Total Units Required for the B.S. Degree: 120</div>
                    <div style={{ marginLeft: '80%', marginTop: '0px', width: '10%' }}>

                    </div>
                </Box>
            </div>

        </div>

    )
}


export default CS