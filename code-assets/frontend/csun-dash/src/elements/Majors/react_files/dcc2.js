
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


    function _DCC2() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Manufacturing Systems Engineering</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>The Manufacturing Systems Engineering program is based on an expectation of adequate high school preparation in science, mathematics and English. High school courses should include algebra, plane geometry, trigonometry and chemistry or physics (both desirable), and 4 years of English.</li>
<li>CSUN provides the opportunity for students who have not had a complete background of pre-engineering work in high school to take courses to prepare for the major. These additional courses will not count toward the major and may increase the time to graduate. CSUN provides testing as outlined below to ensure that students start their engineering coursework at an appropriate level.</li>
<li>Placement Exam Requirements</li>
<li>The Mathematics Placement Test (MPT) is required prior to enrollment in MATH 150A. Students should take this exam before enrolling in their classes so they may be placed in the appropriate mathematics course. Students with scores of 4 or 5 on the AP Calculus AB or BC exams are exempt from the MPT.</li>
<li>The Chemistry Placement Test (CPT) is required with a minimum score of 40 prior to enrolling in CHEM 101. Students who have had high school chemistry and expect to enroll in CHEM 101 must take this test regardless of their score on the AP Chemistry exam. Students who do not achieve this CPT score must complete CHEM 100 with a grade of C or better before taking CHEM 101.</li>
<li>Special Grade Requirements</li>
<li>All students must complete the lower division writing requirement before enrolling in 300-level engineering courses.</li>
<li>A grade of C- or better is required in all courses in the major. A grade of C or better is required in all undergraduate transfer courses.</li>
<li>Senior-level courses cannot be taken unless the student previously completed or is concurrently completing all freshman-, sophomore- and junior-level core requirements.</li>
<li>A grade of C or higher is necessary in MATH 150B to meet the prerequisite requirements for the next-level math courses.</li>
</ul>
<div style={redBoldStyle}>1. Lower Division Required Courses (45 units)</div>
<ul style={list_style}>
<li>Freshman Year</li>
<li>CHEM 101 General Chemistry I (3)</li>
<li>CHEM 101D Problem Solving in General Chemistry I (1)</li>
<li>CHEM 101L General Chemistry I Lab (1)</li>
<li>MATH 150A Calculus I (5)</li>
<li>MATH 150B Calculus II (5)</li>
<li>MSE 101/L Introduction to Engineering and Lab (1/1)</li>
<li>PHYS 220A Mechanics (3)</li>
<li>PHYS 220AL Mechanics Lab (1)</li>
<li>Sophomore Year</li>
<li>CE 240 Engineering Statics (3)</li>
<li>ECE 240 Electrical Engineering Fundamentals (3)</li>
<li>ECE 240L Electrical Engineering Fundamentals Lab (1)</li>
<li>MATH 250 Calculus III (3)</li>
<li>MATH 280 Applied Differential Equations (3)</li>
<li>MSE 227 Engineering Materials (3)</li>
<li>MSE 227L Engineering Materials Lab (1)</li>
<li>MSE 248/L Engineering CAD and Graphics and Lab (2/1)</li>
<li>PHYS 220B Electricity and Magnetism (3)</li>
<li>PHYS 220BL Electricity and Magnetism Lab (1)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Required Courses (37 units)</div>
<ul style={list_style}>
<li>Junior Year</li>
<ul style={option_style}>
<li>AM 316 Engineering Dynamics (3)</li>
<li>or ME 370 Thermodynamics (3)</li>
</ul>
<li>CE 340 Strength of Materials (3)</li>
<li>MSE 304 Engineering Economic Analysis (3)</li>
<li>MSE 362 Engineering Statistical Applications (3)</li>
<li>MSE 402 Engineering Project Management (3)</li>
<li>MSE 407 Manufacturing Systems (3)</li>
<li>MSE 409/L Fundamentals of Computer-Aided Manufacturing and Lab (2/1)</li>
<li>MSE 412/L Manufacturing Processes and Lab (2/1)</li>
<li>Senior Year</li>
<li>MSE 403CS Facilities Planning and Design (3)</li>
<li>MSE 410/L Production Systems Modeling and Lab (2/1)</li>
<li>MSE 415 Product Design (3)</li>
<li>MSE 488A MSEM Senior Design I (2)</li>
<li>MSE 488BCS MSEM Senior Design II (2)</li>
</ul>
<div style={redBoldStyle}>3. Upper Division Major Elective Courses (12 units)</div>
<ul style={list_style}>
<li>Select four courses from among department 400-level and/or 500-level courses.</li>
</ul>
<div style={redBoldStyle}>4. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>21 units are satisfied by coursework in the major. Completion of the Manufacturing Systems Engineering major satisfies A3 Critical Thinking. 6 units of Physical Science may be used to satisfy sections B1-3. MATH 150A satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; MSE 362 satisfies B5 Scientific Inquiry and Quantitative Reasoning; MSE 304 satisfies 3 units of upper division D1 Social Sciences; and MSE 248/L satisfies E Lifelong Learning.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 94</li>
<li>General Education Units: 27</li>
<li>Total Units Required for the Degree: 121</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _DCC2