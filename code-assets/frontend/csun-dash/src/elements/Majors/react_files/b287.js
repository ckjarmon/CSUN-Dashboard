
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


    function _B287() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Spanish: Literature</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Core Courses Common to All Options (24 units)</div>
<ul style={list_style}>
<li>Take all of the following courses (18 units):</li>
<li>SPAN 220A Intermediate Spanish I (3)</li>
<li>SPAN 220B Intermediate Spanish II (3)</li>
<li>SPAN 304 Advanced Grammar and Composition (3)</li>
<li>SPAN 306 Advanced Composition (3)</li>
<li>SPAN 307 Introduction to the Analysis of Hispanic Literature (3)</li>
<li>SPAN 401 Language and Culture (3)</li>
<li>Choose one course from the following (3 units):</li>
<li>SPAN 315A Literature of Spain I (3)</li>
<li>SPAN 315B Literature of Spain II (3)</li>
<li>Choose one course from the following (3 units):</li>
<li>SPAN 363 Literature of Latin America I (3)</li>
<li>SPAN 364 Literature of Latin America II (3)</li>
</ul>
<div style={redBoldStyle}>2. Literature Option Courses (18 units)</div>
<ul style={list_style}>
<li>Choose one course from the following (3 units):</li>
<li>FLIT 295A Masterpieces of European Literature I (3)</li>
<li>FLIT 295B Masterpieces of European Literature II (3)</li>
<li>Choose one course from the following (3 units):</li>
<li>SPAN 380 Latin American Civilization (3)</li>
<li>SPAN 381 Spanish Civilization (3)</li>
<li>Choose four courses from the following (12 units):</li>
<li>Choose courses that ensure a balance between Peninsular and Latin American Spanish.</li>
<li>SPAN 408 Literature of the Middle Ages (3)</li>
<li>SPAN 409 Literature of the Renaissance (3)</li>
<li>SPAN 411 Literature of the Golden Age (3)</li>
<li>SPAN 414 Literature of the 18th and 19th Centuries: Spain (3)</li>
<li>SPAN 415 Literature of the 20th Century: Spain (3)</li>
<li>SPAN 421 Central American Literature (3)</li>
<li>SPAN 427 Literature of the 19th Century: Latin America (3)</li>
<li>SPAN 428 Literature of the 20th Century: Latin America (3)</li>
<li>SPAN 450 The Latin American Novel (3)</li>
<li>SPAN 495A-Z Selected Topics in Hispanic Literatures, Cultures, and Linguistics (3)</li>
<li>SPAN 496A-Z Experimental Topics in Hispanic Literatures, Cultures, and Linguistics (3)</li>
</ul>
<div style={redBoldStyle}>3. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>9 units are satisfied by the following courses in the major: FLIT 295A or FLIT 295B satisfies C2 Humanities; SPAN 220A and SPAN 220B satisfy F Comparative Cultural Studies.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major/Option: 42</li>
<li>General Education Units: 39</li>
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
export default _B287