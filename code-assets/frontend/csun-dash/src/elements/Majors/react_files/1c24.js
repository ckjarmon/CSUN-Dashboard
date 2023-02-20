
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


    function _1C24() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Business Administration: Marketing</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>Business Majors</li>
<li>A Business major is any student majoring in Accountancy; Information Systems; or Business Administration with an option in either Business Analytics, Business Law, Financial Analysis, Financial Planning, Global Supply Chain Management, Management, Marketing, Real Estate, Risk Management and Insurance, or Systems and Operations Management. The following are impacted majors with additional admission requirements: the B.S. in Accountancy and the B.S. in Business Administration with options in Financial Analysis, Financial Planning, and Risk Management and Insurance. All Business majors share 27 units of common lower division core courses and 19 units of common upper division core courses.</li>
<li>Double Major Requirements</li>
<li>Students seeking a double major in the David Nazarian College of Business and Economics must have at least a 3.0 overall GPA and be able to complete both majors within a maximum of 140 units.</li>
<li>Transfer Course Requirements</li>
<li>Students should be aware that no grade lower than a C will be accepted on transfer from another institution to satisfy department or David Nazarian College of Business and Economics requirements.</li>
<li>Residency Requirement</li>
<li>At least 50 percent of the business and economics course credit units and 50 percent of the specialized major credit units required for the Bachelor of Science degrees in Accountancy, Business Administration, or Information Systems and the Bachelor of Arts degree in Economics must be completed in residence at CSUN.</li>
<li>Course Requirements</li>
<li>Check course descriptions for prerequisite courses. Prerequisites must be completed prior to enrolling in each course.</li>
</ul>
<div style={redBoldStyle}>1. Common Lower Division Business Core (27-28 units)</div>
<ul style={list_style}>
<li>ACCT 220 Introduction to Financial Accounting (3)</li>
<li>ACCT 230 Introduction to Managerial Accounting (3)</li>
<li>BLAW 280 Business Law I (3)</li>
<li>ECON 160 Principles of Microeconomics (3)</li>
<li>ECON 161 Principles of Macroeconomics (3)</li>
<li>ENGL 205 Business Communication in Its Rhetorical Contexts (3)</li>
<li>IS 212 Information Systems for Business Users (3)</li>
<li>MATH 103 Mathematical Methods for Business (3)*</li>
<li>SOM 120 Basic Business Statistics (3)**</li>
<li>*MATH 103 or a higher-level mathematics course (e.g., Calculus: MATH 150A or MATH 255A) must be completed with a grade of C or better.</li>
<li>**MATH 140 Introductory Statistics (4) or MATH 140BUS Introductory Statistics for Business (4) also satisfies this requirement.</li>
</ul>
<div style={redBoldStyle}>2. Common Upper Division Business Core (19 units)</div>
<ul style={list_style}>
<li>BUS 302 The Gateway Experience (3)</li>
<li>BUS 302L The Gateway Experience Laboratory (1)</li>
<li>BUS 497A or BUS 497B Capstone (3)</li>
<li>FIN 303 Financial Management (3)</li>
<li>MGT 360 Management and Organizational Behavior (3)</li>
<li>MKT 304 Marketing Management (3)</li>
<li>SOM 306 Operations Management (3)</li>
</ul>
<div style={redBoldStyle}>3. Required Courses for the Marketing Option (9 units)</div>
<ul style={list_style}>
<li>MKT 346 Marketing Research (3)</li>
<li>MKT 348 Consumer Behavior (3)</li>
<li>MKT 449 Marketing Management Seminar (3)</li>
</ul>
<div style={redBoldStyle}>4. Elective Courses for the Marketing Option (11-12 units)</div>
<ul style={list_style}>
<li>Select 11-12 units from the Marketing Electives below. At least 9 of these 11-12 units must have the subject abbreviation MKT.</li>
<li>Marketing Electives</li>
<li>BANA 310 Data Visualization for Business (3)</li>
<li>BANA 430 Text Mining and Analytics for Business (3)***</li>
<li>BLAW 430 Marketing Law (3)</li>
<li>BLAW 450 Intellectual Property Law (3)</li>
<li>BUS 491CS Small Business Consulting (3)†</li>
<li>ECON 308 Economics for Managers (3)</li>
<li>ECON 309 The Use and Interpretation of Economic Data (3)</li>
<li>ECON 310 Price Theory and Applications (3)</li>
<li>MKT 350 Consumer Information in the Digital Age (3)</li>
<li>MKT 356 Marketing Metrics and Insights (3)</li>
<li>MKT 440 Integrated Marketing Communications (3)</li>
<li>MKT 441 Sales Management (3)</li>
<li>MKT 442/SCM 442 Business to Business Marketing (3)</li>
<li>MKT 443 Retail Management (3)</li>
<li>MKT 445 International Marketing Management (3)</li>
<li>MKT 447/SCM 447 Logistics and Transportation Management (3)</li>
<li>MKT 448 Digital Marketing (3)</li>
<li>MKT 459 Social Media Marketing (3)</li>
<li>MKT 498B Marketing Internship (2)††</li>
<li>SOM 307 Data Analysis and Modeling for Business (3)</li>
<li>***SOM 307 is a prerequisite for BANA 430.</li>
<li>†Senior Standing with a 3.0 or higher GPA; others will be considered with recommendation.</li>
<li>††MKT 498A-B corequisites fulfill the experiential requirement. An additional MKT 498B may be completed for 2 units of Marketing electives.</li>
</ul>
<div style={redBoldStyle}>5. Experiential Requirement (3 units)</div>
<ul style={list_style}>
<li>Select 3 units from the following courses to fulfill the Experiential requirement for the Marketing option. These units do not double count in the 11-12 unit Marketing elective requirement.</li>
<li>BUS 491CS Small Business Consulting (3)†</li>
<li>MKT 498A/MKT 498B Marketing Internship (1/2)</li>
<li>†Senior Standing with a 3.0 or higher GPA; others will be considered with recommendation.</li>
</ul>
<div style={redBoldStyle}>6. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>15 units are satisfied by the following courses in the major: MATH 103 satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; FIN 303 satisfies B5 Scientific Inquiry and Quantitative Reasoning; ECON 160 and ECON 161 satisfy D1 Social Sciences; and IS 212 satisfies E Lifelong Learning and fulfills the Information Competence requirement.</li>
<li>If taken, ECON 310 or MKT 350 satisfies upper division D1 Social Sciences.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 69-71</li>
<li>General Education Units: 33</li>
<li>Additional Units: 16-18</li>
<li>Total Units Required for the B.S. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _1C24