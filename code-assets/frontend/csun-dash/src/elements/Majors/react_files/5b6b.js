
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


    function _5B6B() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Psychology: Honors</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>A. Eligibility</div>
<ul style={list_style}>
<li>To be eligible to apply for the Honors in Psychology program, a student must:</li>
<li>Be a declared Psychology major.</li>
<li>Have completed or be currently enrolled in PSY 320/L.</li>
<li>Have a minimum 3.5 cumulative GPA at CSUN.</li>
<li>Have a minimum 3.5 GPA across all upper division Psychology courses taken at CSUN (first-semester transfer students should report grades from their prior university/college).</li>
</ul>
<div style={redBoldStyle}>B. Program Requirements</div>
<ul style={list_style}>
<li>If admitted, students in the Honors in Psychology program must:</li>
<li>Complete honors sections of the following courses with a B+ or better:</li>
<li>PSY 321H/L Research Methods in Psychology and Lab (3/1)</li>
<li>One of the Psychology capstone courses (see list of capstone courses under Requirements for the Bachelor of Arts Degree) (3/2)</li>
<li>Successfully complete PSY 492H Honors Professional Development (1).</li>
<li>Successfully complete PSY 487H Honors Psychology Proseminar (1).</li>
<li>Present a project at the Department of Psychology's Honors Forum. The project must be conducted under the supervision of a faculty member in Psychology and may be an empirical research project, a literature review project or a community project.</li>
<li>Maintain a minimum 3.5 GPA across all of their upper division Psychology coursework.</li>
<li>If an honors student fails to meet or maintain any of the requirements of the program, the student will be immediately dropped from the program.</li>
</ul>
<ul style={information_style}><li>Upon successful completion of the program, students will receive an honors designation on their diploma and transcript.</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _5B6B