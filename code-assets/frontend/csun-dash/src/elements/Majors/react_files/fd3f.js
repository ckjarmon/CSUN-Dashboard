
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


    function _FD3F() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Construction Management</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>Special Grade Requirements</li>
<li>A grade of C- or better is required in all courses in the major.</li>
<li>Senior-level (400-plus) courses cannot be taken unless the student has previously completed or is concurrently completing all freshman-, sophomore- and junior-level core requirements.</li>
<li>Course Requirements</li>
</ul>
<div style={redBoldStyle}>1. Lower Division Required Courses (44-45 units)</div>
<ul style={list_style}>
<li>Freshman Year</li>
<li>BIOL 106 Biological Principles I (3)</li>
<li>BIOL 106L Biological Principles I Lab (1)</li>
<li>COMP 100 Computers: Their Impact and Use (3)</li>
<li>CM 110/L Construction Drawings and Lab (1/1)</li>
<li>ECON 160 Principles of Microeconomics (3)</li>
<li>PHYS 100A General Physics I (3)</li>
<li>PHYS 100AL General Physics I Lab (1)</li>
<li>PHYS 100B General Physics II (3)</li>
<li>PHYS 100BL General Physics II Lab (1)</li>
<li>Sophomore Year</li>
<li>ACCT 220 Introduction to Financial Accounting (3)</li>
<li>BLAW 280 Business Law I (3)</li>
<li>CM 208/L Construction Site Surveying and Lab (2/1)</li>
<li>CM 210/L Construction Contract Documents and Lab (2/1)</li>
<li>CM 240/L Building Construction and Lab (2/1)</li>
<li>MATH 255A Calculus for the Life Sciences I (3)</li>
<ul style={option_style}>
<li>MATH 255B Calculus for the Life Sciences II (3)</li>
<li>or MATH 140 Introductory Statistics (4)</li>
</ul>
<li>or SOM 120 Basic Business Statistics (3)</li>
<li>MSE 220/L Construction Materials and Lab (2/1)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Required Courses (59 units)</div>
<ul style={list_style}>
<li>Junior Year</li>
<li>CM 309 Computer Applications in Construction Management (2)</li>
<li>CM 310/L Construction Estimating and Lab (2/1)</li>
<li>CM 312/L Project Cost Control, Planning and Scheduling and Lab (2/1)</li>
<li>CM 321 Introduction to Mechanical and Electrical Installation (2)</li>
<li>CM 326/L Soil Mechanics for Technology and Lab (2/1)</li>
<li>CM 334/L Construction Equipment and Methods (2/1)</li>
<li>CM 336/L Fundamentals of Green Buildings and Lab (2/1)</li>
<li>CM 340 Statics and Strength of Materials (3)</li>
<li>ENGL 306 Report Writing (3)</li>
<li>MGT 360 Management and Organizational Behavior (3)</li>
<li>MSE 300 Construction Technology Economy (3)</li>
<li>Senior Year</li>
<li>BLAW 481 Real Estate Law (3)</li>
<li>CM 401 Construction Contract Administration (3)</li>
<li>CM 415/L Fundamentals of Construction Management and Lab (2/1)</li>
<li>CM 434 Site Planning and Logistics (3)</li>
<li>CM 440/L Structural Design and Lab (2/1)</li>
<li>CM 441/L Highway Design and Lab (2/1)</li>
<li>CM 449 Dispute Prevention (1)</li>
<li>CM 480 Construction Law (3)</li>
<li>CM 488A Construction Senior Design I (2)</li>
<li>CM 488B Construction Senior Design II (2)</li>
<li>CM 494 Cooperative Educational Experience (2)</li>
</ul>
<div style={redBoldStyle}>3. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>27 units are satisfied by the coursework in the major. Completion of the Construction Management major satisfies A3 Critical Thinking. PHYS 100A satisfies B1 Physical Science; BIOL 106 satisfies B2 Life Science; PHYS 100AL satisfies B3 Science Laboratory Activity; MATH 255A satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; CM 336/L satisfies B5 Scientific Inquiry and Quantitative Reasoning; ENGL 306 satisfies C2 Humanities; ECON 160 and MSE 300 satisfy D1 Social Sciences; and COMP 100 satisfies E Lifelong Learning and fulfills the Information Competence requirement.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 103-104</li>
<li>General Education Units: 21</li>
<li>Total Units Required for the B.S. Degree: 124-125</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _FD3F