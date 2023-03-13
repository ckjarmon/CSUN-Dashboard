
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


    function _A06B() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Africana Studies: African and African-American Social Sciences</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>The Africana Studies major consists of two components: the completion of the core requirements (21 units) and the completion of one of three specific options (24 units). For each of the options, there are specific lower and upper division core courses and electives that are relevant to that concentration. All students who major in Africana Studies must select one of the three options, each of which is designed to prepare students for graduate study or for a career of their choice.</li>
</ul>
<div style={redBoldStyle}>1. Core Requirements for All Options (21 units)</div>
<ul style={list_style}>
<li>AFRS 100 Introduction to Black Studies and Culture (3)</li>
<li>AFRS 168 Introduction to the African Diaspora (3)</li>
<li>AFRS 201 Economics of the African-American Community I (3)</li>
<ul style={option_style}>
<li>AFRS 220 Psychological Environment of the African-American (3)</li>
<li>or AFRS 221 Social Environment of the African-American (3)</li>
</ul>
<ul style={option_style}>
<li>AFRS 245 African-American Literature Since 1930 (3)</li>
<li>or AFRS 252 Popular Culture and the Black World (3)</li>
</ul>
<li>AFRS 271 African-American History to 1865 (3)</li>
<li>AFRS 272 African-American History Since 1865 (3)</li>
</ul>
<div style={redBoldStyle}>2. Required Courses for African and African-American Social Sciences (21 units)</div>
<ul style={list_style}>
<li>AFRS 301 Economics of the African-American Community II (3)</li>
<ul style={option_style}>
<li>AFRS 320 African-American Personality Development (3)</li>
<li>or AFRS 322 African-American Family (3)</li>
</ul>
<li>AFRS 350 Advanced Writing (3)</li>
<li>AFRS 361 African-American Politics (3)</li>
<ul style={option_style}>
<li>AFRS 392A-Z Fieldwork in the African-American Community (3)</li>
<li>or AFRS 486SOC Social Science Career Internship (3)</li>
</ul>
<li>AFRS 398 Research Methods and Paradigms in Pan African Studies (3)</li>
<li>AFRS 498 Proseminar in Pan African Studies (3)</li>
</ul>
<div style={redBoldStyle}>3. Elective (3 units)</div>
<ul style={list_style}>
<li>Select one course from the following:</li>
<li>AFRS 161 American Political Institutions: A Black Perspective (3)</li>
<li>AFRS 165 Introduction to Pan Africanism (3)</li>
<li>AFRS 311 Black Psychology (3)</li>
<li>AFRS 367 African-American Social Movements (3)</li>
<li>AFRS 466A The United Nations, the Organization of African Unity, and Africa (3)</li>
<li>AFRS 466B Model Organization of African Unity Practicum (3)</li>
<li>AFRS 488 Sustainability and Environmental Justice in African and African Diaspora Communities (3)</li>
<li>AFRS 490 Statistical Research and Methods in Pan African Studies (3)</li>
</ul>
<div style={redBoldStyle}>4. Languages (Optional)</div>
<ul style={list_style}>
<li>All students majoring in Africana Studies are encouraged to take foreign languages (French, Portuguese, Spanish or Swahili recommended).</li>
</ul>
<div style={redBoldStyle}>5. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>15 units are satisfied by the following courses in the major: AFRS 271 satisfies C3 American History, Institutions and Ideals; AFRS 201 and AFRS 361 satisfy D1 Social Sciences; AFRS 100 and AFRS 320 or AFRS 322 satisfy F Comparative Cultural Studies.</li>
<li>If taken, AFRS 245 satisfies C2 Humanities; and AFRS 161 satisfies D3/D4 Constitution of the United States/State and Local Government.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major/Option: 45</li>
<li>General Education Units: 33</li>
<li>Additional Units: 42</li>
<li>Total Units Required for the B.A. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _A06B