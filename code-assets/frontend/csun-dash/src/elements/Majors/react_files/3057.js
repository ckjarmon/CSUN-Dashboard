
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


    function _3057() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Biochemistry</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Lower Division Required Courses (32 units)</div>
<ul style={list_style}>
<li>BIOL 106 Biological Principles I (3)</li>
<li>BIOL 106L Biological Principles I Lab (1)</li>
<li>BIOL 107 Biological Principles II (3)</li>
<li>BIOL 107L Biological Principles II Lab (1)</li>
<li>CHEM 101 General Chemistry I (3)</li>
<li>CHEM 101D Problem Solving in General Chemistry I (1)</li>
<li>CHEM 101L General Chemistry I Lab (1)</li>
<li>CHEM 102 General Chemistry II (3)</li>
<li>CHEM 102D Problem Solving in General Chemistry II (1)</li>
<li>CHEM 102L General Chemistry II Lab (1)</li>
<li>MATH 255A Calculus for the Life Sciences I (3)</li>
<li>MATH 255B Calculus for the Life Sciences II (3)</li>
<li>PHYS 220A Mechanics (3)</li>
<li>PHYS 220AL Mechanics Lab (1)</li>
<li>PHYS 220B Electricity and Magnetism (3)</li>
<li>PHYS 220BL Electricity and Magnetism Lab (1)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Required Courses (43 units)</div>
<ul style={list_style}>
<li>BIOL 380 Cell Biology (3)</li>
<li>CHEM 321/L Chemical Analysis I and Lab (2/2)</li>
<li>CHEM 333/L Organic Chemistry I and Lab (3/1)</li>
<li>CHEM 333D Problem Solving in Organic Chemistry I (1)</li>
<li>CHEM 334/L Organic Chemistry II and Lab (3/1)</li>
<li>CHEM 334R Problem Solving in Organic Chemistry II (1)</li>
<li>CHEM 351 Physical Chemistry I (4)</li>
<li>CHEM 352 Physical Chemistry II (4)</li>
<li>CHEM 401 Inorganic Chemistry (3)</li>
<li>CHEM 422/L Chemical Analysis II and Lab (2/2)</li>
<li>CHEM 461/L Biochemistry I (3/1)</li>
<li>CHEM 462/L Biochemistry II (3/1)</li>
<li>CHEM 465 Topics in Biochemistry (3)</li>
</ul>
<div style={redBoldStyle}>3. Upper Division Electives (9 units)</div>
<ul style={list_style}>
<li>A minimum of 3 units of upper division electives selected from the following courses:</li>
<li>CHEM 411 Synthesis (3)</li>
<li>CHEM 433 Organic Analysis (3)</li>
<li>CHEM 471 Chemical Literature, Information Retrieval and Presentation (1)</li>
<li>CHEM 481 Nuclear and Radiochemistry (4)</li>
<li>CHEM 495A-C Directed Undergraduate Research (1-3)</li>
<li>CHEM 499A-C Independent Study (1-3)</li>
<li>CHEM 538 Natural Products (3)</li>
<li>A minimum of 6 units of electives selected with approval of major advisor from upper division courses in Biology.</li>
</ul>
<div style={redBoldStyle}>4. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>12 units are satisfied by the following courses in the major: CHEM 101 satisfies B1 Physical Science; BIOL 106 satisfies B2 Life Science; CHEM 101L satisfies B3 Science Laboratory Activity; MATH 255A satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; and CHEM 333 satisfies B5 Scientific Inquiry and Quantitative Reasoning.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 84</li>
<li>General Education Units: 36</li>
<li>Total Units Required for the B.S. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _3057