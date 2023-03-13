
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


    function _1209() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Central American Studies: Double Major</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Lower Division Required Courses (9 units)</div>
<ul style={list_style}>
<li>Select one of the following:</li>
<li>CAS 100 Introduction to Central American Studies (3)</li>
<li>CAS 102 The Salvadoran Experience (3)</li>
<li>Select one of the following:</li>
<li>CAS 201 Survey of Central American Literature (3)</li>
<li>CAS 202 Survey of Central American Visual, Installation and Performance Arts (3)</li>
<li>Required Course:</li>
<li>CAS 270/F Fieldwork in Central American Communities (1/2)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Requirements (21 units)</div>
<ul style={list_style}>
<li>Select seven of the following courses:</li>
<li>CAS 303 Central American Film (3)</li>
<li>CAS 309 Ancient to Pre-Modern History of the Central American People (3)</li>
<li>CAS 310 Modern History of Central American People (3)</li>
<li>CAS 311 The Central American Diaspora (3)</li>
<li>CAS 350 Urbanization in Central America (3)</li>
<li>CAS 355 Environment, Development and Social Exclusion in Central America (3)</li>
<li>CAS 356 Afro-Caribbean Central American Cultures and Identities (3)</li>
<li>CAS 364 Culture and Violence in Central America (3)</li>
<li>CAS 365 Changing Roles of Central American Women (3)</li>
<li>CAS 366 Contemporary Indigenous Peoples of Central America (3)</li>
<li>CAS 367 Contemporary Religious Movements in Central America (3)</li>
<li>CAS 368 Central American Revolutionary Movements (3)</li>
<li>CAS 369 Contemporary Social Movements in Central America (3)</li>
<li>CAS 410 The Central American Child (3)</li>
</ul>
<div style={redBoldStyle}>3. Central American Studies Seminar (3 units)</div>
<ul style={list_style}>
<li>Select one of the following:</li>
<li>CAS 421 Central American Literature Seminar (3)</li>
<li>CAS 440 Research Seminar on Central American Culture (3)</li>
<li>CAS 460 Research Seminar on Central American Political Issues (3)</li>
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
export default _1209