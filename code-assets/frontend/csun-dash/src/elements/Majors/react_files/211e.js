
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


    function _211E() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Mathematics: General</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>Requirements </li>
<li>In addition to University residency requirements for a bachelor's degree, the student must complete a minimum of 18 units of upper division Mathematics in residence at CSUN with the approval of a Mathematics advisor. Students in B.A. degree programs must fulfill the University requirement of at least 40 units of upper division coursework overall.</li>
<li>It is assumed that the student has a facility in mathematics normally gained by recent completion of four years of high school mathematics through trigonometry and Mathematical Analysis. Because of the variation in curricula at the high school level, it is necessary to obtain satisfactory scores on the Mathematics Placement Test (MPT) to enter the first mathematics course in the program, MATH 150A. Without satisfactory scores, a student will need to complete additional coursework.</li>
</ul>
<div style={redBoldStyle}>1. Lower Division Core for All Programs (23-24 units)</div>
<ul style={list_style}>
<ul style={option_style}>
<li>COMP 106/L Computing in Engineering and Science and Lab (2/1)</li>
<li>or COMP 110/L Introduction to Algorithms and Programming and Lab (3/1)</li>
</ul>
<li>MATH 150A Calculus I (5)</li>
<li>MATH 150B Calculus II (5)</li>
<li>MATH 250 Calculus III (3)</li>
<li>MATH 262 Introduction to Linear Algebra (3)</li>
<li>PHYS 220A Mechanics (3)</li>
<li>PHYS 220AL Mechanics Lab (1)</li>
<li>Students must complete the lower division core and one of the Mathematics options, and they must have at least a 2.0 GPA for all upper division units required in the major.</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Required Courses (24 units)</div>
<ul style={list_style}>
<li>MATH 320 Foundations of Higher Mathematics (3)</li>
<li>MATH 340 Introductory Probability (3)</li>
<li>MATH 351 Differential Equations (3)</li>
<li>MATH 360 Abstract Algebra I (3)</li>
<li>MATH 382/L Introduction to Scientific Computing and Lab (2/1)</li>
<li>MATH 450A Advanced Calculus I (3)</li>
<li>MATH 462 Advanced Linear Algebra (3)</li>
<li>MATH 493 Seminar in Mathematics (3)</li>
</ul>
<div style={redBoldStyle}>3. Upper Division Electives (9 units)</div>
<ul style={list_style}>
<li>Upper division Mathematics electives selected with advisor approval, not to include MATH 310/L, 311, 312, 331, 391 or 490. Students considering graduate work in mathematics are strongly advised to include MATH 450B, 455 and 460 in their program of study or to complete a B.S. degree in Mathematics.</li>
</ul>
<div style={redBoldStyle}>4. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>12 units are satisfied by the following courses in the major: PHYS 220A satisfies B1 Physical Science; PHYS 220AL satisfies B3 Science Laboratory Activity; MATH 150A satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; MATH 320 satisfies B5 Scientific Inquiry and Quantitative Reasoning; and COMP 110/L satisfies E Lifelong Learning.</li>
<li>Students are encouraged to take PHIL 230 to satisfy the Basic Skills A3 Critical Thinking requirement.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major/Option: 56-57</li>
<li>General Education Units: 36</li>
<li>Additional Units: 27-28</li>
<li>Total Units Required for the B.A. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _211E