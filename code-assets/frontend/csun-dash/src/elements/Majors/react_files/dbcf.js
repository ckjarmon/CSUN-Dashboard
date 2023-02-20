
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


    function _DBCF() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Chemistry</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Lower Division Required Courses (24 units)</div>
<ul style={list_style}>
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
<div style={redBoldStyle}>2. Upper Division Required Courses (27 units)</div>
<ul style={list_style}>
<li>CHEM 321/L Chemical Analysis I and Lab (2/2)</li>
<li>CHEM 333/L Organic Chemistry I and Lab (3/1)</li>
<li>CHEM 333D Problem Solving in Organic Chemistry I (1)</li>
<li>CHEM 334/L Organic Chemistry II and Lab (3/1)</li>
<li>CHEM 334R Problem Solving in Organic Chemistry II (1)</li>
<li>CHEM 351 Physical Chemistry I (4)</li>
<li>CHEM 351L Physical Chemistry I Lab (1)</li>
<li>CHEM 401 Inorganic Chemistry (3)</li>
<li>CHEM 422/L Chemical Analysis II and Lab (2/2)</li>
<ul style={option_style}>
<li>CHEM 495A Directed Undergraduate Research (1)</li>
<li>or CHEM 499A Independent Study (1) with presentation of a seminar</li>
</ul>
</ul>
<div style={redBoldStyle}>3. Upper Division Electives (7 units)</div>
<ul style={list_style}>
<li>Chemistry electives selected with approval of major advisor from 400- or 500-level courses in Chemistry. At least 3 units must be from electives other than CHEM 495 and 499.</li>
</ul>
<div style={redBoldStyle}>4. General Education (48 units)</div>
<ul style={list_style}>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _DBCF