
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


    function _3358() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Physics: Physics</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>To enroll in the first courses in Mathematics and Chemistry, students must obtain a satisfactory score on the Mathematics Placement Test (MPT) and the Chemistry Placement Test (CPT). Without a satisfactory score, students may be required to take additional courses in preparation for the required courses. The student must complete all courses listed under lower division required courses as well as those listed under one of the two options. In addition, all students are required to take two comprehensive exams—one on general physics upon completion of PHYS 227 or its equivalent and one on advanced physics just before graduation. Finally, students are required to do a senior project in their final year and pass the associated class PHYS 497. The dates of these exams will be posted in the department office. For more information, consult the department undergraduate advisor.</li>
</ul>
<div style={redBoldStyle}>1. Lower Division Required Courses (36 units)</div>
<ul style={list_style}>
<li>CHEM 101 General Chemistry I (3)</li>
<li>CHEM 101D Problem Solving in General Chemistry I (1)</li>
<li>CHEM 101L General Chemistry I Lab (1)</li>
<li>MATH 150A Calculus I (5)</li>
<li>MATH 150B Calculus II (5)</li>
<li>MATH 250 Calculus III (3)</li>
<li>MATH 280 Applied Differential Equations (3)</li>
<ul style={option_style}>
<li>PHYS 225 Physics I (4)</li>
<li>and PHYS 220AL Mechanics Lab (1)</li>
</ul>
<ul style={option_style}>
<li>PHYS 226 Physics II (4)</li>
<li>and PHYS 220BL Electricity and Magnetism Lab (1)</li>
</ul>
<li>PHYS 227 Physics III (4)</li>
<li>PHYS 227L Physics III Lab (1)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Required Courses (37 units)</div>
<ul style={list_style}>
<li>PHYS 301 Analytical Mechanics I (3)</li>
<li>PHYS 311 Electromagnetism I (3)</li>
<li>PHYS 365 Experimental Physics I (2)</li>
<li>PHYS 366 Experimental Physics II (2)</li>
<li>PHYS 375 Quantum Physics I (3)</li>
<li>PHYS 389 Mathematical Methods in Physics I (3)</li>
<li>PHYS 402 Analytical Mechanics II (3)</li>
<li>PHYS 410 Electromagnetism II (3)</li>
<li>PHYS 431 Thermodynamics and Statistical Mechanics (4)</li>
<li>PHYS 451 Quantum Physics II (3)</li>
<li>PHYS 465 Experimental Physics III (2)</li>
<li>PHYS 466 Experimental Physics IV (2)</li>
<li>PHYS 493 Physics and Astronomy Colloquium (1)</li>
<li>PHYS 497 Senior Project (3)</li>
</ul>
<div style={redBoldStyle}>3. Upper Division Electives (6 units)</div>
<ul style={list_style}>
<li>A minimum of 6 units of upper division electives chosen with the approval of the department undergraduate advisor from the following or other courses, including Mathematics or Engineering, if approved by the department undergraduate advisor:</li>
<li>ASTR 301 Astrophysics II (3)</li>
<li>ASTR 401 The Radiative Universe (3)</li>
<li>PHYS 420 Modern Optics (3)</li>
<li>PHYS 421 Laser Physics (3)</li>
<li>PHYS 470 Introduction to Nuclear and Elementary Particle Physics (3)</li>
<li>PHYS 480 Introduction to Solid State Physics (3)</li>
<li>PHYS 489 Mathematical Methods in Physics II (3)</li>
<li>PHYS 490 Computer Applications in Physics (3)</li>
</ul>
<div style={redBoldStyle}>4. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>9 units are satisfied by the following courses in the major: CHEM 101 satisfies B1 Physical Science; CHEM 101L satisfies B3 Science Laboratory Activity; MATH 150A satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; and PHYS 301 satisfies B5 Scientific Inquiry and Quantitative Reasoning.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major/Option: 79</li>
<li>General Education Units: 39</li>
<li>Additional Units: 2</li>
<li>Total Units Required for the B.S. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _3358