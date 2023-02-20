
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


    function _4698() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Jewish Studies</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>A course may be used only once within the major.</li>
</ul>
<div style={redBoldStyle}>1. Required Courses (34 units)</div>
<ul style={list_style}>
</ul>
<div style={subRedBoldStyle}>a. Introductory Course (3 units)</div>
<ul style={sublist_style}>
<li>JS 100 Jewish Religion and Culture (3)</li>
</ul>
<div style={subRedBoldStyle}>b. Language (4 units)</div>
<ul style={sublist_style}>
<li>HEBR 102 Elementary Hebrew II (4)</li>
</ul>
<div style={subRedBoldStyle}>c. Culture and Society (9 units)</div>
<ul style={sublist_style}>
<li>ENGL 371 Issues in Jewish-American Writing (3)</li>
<li>JS 306/SOC 306 Sociology of Jewish Families and Communities (3)</li>
<li>JS 330 Women in the Jewish Experience (3)</li>
<li>JS 335/SOC 335 Jewish Identity in the U.S. (3)</li>
<li>RS 378 American Jewish Experience (3)</li>
</ul>
<div style={subRedBoldStyle}>d. History (9 units)</div>
<ul style={sublist_style}>
<li>HIST 210/JS 210 History of the Jewish People (3)</li>
<li>HIST 356 Anti-Semitism in Europe (3)</li>
<li>HIST 357 History of the Holocaust (3)</li>
<li>HIST 406 The Jews in the Ancient World (3)</li>
<li>HIST 409/JS 409 History of the Jews in the Modern Era (3)</li>
<li>HIST 427/JS 427 Israel's History and Peoples (3)</li>
<li>HIST/JS 486J History of the Jews in the United States (3)</li>
</ul>
<div style={subRedBoldStyle}>e. Religion and Thought (9 units)</div>
<ul style={sublist_style}>
<li>JS 300 Ancient and Medieval Jewish Arts and Literature (3)</li>
<li>JS 318 Applied Jewish Ethics (3)</li>
<li>RS 320 Hebrew Bible (Old Testament) (3)</li>
<li>RS 375 Classical Judaic Texts (3)</li>
<li>RS 377 The Holocaust: Religious Responses (3)</li>
<li>RS 379 Zionism: Religious and Secular (3)</li>
<li>RS 476 Modern Jewish Thought (3)</li>
</ul>
<div style={redBoldStyle}>2. Electives (9 units)</div>
<ul style={list_style}>
<li>Choose from the upper division courses listed above as well as the following:</li>
<li>HEBR 101 Elementary Hebrew I (4)</li>
<ul style={option_style}>
<li>JS 151 Natural Environment in Judaism (1)</li>
<li>and RTM 151F Survival (2)</li>
</ul>
<li>JS 390CS Nonprofit Internship in the Jewish Community (3)</li>
<li>JS 499C Independent Study (3)</li>
</ul>
<div style={redBoldStyle}>3. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>6 units are satisfied by the following courses in the major: JS 100 satisfies C2 Humanities; and HEBR 102 satisfies 3 units of F Comparative Cultural Studies.</li>
<li>If taken, JS 300 satisfies C1 Arts or C2 Humanities; JS 318 satisfies D1 Social Sciences; JS 390CS satisfies E Lifelong Learning; ENGL 371, HEBR 101, HIST 210/JS 210, JS 306/SOC 306, JS 330, JS 335/SOC 335 or RS 378 satisfies F Comparative Cultural Studies. ENGL 371, JS 300 or RS 378 also fulfills the Information Competence requirement.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 43</li>
<li>General Education Units: 42</li>
<li>Additional Units: 35</li>
<li>Total Units Required for the B.A. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _4698