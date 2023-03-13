
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


    function _F10E() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Kinesiology: Sport Studies</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>A. Lower Division Prerequisite Courses (20-26 units)</div>
<ul style={list_style}>
</ul>
<div style={redBoldStyle}>1. Lower Division Science and Math Requirements (14-20 units)</div>
<ul style={list_style}>
<li>General Biology and Human Anatomy Requirement</li>
<li>BIOL 101 General Biology (3)</li>
<li>BIOL 101L General Biology Lab (1)</li>
<ul style={option_style}>
<li>BIOL 211 Human Anatomy (2)</li>
<li>or BIOL 213 Human Anatomy for Health Sciences (3)</li>
</ul>
<li>BIOL 212 Laboratory Studies in Human Anatomy (1)</li>
<li>BIOL 281 Human Physiology (3)</li>
<ul style={option_style}>
<li>MATH 140 Introductory Statistics (4)</li>
<li>or MATH 141/L Essentials of Statistics and Lab (3/1)</li>
</ul>
<li>Alternatively, students may take the following courses to fulfill the General Biology and Human Anatomy requirement for the major. This pathway is recommended for students interested in pursuing graduate study in allied health-related programs, such as physical therapy or medicine.</li>
<li>BIOL 106 Biological Principles I (3)</li>
<li>BIOL 106L Biological Principles I Lab (1)</li>
<li>BIOL 107 Biological Principles II (3)</li>
<li>BIOL 107L Biological Principles II Lab (1)</li>
<li>BIOL 382/L Human Anatomy and Physiology I and Lab (3/1)</li>
<li>BIOL 383/L Human Anatomy and Physiology II and Lab (3/1)</li>
<li>Note: Completion of BIOL 211/212 or BIOL 213/212 or BIOL 383/L is prerequisite to enrollment in KIN 300 and KIN 337/L. Completion of BIOL 281 or BIOL 383/L is prerequisite to enrollment in KIN 346/L. BIOL 382/L requires grades of C or better in BIOL 106/L and BIOL 107/L prerequisites.</li>
</ul>
<div style={redBoldStyle}>2. Lower Division Core (6 units)</div>
<ul style={list_style}>
<li>KIN 200 Foundations of Kinesiology (3)</li>
<li>Kinesiology Movement Courses (3 units)</li>
<li>Choose one course from each of the following categories:</li>
</ul>
<div style={subRedBoldStyle}>a. Dance</div>
<ul style={sublist_style}>
<li>KIN 137A Dance, Ballroom I (1)</li>
<li>KIN 139A Ballet I (1)</li>
<li>KIN 139B Ballet II (1)</li>
<li>KIN 141A Jazz Dance I (1)</li>
<li>KIN 141B Jazz Dance II (1)</li>
<li>KIN 142A Dance, Latin America I (1)</li>
<li>KIN 142B Dance, Latin Dance II (1)</li>
<li>KIN 143A Hip Hop Dance Culture I (1)</li>
<li>KIN 143B Hip Hop Dance Culture II (1)</li>
<li>KIN 144A Dance, Modern I (1)</li>
</ul>
<div style={subRedBoldStyle}>b. Fitness</div>
<ul style={sublist_style}>
<li>KIN 125A Fitness for Life (1)</li>
<li>KIN 126A Strength Training (1)</li>
<li>KIN 128 Fitness Walking (1)</li>
<li>KIN 129A Running Conditioning I (1)</li>
<li>KIN 135A Aerobic Dance I (1)</li>
<li>KIN 136A Aqua Aerobics (1)</li>
<li>KIN 147 Pilates (1)</li>
<li>KIN 148 Dance Conditioning and Somatic Practices (1)</li>
<li>KIN 149 Yoga (1)</li>
<li>KIN 177A Swimming for Non-swimmers (1)</li>
<li>KIN 178A Swimming I (1)</li>
<li>KIN 179A Swimming Conditioning (1)</li>
</ul>
<div style={subRedBoldStyle}>c. Sport</div>
<ul style={sublist_style}>
<li>KIN 122A Badminton I (1)</li>
<li>KIN 123A Archery (1)</li>
<li>KIN 124A Basketball I (1)</li>
<li>KIN 130A Karate I (1)</li>
<li>KIN 131A Taekwondo (1)</li>
<li>KIN 132A Aikido (1)</li>
<li>KIN 133A Tai Chi Ch'uan (1)</li>
<li>KIN 134 Shaolin Kung Fu (1)</li>
<li>KIN 152A Soccer I (1)</li>
<li>KIN 155A Golf I (1)</li>
<li>KIN 164A Handball I (1)</li>
<li>KIN 171A Softball I (1)</li>
<li>KIN 172 Ultimate Frisbee (1)</li>
<li>KIN 185A Tennis I (1)</li>
<li>KIN 185B Tennis II (1)</li>
<li>KIN 191A Track and Field I (1)</li>
<li>KIN 195A Volleyball I (1)</li>
</ul>
<div style={redBoldStyle}>B. Upper Division Core (21 units)</div>
<ul style={list_style}>
<li>KIN 300 Foundations and Analysis of Human Movement (3)</li>
<li>KIN 305 Historical and Philosophical Bases of Kinesiology (4)</li>
<li>KIN 306 Socio-Psychological Aspects of Physical Activity (3)</li>
<li>KIN 345/L Biomechanics and Lab (3/1)</li>
<li>KIN 346/L Physiology of Exercise and Lab (3/1)</li>
<li>KIN 377 Motor Learning (3)</li>
</ul>
<div style={redBoldStyle}>C. Sports Studies Option Requirements (27 units)</div>
<ul style={list_style}>
</ul>
<div style={redBoldStyle}>1. Upper Division Required Courses (12 units)</div>
<ul style={list_style}>
<li>KIN 405 Ethics and Kinesiology (3)</li>
<li>KIN 407 Sport, Culture and Society (3)</li>
<li>KIN 409 Advanced Sport Psychology (3)</li>
<li>KIN 481 Social History of Sport (3)</li>
</ul>
<div style={redBoldStyle}>2. Sport Studies Electives (15 units)</div>
<ul style={list_style}>
<li>Select 15 units, with approval of an advisor:</li>
<li>KIN 303 Foundations of Sport Management (3)</li>
<li>KIN 307 Facilities and Event Administration in the Sport Industry (3)</li>
<li>KIN 308 Marketing and Public Relations in the Sport Industry (3)</li>
<li>KIN 310 Visualization and Sport (3)</li>
<li>KIN 347 Introduction to Adapted Physical Education (3)</li>
<li>KIN 385 Women in Sport (3)</li>
<li>KIN 406 Sport, Development, and Social Change (3)</li>
<li>KIN 408 The Olympic Games (3)</li>
<li>KIN 410 Psychosocial Aspects of Athletic Injury (3)</li>
<li>KIN 420 Coaching Competitive Sports (3)</li>
<li>KIN 426 Choreography (3)</li>
<li>KIN 427 Dance Production (3)</li>
<li>KIN 428 Aesthetics of Human Movement (3)</li>
<li>KIN 484 Research Seminar in Sport Studies (3)</li>
<li>KIN 494A-B Academic Internship in Kinesiology (1-2)</li>
<li>KIN 494I Academic Internship Evaluation (1-1)</li>
</ul>
<div style={redBoldStyle}>D. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>12 units are satisfied by the following courses in the major: BIOL 101 or BIOL 106 satisfies B2 Life Science; BIOL 101L or BIOL 106L satisfies B3 Science Laboratory Activity; MATH 140 satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; KIN 345/L satisfies B5 Scientific Inquiry and Quantitative Reasoning; and KIN 306 satisfies 3 units of upper division D1 Social Sciences.</li>
<li>If taken, KIN 139A or KIN 144A satisfies 1 unit of C1 Arts. Some Kinesiology Movement courses may satisfy 1-3 units of E Lifelong Learning. Refer to course descriptions for application in General Education.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major/Option: 68-74</li>
<li>Total General Education Units: 36</li>
<li>Additional Units: 10-16</li>
<li>Total Units Required for the B.S. Degree: 120</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _F10E