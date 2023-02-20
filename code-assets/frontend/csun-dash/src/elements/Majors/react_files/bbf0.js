
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


    function _BBF0() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Chicano and Chicana Studies: Double Major</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Lower Division Required Courses (9 units)</div>
<ul style={list_style}>
<li>CHS 100 Chicana/o Culture (3)</li>
<li>CHS 201 Survey of Mexican Literature in Translation (3)</li>
<li>CHS 270SOC/F Fieldwork in Barrio Studies (2/1)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Required Courses (12 units)</div>
<ul style={list_style}>
<li>CHS 445 History of the Chicana/o (3)</li>
<li>CHS 453 Theory and the Chicana/o Experience (3)</li>
<li>CHS 473 The Chicana/o and Social Institutions (3)</li>
<li>CHS 497 Senior Seminar in Chicana/o Studies (3)</li>
</ul>
<div style={redBoldStyle}>3. Upper Division Electives (6 units)</div>
<ul style={list_style}>
<li>Select two courses from the following:</li>
<li>CHS 351 Survey of Mexican Philosophical Thought (3)</li>
<li>CHS 401 Pre-Cuauhtemoc Meso-American Civilization (3)</li>
<li>CHS 432 Counseling the Chicana/o Child (3)</li>
<li>CHS 470 Cultural Differences and the Chicana/o (3)</li>
</ul>
<div style={redBoldStyle}>4. Additional Upper Division Electives (6 units)</div>
<ul style={list_style}>
<li>Electives in upper division Chicana/o Studies are to be selected with the advice and approval of the advisor.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Double Major Option: 33</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _BBF0