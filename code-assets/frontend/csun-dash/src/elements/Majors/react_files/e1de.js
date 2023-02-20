
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


    function _E1DE() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Religious Studies: Double Major</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Lower Division Required Courses (3 units)</div>
<ul style={list_style}>
<li>Select one course from the following:</li>
<li>RS 100 Introduction to Religious Studies (3)</li>
<li>RS 101 The Bible (3)</li>
<li>RS 150 World Religions (3)</li>
<li>RS 160 Religion in Western Civilization (3)</li>
<li>RS 240 Approaches to the History of Religions (3)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division (33 units)</div>
<ul style={list_style}>
</ul>
<div style={subRedBoldStyle}>a. Required Junior-level Course (3 units)</div>
<ul style={sublist_style}>
<li>RS 395 Theory and Method in Religious Studies (3)</li>
</ul>
<div style={subRedBoldStyle}>b. Religion in the United States (6 units)</div>
<ul style={sublist_style}>
<li>Select two courses from the following:</li>
<li>RS 305 New Religious Movements in America (3)</li>
<li>RS 306 American Religious Diversity (3)</li>
<li>RS 307 Religion in America (3)</li>
<li>RS 308 Native American Religions (3)</li>
<li>RS 378 American Jewish Experience (3)</li>
</ul>
<div style={subRedBoldStyle}>c. Religious Traditions (9 units)</div>
<ul style={sublist_style}>
<li>Select three courses from the following:</li>
<li>JS 300 Ancient and Medieval Jewish Arts and Literature (3)</li>
<li>RS 345 Christianity (3)</li>
<li>RS 365 Islam (3)</li>
<li>RS 380 Asian Religions: Communal Traditions and Transitions (3)</li>
<li>RS 385 Hinduism (3)</li>
<li>RS 390 Buddhism (3)</li>
<li>RS 426 Religions of China: Taoism (3)</li>
</ul>
<div style={subRedBoldStyle}>d. Sacred Texts of the World (3 units)</div>
<ul style={sublist_style}>
<li>Select one course from the following:</li>
<li>RS 320 Hebrew Bible (Old Testament) (3)</li>
<li>RS 325 New Testament (3)</li>
<li>RS 327 Teachings of Jesus (3)</li>
<li>RS 375 Classical Judaic Texts (3)</li>
<li>RS 383 Asian Religious Texts (3)</li>
<li>RS 384 Approaching the Qu'ran (3)</li>
</ul>
<div style={subRedBoldStyle}>e. Upper Division Electives (9 units)</div>
<ul style={sublist_style}>
<li>Choose from any upper division Religious Studies courses through consultation with an advisor. Two years of the study of a foreign language at the university level (or its equivalent) may be used for one 3-unit elective in the major. Students may apply an Experimental Topics in Religion course (RS 396A-Z) to the appropriate category listed above. Consult with the department chair for approval.</li>
</ul>
<div style={subRedBoldStyle}>f. Proseminar (3 units)</div>
<ul style={sublist_style}>
<li>RS 497B Proseminar in Religious Studies (3)</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Double Major Option: 36</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _E1DE