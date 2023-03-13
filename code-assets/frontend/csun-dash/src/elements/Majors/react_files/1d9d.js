
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


    function _1D9D() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Spanish: Translation and Interpretation</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Core Courses Common to All Options (24 units)</div>
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
<div style={redBoldStyle}>2. Interpretation and Translation Option Courses (18 units)</div>
<ul style={list_style}>
<li>Take all of the following courses (12 units):</li>
<li>SPAN 362 Introduction to Spanish Translation (3)</li>
<li>SPAN 372 Introduction to Spanish Interpretation (3)</li>
<li>SPAN 400 Structure of the Spanish Language (3)</li>
<li>SPAN 497 Comparative Structure of Spanish and English (3)</li>
<li>Choose one course from the following (3 units):</li>
<li>SPAN 462 Advanced Spanish Translation: Legal and Business (3)</li>
<li>SPAN 463 Advanced Spanish Translation: Medical and Scientific (3)</li>
<li>Choose one course from the following (3 units):</li>
<li>SPAN 472 Advanced Spanish Interpretation: Legal and Business (3)</li>
<li>SPAN 473 Advanced Spanish Interpretation: Medical and Scientific (3)</li>
</ul>
<div style={redBoldStyle}>3. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>6 units are satisfied by the following courses in the major: SPAN 220A and SPAN 220B satisfy F Comparative Cultural Studies.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major/Option: 42</li>
<li>General Education Units: 42</li>
<li>Additional Units: 36</li>
<li>Total Units Required for the B.A. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _1D9D