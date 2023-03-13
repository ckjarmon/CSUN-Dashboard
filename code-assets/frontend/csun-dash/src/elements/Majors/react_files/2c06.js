
    import Header from "../../../components/Header";
    import Box from '@mui/system/Box'
    // import WebFont from 'webfontloader';

    const titleStyle = { color: '#E31C25', justifyContent: "center", textAlign: "center" }
    const redBoldStyle = { color: 'red', fontWeight: 'bold', textDecorationLine: 'underline', padding: "10px", textAlign: "left" }
    const subRedBoldStyle = { color: 'red', textDecorationLine: 'underline', textAlign: "left", marginLeft: "4%" }
    const subHeaderStyle = { color: 'black', fontweight: 'heavy', textDecorationLine: 'underline', padding: "2px", }

    const list_style = { marginLeft: "4%" }
    const sublist_style = { padding: "10px", marginLeft: "6%" }
    const subsequence_style = { padding: "5px" }

    const fineprint_style = { fontWeight: 'bold' }
    const option_style = { marginLeft: "2%", padding: "5px" }
    const information_style = { inlineSize: "1100px", overflowWrap: "break-word", padding: "10px", marginLeft: "2%" }
    const summary_style = { marginLeft: "2%", color: '#18E67F', fontWeight: 'bold', textDecorationLine: 'underline', textAlign: "left", fontSize: "20px" }


    function _2C06() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Computer Science</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>The B.S. in Computer Science program requires a total of 120 units, including General Education requirements, major core courses and a 15-unit senior electives package. To graduate, a student must complete a minimum of 18 residency units from the list of upper division required courses listed below in addition to all other institutional residency requirements.</li>
<li>Special Grade Requirements</li>
<li>Carefully check course prerequisites as many courses in the major require grades of C or better in prerequisite courses.</li>
<li>No grade lower than a C will be accepted on transfer from another institution to satisfy Computer Science requirements. Where specific grade requirements are not specified, no CSUN grade lower than a C- will be accepted for courses required in the Computer Science program.</li>
</ul>
<div style={redBoldStyle}>1. Lower Division Required Courses (36 units)</div>
<ul style={list_style}>
<li>COMP 110/L Introduction to Algorithms and Programming and Lab (3/1)</li>
<li>COMP 122/L Computer Architecture and Assembly Language and Lab (1/1)</li>
<li>COMP 182/L Data Structures and Program Design and Lab (3/1)</li>
<li>COMP 222 Computer Organization (3)</li>
<li>COMP 256/L Discrete Structures for Computer Science and Lab ( 3/1)</li>
<li>COMP 282 Advanced Data Structures (3)</li>
<li>MATH 150A Calculus I (5)</li>
<li>MATH 150B Calculus II (5)</li>
<li>MATH 262 Introduction to Linear Algebra (3)</li>
<li>PHIL 230 Introduction to Formal Logic (3)</li>
</ul>
<div style={redBoldStyle}>2. Lower Division Electives (12-14 units)</div>
<ul style={list_style}>
</ul>
<div style={subRedBoldStyle}>a. Select one of the following science sequences (8-10 units)</div>
<ul style={sublist_style}>
<ul style={option_style}>
<li>BIOL 106/BIOL 106L Biological Principles I and Lab (3/1)</li>
<li>and BIOL 107/BIOL 107L Biological Principles II and Lab (3/1)*</li>
</ul>
<ul style={option_style}>
<li>CHEM 101/CHEM 101D/CHEM 101L General Chemistry I and Discussion and Lab (3/1/1)</li>
<li>and CHEM 102/CHEM 102D/CHEM 102L General Chemistry II and Discussion and Lab (3/1/1)</li>
</ul>
<ul style={option_style}>
<li>PHYS 220A/PHYS 220AL Mechanics and Lab (3/1)</li>
<li>and PHYS 220B/PHYS 220BL Electricity and Magnetism and Lab (3/1)</li>
</ul>
<li>*BIOL 107/L has recommended prerequisites of CHEM 101 and CHEM 101L.</li>
</ul>
<div style={subRedBoldStyle}>b. Select an additional science course with corresponding lab outside of the sequence selected above (4-5 units)</div>
<ul style={sublist_style}>
<li>BIOL 106/BIOL 106L Biological Principles I and Lab (3/1)</li>
<li>CHEM 101/CHEM 101D/CHEM 101L General Chemistry I and Discussion and Lab (3/1/1)</li>
<li>GEOG 101/GEOG 102 The Physical Environment and Lab (3/1)</li>
<li>GEOG 103/GEOG 105 Weather and Lab (3/1)</li>
<li>GEOL 101/GEOL 102 Geology of Planet Earth and Lab (3/1)</li>
<li>GEOL 110/GEOL 112 Earth and Life through Time and Lab (3/1)</li>
<li>PHYS 220A/PHYS 220AL Mechanics and Lab (3/1)</li>
</ul>
<div style={redBoldStyle}>3. Upper Division Required Courses (24 units)</div>
<ul style={list_style}>
<li>Before taking upper division courses in Computer Science, students must be admitted to the Computer Science major/minor programs, the Computer Information Technology major program, the Computer Engineering major program or the Information Systems/Information Technology major program.</li>
<li>COMP 310 Automata, Languages and Computation (3)</li>
<li>COMP 322/L Introduction to Operating Systems and System Architecture and Lab (3/1)</li>
<li>COMP 333 Concepts of Programming Languages (3)</li>
<li>COMP 380/L Introduction to Software Engineering and Lab (2/1)</li>
<ul style={option_style}>
<li>COMP 482 Algorithm Design and Analysis (3)</li>
<li>or MATH 482 Combinatorial Algorithms (3)</li>
</ul>
<li>COMP 490/L Senior Design Project and Lab (3/1)</li>
<li>COMP 491L Senior Project Lab (1)</li>
<li>Select one of the following:</li>
<li>MATH 340 Probability (3)</li>
<li>MATH 341 Applied Statistics I (3)</li>
</ul>
<div style={redBoldStyle}>4. Upper Division Electives (15 units)</div>
<ul style={list_style}>
<li>Computer Science majors are required to take 15 units of senior electives.</li>
<li>The senior electives must consist of 15 units of 400- or 500-level courses in Computer Science (not COMP 450, 480/L, 482, 490/L, 491L, 494 or 499). The electives may include MATH 481A (Numerical Analysis) as 3 of the 15 units.</li>
<li>Requests for taking a 400- or 500-level course as a senior elective that does not meet the requirements stated above must be approved by the student's faculty advisor and by the department chair prior to enrollment in the course.</li>
<li>It is strongly recommended that students discuss their career goals with an advisor prior to selecting their senior electives. The advisor will suggest appropriate courses for the student to consider.</li>
</ul>
<div style={redBoldStyle}>5. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>18 units are satisfied by coursework in the major. Completion of the Computer Science major satisfies A3 Critical Thinking. 6 units of Physical Science or Life Science may be used to satisfy sections B1-3. MATH 150A satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; COMP 310 satisfies B5 Scientific Inquiry and Quantitative Reasoning; and COMP 110/L satisfies E Lifelong Learning.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 87-89</li>
<li>General Education Units: 30</li>
<li>Additional Units: 1-3</li>
<li>Total Units Required for the B.S. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _2C06