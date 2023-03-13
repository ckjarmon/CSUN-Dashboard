
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


    function _C4B6() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Geographic Information Science</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Lower Division Courses (9-10 units)</div>
<ul style={list_style}>
<li>Foundation Courses</li>
<li>Select one course from the following:</li>
<ul style={option_style}>
<li>GEOG 101A/GEOG 101AL The Physical Environment and Lab (2/1)</li>
<li>or GEOG 103A/GEOG 103AL Weather and Lab (2/1)</li>
</ul>
<li>Select one course from the following:</li>
<li>GEOG 107 People, Places, and Landscapes (3)</li>
<li>GEOG 108 Earth from Above (3)</li>
<li>GEOG 111/GEOG 111L Understanding Climate Change and Lab (3/1)</li>
<li>GEOG 150 World Geography: People, Places, and Globalization (3)</li>
<li>GEOG 170 Water Resources of California (3)</li>
<li>GISci Core Course</li>
<li>Take the following:</li>
<li>GEOG 206/L Introduction to Geographical Information Science and Lab (2/1)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Courses (48 units)</div>
<ul style={list_style}>
</ul>
<div style={subRedBoldStyle}>a. Gateway Course (3 units)</div>
<ul style={sublist_style}>
<li>Take the following:</li>
<li>GEOG 300 The Geographer's Craft (3)</li>
</ul>
<div style={subRedBoldStyle}>b. Field Studies (3 units)</div>
<ul style={sublist_style}>
<li>Select one course from the following:</li>
<li>GEOG 404A-Z Field Studies in Geography (3)</li>
</ul>
<div style={subRedBoldStyle}>c. Geography Core Courses (6 units)</div>
<ul style={sublist_style}>
<li>Select two courses from the following:</li>
<li>GEOG 301 Cultural Geography (3)</li>
<li>GEOG 311 The Atmosphere (3)</li>
<li>GEOG 316 Environmental Geography (3)</li>
<li>GEOG 340 Economic Geography (3)</li>
<li>GEOG 351 Cities, Space, and Power (3)</li>
<li>GEOG 364/L Geography of World Ecosystems and Lab (2/1)</li>
<li>GEOG 365/GEOG 365L Geomorphology and Lab (3/1)</li>
<li>GEOG 366 Geography of Environmental Hazards (3)</li>
<li>GEOG 370 Water, Society, and the Environment (3)</li>
<li>GEOG 375 Environment, Economy, and Development (3)</li>
</ul>
<div style={subRedBoldStyle}>d. GISci Core Courses (6 units)</div>
<ul style={sublist_style}>
<li>Take the following:</li>
<li>GEOG 306/L Intermediate Geographical Information Science and Lab (2/1)</li>
<li>GEOG 406/L Advanced Geographical Information Science and Lab (2/1)</li>
</ul>
<div style={subRedBoldStyle}>e. Spatial Informatics and GeoVisualization (15 units)</div>
<ul style={sublist_style}>
<li>Select one course from the following:</li>
<ul style={option_style}>
<li>GEOG 305/L Maps and Graphics and Lab (2/1)</li>
<li>or GEOG 409/L Digital Cartography and Lab (2/1)</li>
</ul>
<li>Take the following:</li>
<li>GEOG 407/L Remote Sensing and Lab (2/1)</li>
<li>GEOG 408D/L Spatial Database Management and Lab (2/1)</li>
<li>GEOG 408E/L GIS Automation and Customization and Lab (1/2)</li>
<li>GEOG 460/L Spatial Analysis and Comparison and Lab (2/1)</li>
</ul>
<div style={subRedBoldStyle}>f. Geospatial Applications Courses (6 units)</div>
<ul style={sublist_style}>
<li>Select two courses from the following:</li>
<li>GEOG 408A/L Human/Cultural Applications in GIS and Lab (2/1)</li>
<li>GEOG 408B/L Environmental/Physical Applications in GIS and Lab (2/1)</li>
<li>GEOG 408C/L Geospatial Project Management and Lab (2/1)</li>
<li>GEOG 408F/L WebGIS and Lab (2/1)</li>
<li>GEOG 408G/L GIS and Decision Making and Lab (2/1)</li>
<li>GEOG 408H/L GIS in Water Resource Management and Lab (2/1)</li>
<li>GEOG 408I/L Geospatial Big Data Analytics and Lab (2/1)</li>
<li>GEOG 494 Internship (3)*</li>
<li>GEOG 497A-F Senior Seminar in Geography (3)*</li>
<li>GEOG 550F Forensic Geography (3)</li>
<li>*Must be GIS/Cartography/Remote Sensing topic.</li>
</ul>
<div style={subRedBoldStyle}>g. Capstone Course (3 units)</div>
<ul style={sublist_style}>
<li>Take the following:</li>
<li>GEOG 490 Senior Project (3)</li>
<li>*Must be GIS/Cartography/Remote Sensing topic.</li>
</ul>
<div style={subRedBoldStyle}>h. Elective Courses (6 units)</div>
<ul style={sublist_style}>
<li>Take two additional upper division (300-, 400- or 500- level) GEOG courses.</li>
</ul>
<div style={redBoldStyle}>3. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>6 units are satisfied by the following courses in the major: GEOG 101A or GEOG 103A satisfies B1 Physical Science; GEOG 101AL or GEOG 103AL satisfies B3 Science Laboratory Activity; and GEOG 206/L satisfies E Lifelong Learning and fulfills the Information Competence requirement.</li>
<li>If taken, GEOG 311, GEOG 316, GEOG 365 or GEOG 366 satisfies B5 Scientific Inquiry and Quantitative Reasoning; and GEOG 107, GEOG 150, GEOG 170, GEOG 301, GEOG 351 and/or GEOG 370 satisfies 3-6 units of D1 Social Sciences. Some upper division GEOG electives may satisfy General Education requirements. Refer to course descriptions for application in General Education.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major/Option: 57-58</li>
<li>General Education Units: 42</li>
<li>Additional Units: 20-21</li>
<li>Total Units Required for the B.S. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _C4B6