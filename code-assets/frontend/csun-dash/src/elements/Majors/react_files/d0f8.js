
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


    function _D0F8() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Sociology</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Lower Division Required Courses (7 units)</div>
<ul style={list_style}>
<li>MATH 140 Introductory Statistics (4)</li>
<li>SOC 150 Introductory Sociology (3)</li>
</ul>
<div style={redBoldStyle}>2. Core Courses (16 units)</div>
<ul style={list_style}>
<li>Take all of the following courses:</li>
<li>SOC 424/L Statistical Techniques in Social Research and Lab (3/1)</li>
<li>SOC 430 Theory I – Classical Sociological Theory (4)</li>
<li>SOC 468 Theory II – Contemporary Sociological Theory (4)</li>
<li>SOC 497/L Qualitative and Quantitative Research Methods and Lab (3/1)</li>
</ul>
<div style={redBoldStyle}>3. Electives (21 units)</div>
<ul style={list_style}>
<li>Select 21 units of electives from 200 to 400-level sociology courses. No more than 3 elective units can be taken at the 200-level. Students may concentrate in one of the areas below, but they are not required to do so for the B.A. in Sociology. Those students who wish to complete a concentration should take 9 of the 21 units in one of the concentrations below. Students who do not want to complete a concentration should take 21 units of electives from 200 to 400-level sociology courses.</li>
<li>Concentration (9 units)</li>
<li>Students may complete a 9-unit concentration from the list of three possible concentration areas below.</li>
</ul>
<div style={subRedBoldStyle}>a. Social Welfare and Social Justice (9 units)</div>
<ul style={sublist_style}>
<li>SOC 357 Anti-Oppressive Social Work Practice (3)</li>
<li>SOC 490S/F Supervised Field Seminar and Fieldwork (1/2)</li>
<li>Plus one course from the following:</li>
<li>SOC 356 Social Welfare Institutions (3)</li>
<li>SOC 420CSL Mentoring to Overcome Struggles and Inspire Courage (MOSAIC) (3)</li>
<li>SOC 426 Social Legislation and Social Policy (3)</li>
<li>SOC 484 Progressive Community Organizing (3)</li>
<li>SOC 490S/F Supervised Field Seminar and Fieldwork (1/2)</li>
<li>SOC 492 Human Behavior in the Social Environment (3)</li>
<li>SOC 493 Diversity and Social Justice (3)</li>
</ul>
<div style={subRedBoldStyle}>b. Inequality and Diversity (9 units)</div>
<ul style={sublist_style}>
<li>SOC 401 Class, Status and Power (3)</li>
<li>Plus two courses from the following:</li>
<li>SOC 307 Ethnic Diversity in America (3)</li>
<li>SOC 324 Sociology of Sex and Gender (3)</li>
<li>SOC 335 Jewish Identity in the U.S. (3)</li>
<li>SOC 452 Sociology of Lesbian, Gay, Bisexual and Transgender Communities (3)</li>
<li>SOC 461 Sociology of Immigration (3)</li>
</ul>
<div style={subRedBoldStyle}>c. Social Movements and Political Sociology (9 units)</div>
<ul style={sublist_style}>
<ul style={option_style}>
<li>SOC 370 Political Sociology (3)</li>
<li>or SOC 476 Social Movements (3)</li>
</ul>
<li>Plus two courses from the following:</li>
<li>SOC 370 Political Sociology (3)</li>
<ul style={option_style}>
<li>SOC 433 Sociology of Globalization (3)</li>
<li>or POLS 480 The Politics of Globalization (3)</li>
</ul>
<li>SOC 476 Social Movements (3)</li>
<li>SOC 484 Progressive Community Organizing (3)</li>
</ul>
<div style={redBoldStyle}>4. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>9 units are satisfied by the following courses in the major: MATH 140 satisfies B4 Mathematics/Quantitative Reasoning; SOC 424 satisfies B5 Scientific Inquiry and Quantitative Reasoning; and SOC 150 satisfies 3 units of D1 Social Sciences.</li>
<li>If taken, SOC 200, SOC 305 or SOC 324 satisfies 3 units of D1 Social Sciences; and SOC 306, SOC 307 and/or SOC 335 satisfies 3-6 units of upper division F Comparative Cultural Studies.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in Major: 44</li>
<li>General Education Units: 39</li>
<li>Additional Units: 37</li>
<li>Total Units Required for the B.A. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _D0F8