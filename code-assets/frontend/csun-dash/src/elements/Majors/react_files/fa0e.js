
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


    function _FA0E() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Urban Studies and Planning</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>A. Core Course Requirements (34 units)</div>
<ul style={list_style}>
<li>All Urban Studies and Planning majors are required to complete the lower division required courses and the upper division core courses. Students must then choose five elective courses from the list under the electives in Section B.</li>
</ul>
<div style={redBoldStyle}>1. Lower Division Required Courses (6 units)</div>
<ul style={list_style}>
<li>URBS 206 Introduction to Graphic Communication Tools Used by Urban Studies and Planning Professionals (3)</li>
<li>URBS 250 Planning the Multiethnic City (3)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Required Courses (22 units)</div>
<ul style={list_style}>
<li>URBS 300 Planning Theory (3)</li>
<li>URBS 310 Growth and Sustainable Development of Cities (3)</li>
<li>URBS 340A Quantitative Urban Research Methods (3)</li>
<li>URBS 340B Qualitative Urban Research Methods (3)</li>
<li>URBS 440 Community-Based Urban Design (3)</li>
<li>URBS 450 Senior Seminar in Urban Studies and Planning (4)</li>
<li>URBS 460 Legal Foundations of Planning (3)</li>
</ul>
<div style={redBoldStyle}>3. Fieldwork and Internship (6 units)</div>
<ul style={list_style}>
<li>URBS 490C Fieldwork (3)</li>
<li>URBS 494C Internship (3)</li>
</ul>
<div style={redBoldStyle}>B. Electives Requirement (15 units)</div>
<ul style={list_style}>
<li>Choose five of the following elective courses:</li>
<li>GEOG 206/L Introduction to Geographical Information Science and Lab (2/1)</li>
<li>GEOG 306/L Intermediate Geographical Information Science and Lab (2/1)</li>
<li>URBS 345 The General Plan and Zoning (3)</li>
<li>URBS 350 Cities of the Developing World (3)</li>
<li>URBS 380 Los Angeles: Past, Present, Future (3)</li>
<li>URBS 400 Planning for the Natural and Built Environment (3)</li>
<li>URBS 405 Advanced Research Methods for Planning (3)</li>
<li>URBS 408 Policy Making for Urban Planners (3)</li>
<li>URBS 412 Grant Writing (3)</li>
<li>URBS 415 The California Environmental Quality Act for Urban Planners (3)</li>
<li>URBS 416 Urban Housing (3)</li>
<li>URBS 420 Communities, Neighborhoods and Planning (3)</li>
<li>URBS 425 Social Policy, Environmental Justice and the City (3)</li>
<li>URBS 430 Planning in the Public Sector (3)</li>
<li>URBS 435 Planning for Community Development (3)</li>
<li>URBS 440 Community-Based Urban Design (3)</li>
<li>URBS 441 Advanced Urban Design (3)</li>
<li>URBS 452 Urban Land-Use Planning (3)</li>
<li>URBS 480 Urban Transportation Planning (3)</li>
<li>URBS 495A-Z Selected Topics in Urban Planning (3)</li>
</ul>
<div style={redBoldStyle}>C. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>6 units are satisfied by the following courses in the major: URBS 340A satisfies B5 Scientific Inquiry and Quantitative Reasoning; and URBS 310 satisfies 3 units of upper division D1 Social Sciences.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 49</li>
<li>General Education Units: 42</li>
<li>Additional Units: 29</li>
<li>Total Units Required for the B.A. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _FA0E