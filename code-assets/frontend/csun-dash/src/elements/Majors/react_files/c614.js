
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


    function _C614() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Geology: Geophysics</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>A. Tier 1 (4 units)</div>
<ul style={list_style}>
<li>Any 100-level GEOL course and any 100-level GEOL lab (3/1)</li>
</ul>
<div style={redBoldStyle}>B. Tier Math and Science (40 units)</div>
<ul style={list_style}>
<li>CHEM 101 General Chemistry I (3)</li>
<li>CHEM 101D Problem Solving in General Chemistry I (1)</li>
<li>CHEM 101L General Chemistry I Lab (1)</li>
<li>COMP 110/L Introduction to Algorithms and Programming and Lab (3/1)</li>
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
<div style={redBoldStyle}>C. Tier 2 (16 units)</div>
<ul style={list_style}>
<li>GEOL 303 Communicating Geoscience (2)</li>
<li>GEOL 306/L Earth Materials and Lab (3/1)</li>
<li>GEOL 309/L Earth Tectonics and Structure and Lab (3/1)</li>
<li>GEOL 313 Field Methods (2)</li>
<li>GEOL 314/L Earth Systems and Lab (3/1)</li>
</ul>
<div style={redBoldStyle}>D. Tier 3 (10 to 12 units)</div>
<ul style={list_style}>
<li>GEOL 464/L Applied Geophysics and Lab (3/1)</li>
<li>Two additional upper division GEOL courses related to Geophysics or upper division courses in MATH or PHYS with approval of academic advisor. GEOL 300 and 301 cannot be use for major credit. (6-8 units)</li>
<li>Students in the Honors Program must take GEOL 497 (1) and GEOL 498 (3) and one additional upper division GEOL course, including required lab if applicable, exclusive of GEOL 300 and 301.</li>
</ul>
<div style={redBoldStyle}>E. Tier 4 (3 units)</div>
<ul style={list_style}>
<li>GEOL 490 Senior Capstone (3)</li>
</ul>
<div style={redBoldStyle}>F. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>12 units are satisfied by the following courses in the major: CHEM 101 satisfies B1 Physical Science; CHEM 101L satisfies B3 Science Laboratory Activity; MATH 150A satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; GEOL 314 satisfies B5 Scientific Inquiry and Quantitative Reasoning; and COMP 110/L satisfies E Lifelong Learning.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major/Option: 73-75</li>
<li>General Education Units: 36</li>
<li>Additional Units: 9-11</li>
<li>Total Units Required for the B.S. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _C614