
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


    function _676E() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Health Administration</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>Note: A minimum grade of C- is required in all courses within the major.</li>
</ul>
<div style={redBoldStyle}>1. Lower Division Required Courses (19 units)</div>
<ul style={list_style}>
<li>ACCT 220 Introduction to Financial Accounting (3)</li>
<li>BIOL 101 General Biology (3)</li>
<li>BIOL 101L General Biology Lab (1)</li>
<ul style={option_style}>
<li>HSCI 132 History of Preventative Medicine and Public Health (3)</li>
<li>or HSCI 345 Public Health Issues (3)</li>
</ul>
<ul style={option_style}>
<li>MATH 103 Mathematical Methods for Business (3)</li>
<li>or MATH 105 Pre-Calculus II (5)</li>
</ul>
<li>or MATH 140 Introductory Statistics (4)</li>
<li>PSY 150 Introduction to Psychology (3)</li>
<li>SOC 150 Introductory Sociology (3)</li>
</ul>
<div style={redBoldStyle}>2. Upper Division Health Sciences Department Core (10 units)</div>
<ul style={list_style}>
<li>HSCI 314 Organization and Delivery of Health Services (3)</li>
<li>HSCI 390/L Biostatistics and Lab (3/1)</li>
<li>HSCI 488 Epidemiology (3)</li>
</ul>
<div style={redBoldStyle}>3. Upper Division Required Health Administration Courses (36 units)</div>
<ul style={list_style}>
<li>ENGL 306 Report Writing (3)</li>
<li>HSCI 312 Introduction to Health Administration (3)</li>
<li>HSCI 313 Health Administration (3)</li>
<li>HSCI 391 Computer Applications in Health Sciences (3)</li>
<li>HSCI 412 Medical Care Organization in the U.S. (3)</li>
<li>HSCI 413 Leadership and Direction in the Administration of Health Services (3)</li>
<li>HSCI 414 Health Law (3)</li>
<li>HSCI 415 Health Information Systems (3)</li>
<li>HSCI 416 Utilization of Professional and Allied Health Personnel (3)</li>
<li>HSCI 424 Health Planning (3)</li>
<li>HSCI 425 Financial Planning and Reimbursement in Healthcare (3)</li>
<li>HSCI 494HA Academic Internship for Health Administration (2)</li>
<li>HSCI 494IHA Academic Internship Evaluation in Health Administration (1)</li>
</ul>
<div style={redBoldStyle}>4. Health Administration Electives (6 units)</div>
<ul style={list_style}>
<li>Select a minimum of 6 units—with prior advisor approval.</li>
<li>EOH 353 Global Perspective of Environmental Health (3)</li>
<li>HSCI 419 Hospital Administration (3)</li>
<li>HSCI 422 Health Services for the Elderly and Mentally Ill (3)</li>
<li>HSCI 438 International Health (3)</li>
<li>HSCI 478 Seminar in Current Trends (3)</li>
<li>PSY 365 Introduction to Gerontology (3)</li>
</ul>
<div style={redBoldStyle}>5. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>15 units are satisfied by the following courses in the major: BIOL 101 satisfies B2 Life Science; BIOL 101L satisfies B3 Science Laboratory Activity; MATH 103 or MATH 105 or MATH 140 satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; PSY 150 and SOC 150 satisfy D1 Social Sciences; and ENGL 306 satisfies E Lifelong Learning.</li>
<li>If taken, EOH 353 satisfies B5 Scientific Inquiry and Quantitative Reasoning; HSCI 345 satisfies B5 Scientific Inquiry and Quantitative Reasoning or D1 Social Sciences; PSY 365 satisfies upper division D1 Social Sciences. PSY 365 also fulfills the Information Competence requirement.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 71</li>
<li>General Education Units: 33</li>
<li>Required Additional Units: 16</li>
<li>Total Units Required for the B.S. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _676E