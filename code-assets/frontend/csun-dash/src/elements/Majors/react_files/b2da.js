
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


    function _B2DA() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Cinema and Television Arts: Emerging Media Production</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>All lower and upper division courses taken toward completion of the CTVA major must be completed with a grade of C or better.</li>
</ul>
<div style={redBoldStyle}>1. Lower Division Common Core (12 units)</div>
<ul style={list_style}>
<li>CTVA 100 Introduction to Mass Communication Art (3)</li>
<li>CTVA 210 Television-Film Aesthetics (3)</li>
<li>CTVA 220 Foundations of Media Writing (3)</li>
<li>CTVA 260 Introduction to Digital Filmmaking (3)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Common Core (12 units)</div>
<ul style={list_style}>
<li>History</li>
<li>Select one of the following courses (3 units):</li>
<li>CTVA 305 History of Television (3)</li>
<li>CTVA 310 History of American Cinema (3)</li>
<li>Criticism</li>
<li>Students must take the following course (3 units):</li>
<li>CTVA 319 Criticism in Cinema and Television Arts (3)</li>
<li>Entertainment Management</li>
<li>Select one of the following courses (3 units):</li>
<li>CTVA 351 Anatomy of Film Producing (3)</li>
<li>CTVA 480 Electronic Media Management (3)</li>
<li>CTVA 482 Network Program Development (3)</li>
<li>CTVA 487 Social Controls and Regulation of Electronic Media (3)</li>
<li>Professional Preparation</li>
<li>Select one of the following courses (3 units):</li>
<li>CTVA 329A/B or CTVA 329C Program Production (3)</li>
<li>CTVA 494A/B Internship (1/2)</li>
</ul>
<div style={redBoldStyle}>3. Emerging Media Production Option (21 units)</div>
<ul style={list_style}>
<li>Emerging Media Production Lower Division Core Requirement (3 units)</li>
<li>ART 200 Art, Media and Visualization (3)</li>
<li>Emerging Media Production Upper Division Core Requirements (18 units)</li>
<li>ART 364 3-D Computer Animation (3)</li>
<li>CTVA 315 New Directions in Electronic Media Systems (3)</li>
<li>CTVA 363 Fundamentals of Immersive Production (3)</li>
<li>CTVA 364 Interactive Production (3)</li>
<li>CTVA 462 Intermediate Immersive Production (3)</li>
<li>CTVA 463CS Emerging Media Capstone (3)</li>
</ul>
<div style={redBoldStyle}>4. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>6 units are satisfied by the following courses in the major: CTVA 210 satisfies C1 Arts; CTVA 100 satisfies E Lifelong Learning and fulfills the Information Competence requirement.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major/Option: 45</li>
<li>General Education Units: 42</li>
<li>Additional Units: 33</li>
<li>Total Units Required for the B.A. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _B2DA