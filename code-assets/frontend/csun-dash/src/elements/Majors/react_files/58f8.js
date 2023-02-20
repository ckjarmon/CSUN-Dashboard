
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
    const summary_style = { marginLeft: "2%", color: 'blue', fontWeight: 'bold', textDecorationLine: 'underline', textAlign: "left", fontSize: "20px" }


    function _58F8() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Economics</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>Double Major Requirements</li>
<li>Students seeking a double major in the David Nazarian College of Business and Economics must have at least a 3.0 overall GPA and be able to complete both majors within a maximum of 140 units.</li>
<li>Transfer Course Requirements</li>
<li>Students should be aware that no grade lower than a C will be accepted on transfer from another institution to satisfy department or David Nazarian College of Business and Economics requirements.</li>
<li>Residency Requirement</li>
<li>At least 50 percent of the business and economics course credit units and 50 percent of the specialized major credit units required for the Bachelor of Science degrees in Accountancy, Business Administration or Information Systems and the Bachelor of Arts degree in Economics must be completed in residence at CSUN.</li>
<li>Required Courses</li>
</ul>
<div style={redBoldStyle}>1. Lower Division Required Courses (21 units)</div>
<ul style={list_style}>
<li>ACCT 220 Introduction to Financial Accounting (3)</li>
<ul style={option_style}>
<li>ENGL 205 Business Communication in Its Rhetorical Contexts (3)</li>
<li>or ENGL 305 Intermediate Expository Writing (3)</li>
</ul>
<li>or ENGL 306 Report Writing (3)</li>
<li>ECON 160 Principles of Microeconomics (3)</li>
<li>ECON 161 Principles of Macroeconomics (3)</li>
<li>IS 212 Information System for Business Users (3)</li>
<li>MATH 103 Mathematical Methods for Business (3)*</li>
<li>SOM 120 Statistics for Business and Economics (3)**</li>
<li>*MATH 103 or a higher-level mathematics course must be completed with a grade of C or higher. MATH 150A or 255A may be substituted. Course must be completed with a grade of C or higher.</li>
<li>**The 4-unit MATH 140 course also satisfies this requirement.</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Courses (27 units)</div>
<ul style={list_style}>
<li>Upper Division Required Courses (12 units)</li>
<li>ECON 309 The Use and Interpretation of Economic Data (3)</li>
<li>ECON 310 Price Theory and Applications (3)</li>
<li>ECON 311 Money, Banking and the Federal Reserve (3)</li>
<li>ECON 312 Macroeconomic Theory (3)</li>
<li>Upper Division Elective Courses (15 units)</li>
<li>Five upper division courses chosen from any Economics department listing, excluding ECON 498. At least three elective courses must be 400-level courses.</li>
</ul>
<div style={redBoldStyle}>3. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>15 units are satisfied by the following courses in the major: MATH 103 satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; ECON 309 satisfies B5 Scientific Inquiry and Quantitative Reasoning; ECON 160 and ECON 310 satisfy D1 Social Sciences; and IS 212 satisfies E Lifelong Learning and fulfills the Information Competence requirement.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 48</li>
<li>General Education Units: 33</li>
<li>Additional Units: 39</li>
<li>Total Units Required for the B.A. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _58F8