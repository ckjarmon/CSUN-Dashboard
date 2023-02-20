
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


    function _2B9C() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Philosophy: Double Major</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Required Courses (21-22 units)</div>
<ul style={list_style}>
<li>PHIL 201 Ancient Philosophy (3)</li>
<li>PHIL 202 Modern Philosophy (3)</li>
<li>Choose one of the following courses:</li>
<li>PHIL 100 General Logic (4)</li>
<li>PHIL 200 Critical Reasoning (3)</li>
<li>PHIL 210 Reasoning in the Sciences (3)</li>
<li>PHIL 225 Evolutionary Reasoning (3)</li>
<li>PHIL 230 Introduction to Formal Logic (3)</li>
<li>Choose one of the following courses:</li>
<li>PHIL 360 Ethical Theory (3)</li>
<li>PHIL 365 Social and Political Philosophy (3)</li>
<li>Choose one of the following courses:</li>
<li>PHIL 350 Epistemology (3)</li>
<li>PHIL 352 Metaphysics (3)</li>
<li>PHIL 355 Philosophy of Mind (3)</li>
<li>Choose one of the following courses:</li>
<li>PHIL 333 American Indian Philosophy (3)</li>
<li>PHIL 343 Indian Philosophy (3)</li>
<li>PHIL 344 Chinese Philosophy (3)</li>
<li>PHIL 348 Philosophy and Feminism (3)</li>
<li>PHIL 353 Existentialism (3)</li>
<li>PHIL 354 Kierkegaard and Nietzsche (3)</li>
<li>The following course:</li>
<li>PHIL 497 Senior Research Seminar (3)</li>
</ul>
<div style={redBoldStyle}>2. Electives (9 units)</div>
<ul style={list_style}>
<li>Choose three philosophy courses (9 units), subject to the following conditions:</li>
<li>At least one course (3 units) must be at the 400-level (other than PHIL 497 and PHIL 499).</li>
<li>At least one course (3 units) must be at the 300-level or higher (excluding courses otherwise counted toward the major requirements).</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Double Major Option: 30-31</li>
<li>General Education Units: 45</li>
<li>Additional Units: 44-45</li>
<li>Total Units Required for the B.A. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _2B9C