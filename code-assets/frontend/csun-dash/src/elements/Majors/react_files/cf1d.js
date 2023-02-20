
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


    function _CF1D() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Family and Consumer Sciences: Family and Consumer Sciences Education</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>A. Core Courses Required of All Options (14 units)</div>
<ul style={list_style}>
<li>FCS 170 Creative Expression in Family and Consumer Sciences (2)</li>
<li>FCS 232 Individual and Family Development (3)</li>
<li>FCS 320 Family Resource Management (3)</li>
<li>FCS 380 Family and Consumer Sciences Foundations and Research (3)</li>
<li>FCS 494 Academic Internship (2)</li>
<li>FCS 494I Academic Internship Evaluation (1)</li>
</ul>
<div style={redBoldStyle}>B. Family and Consumer Sciences Education Option</div>
<ul style={list_style}>
<li>BIOL 101 General Biology (3)</li>
<li>BIOL 101L General Biology Lab (1)</li>
<li>CHEM 110 Chemistry in Action (3)</li>
<li>CHEM 110L Chemistry in Action Lab (1)</li>
<li>FCS 150/L Apparel Construction I and Lab (2/1)</li>
<li>FCS 160 Introductory Textiles (3)</li>
<li>FCS 201/L Introductory Food Science and Lab (2/1)</li>
<li>FCS 207 Nutrition for Life (3)</li>
<ul style={option_style}>
<li>FCS 303 Cultural Aspects of Food and Nutrition (3)</li>
<li>or FCS 309 Maternal, Infant and Child Nutrition (3)</li>
</ul>
<li>FCS 315 Issues in Housing (3)</li>
<li>FCS 321/L Contemporary Issues in Food and Nutrition and Lab (2/1)</li>
<li>FCS 322/L Equipment I and Lab (2/1)</li>
<li>FCS 324 Consumer Rights, Issues and Problems (3)</li>
<li>FCS 330 Child Growth and Development I (3)</li>
<li>FCS 340 Marriage and Family Relations (3)</li>
<li>FCS 357 Apparel and Human Behavior (3)</li>
<li>FCS 436 Parental Development (3)</li>
<li>General Education (48 units)</li>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>15 units are satisfied by the following courses in the major: CHEM 110 satisfies B1 Physical Science; BIOL 101 satisfies B2 Life Science; BIOL 101L satisfies B3 Science Laboratory Activity; FCS 315 satisfies B5 Scientific Inquiry and Quantitative Reasoning; FCS 340 and FCS 357 satisfy D1 Social Sciences; and FCS 207 satisfies E Lifelong Learning and fulfills the Information Competence requirement.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major/Option: 61</li>
<li>General Education Units: 33</li>
<li>Additional Units: 26</li>
<li>Total Units for the B.S. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _CF1D