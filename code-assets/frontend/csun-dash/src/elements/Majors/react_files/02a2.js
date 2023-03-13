
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


    function _02A2() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Mechanical Engineering</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>The Mechanical Engineering program assumes that students have a strong high school preparation in science, mathematics and English. High school courses should include four years of mathematics, four years of English and at least one year of Chemistry and Physics with labs. The mathematics courses should include geometry, trigonometry and algebra. Calculus is desirable.</li>
<li>CSUN provides the opportunity for students who have not had a complete background of pre-engineering work in high school to take courses to prepare for the major. These additional courses will not count toward the major and may increase the time to graduate. CSUN provides testing as outlined below to ensure that students start their engineering coursework at an appropriate level.</li>
<li>Placement Exam Requirements</li>
<li>Students entering the Mechanical Engineering program need to take the following exams:</li>
<li>The Mathematics Placement Test (MPT) is required prior to enrollment in MATH 150A. Students should take this exam before enrolling in their classes so they may be placed in the appropriate mathematics course. Students with scores of 4 or 5 on the AP Calculus AB or BC exams are exempt from the MPT.</li>
<li>The Chemistry Placement Test (CPT) is required with a minimum score of 40 prior to enrolling in CHEM 101. Students who have had high school chemistry and expect to enroll in CHEM 101 must take this test regardless of their score on the AP Chemistry exam. Students who do not achieve this CPT score must complete CHEM 100 with a grade of C or better before taking CHEM 101.</li>
<li>Special Grade Requirements</li>
<li>All students must complete the lower division writing requirement before enrolling in any 300-level engineering courses.</li>
<li>A grade of C- or better is required in all courses in the major. A grade of C or better is required in all undergraduate transfer courses.</li>
<li>Senior-year courses cannot be taken unless the student has previously completed, or is concurrently completing, all freshman-, sophomore- and junior-year requirements.</li>
<li>A grade of C or higher is necessary in MATH 150B to meet the prerequisite requirements for the next-level math courses.</li>
<li>Course Requirements</li>
</ul>
<div style={redBoldStyle}>1. Lower Division Required Courses (47 units)</div>
<ul style={list_style}>
</ul>
<div style={subRedBoldStyle}>a. Freshman Year</div>
<ul style={sublist_style}>
<li>CHEM 101 General Chemistry I (3)</li>
<li>CHEM 101D Problem Solving in General Chemistry I (1)</li>
<li>CHEM 101L General Chemistry I Lab (1)</li>
<li>MATH 150A Calculus I (5)</li>
<li>MATH 150B Calculus II (5)</li>
<li>ME 101/L Introduction to Mechanical Engineering and Lab (1/1)</li>
<li>ME 186/L Computer-Aided Design and Lab (1/1)</li>
<li>PHYS 220A Mechanics (3)</li>
<li>PHYS 220AL Mechanics Lab (1)</li>
</ul>
<div style={subRedBoldStyle}>b. Sophomore Year</div>
<ul style={sublist_style}>
<li>CE 240 Engineering Statics (3)</li>
<li>ECE 240 Electrical Engineering Fundamentals (3)</li>
<li>ECE 240L Electrical Engineering Fundamentals Lab (1)</li>
<li>MATH 250 Calculus III (3)</li>
<ul style={option_style}>
<li>MATH 280 Applied Differential Equations (3)</li>
<li>or ECE 280 Applied Differential Equations in Electrical Engineering (3)</li>
</ul>
<li>or ME 280 Differential Equations for Mechanical Engineers (3)</li>
<li>ME 209 Programming for Mechanical Engineers (1)</li>
<li>ME 286 Mechanical Engineering Design (2)</li>
<li>MSE 227 Engineering Materials (3)</li>
<li>MSE 227L Engineering Materials Lab (1)</li>
<li>PHYS 220B Electricity and Magnetism (3)</li>
<li>PHYS 220BL Electricity and Magnetism Lab (1)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Required Courses (52 units)</div>
<ul style={list_style}>
</ul>
<div style={subRedBoldStyle}>a. Junior Year</div>
<ul style={sublist_style}>
<li>AM 316 Engineering Dynamics (3)</li>
<li>AM 317 Mechanics Lab (1)</li>
<li>CE 340 Strength of Materials (3)</li>
<li>ME 309 Numerical Analysis of Engineering Systems (2)</li>
<li>ME 330 Machine Design (3)</li>
<li>ME 335/L Mechanical Measurements and Lab (1/1)</li>
<li>ME 370 Thermodynamics (3)</li>
<li>ME 375 Heat Transfer I (3)</li>
<li>ME 386/L Computer-Aided Analysis and Design and Lab (2/1)</li>
<li>ME 390 Fluid Mechanics (3)</li>
<li>MSE 304 Engineering Economic Analysis (3)</li>
</ul>
<div style={subRedBoldStyle}>b. Senior Year</div>
<ul style={sublist_style}>
<li>ME 384 System Dynamics: Modeling, Analysis and Simulation (3)</li>
<li>ME 435/L Mechatronics and Lab (2/1)</li>
<li>ME 486A Senior Design in Mechanical Engineering I (2)</li>
<li>ME 486B Senior Design in Mechanical Engineering II (2)</li>
<li>ME 491 Experimental Methods in Thermal-Fluids Systems (1)</li>
</ul>
<div style={subRedBoldStyle}>c. Upper Division Senior Electives (12 units)</div>
<ul style={sublist_style}>
<li>Students must select 12 units of electives from 400- and/or 500-level engineering courses. These electives, together with the required senior-year courses listed above, constitute the student's Mechanical Engineering senior year. The elective program must be approved by the Mechanical Engineering department before the student files a graduation check. Up to 6 units from the following list of non-ME courses may be taken as senior electives.</li>
<li>AM 410 Vibration Analysis (3)</li>
<li>CE 460/L Engineering Hydrology and Lab (2/1)</li>
<li>CE 487 Water Pollution (3)</li>
<li>ECE 410/L Electrical Machines and Energy Conversion and Lab (3/1)</li>
<li>ECE 411 Electric Power Systems (3)</li>
<li>ECE 412 Power Electronics (3)</li>
<li>ECE 420 Digital Systems Design with Programmable Logic (3)</li>
<li>ECE 425/L Microprocessor Systems and Lab (3/1)</li>
<li>ECE 440/L Electronics II and Lab (3/1)</li>
<li>ECE 501 Introduction to Biomedical Engineering (3)</li>
<li>MSE 527/L Mechanical Behavior of Materials and Lab (2/1)</li>
</ul>
<div style={redBoldStyle}>3. General Education (27 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>21 units are satisfied by coursework in the major. Completion of the Mechanical Engineering major satisfies A3 Critical Thinking. 6 units of Physical Science may be used to satisfy sections B1-3. MATH 150A satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; ME 370 satisfies B5 Scientific Inquiry and Quantitative Reasoning; MSE 304 satisfies 3 units of upper division D1 Social Sciences; and ME 101/L and ME 209 satisfy E Lifelong Learning.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 99</li>
<li>General Education Units: 27</li>
<li>Total Units Required for the B.S. Degree: 126</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _02A2