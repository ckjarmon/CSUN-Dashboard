
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


    function _BEC8() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.S., Athletic Training</h2><div style={titleStyle}>Program Requirements</div><ul style={information_style}><li>The B.S. in Athletic Training has a separate application from the CSUN admissions process. Admission criteria include GPA, observation hours, letters of recommendation and a personal interview with the selection committee. For further information, please go to the Athletic Training major/AT program page located on the Department of Kinesiology website. The 2-year AT program provides students with academic and clinical experiences designed to prepare them for the Board of Certification, Inc. (BOC) examination and a successful career in the field.</li>
</ul>
<div style={redBoldStyle}>1. Athletic Training Prerequisite Coursework (24-30 units)</div>
<ul style={list_style}>
<li>All prerequisite coursework must be completed by the end of the Spring semester in which the student intends to apply to the AT program.</li>
<li>BIOL 101 General Biology (3)</li>
<li>BIOL 101L General Biology Lab (1)</li>
<li>BIOL 211 Human Anatomy (2)</li>
<li>BIOL 212 Laboratory Studies in Human Anatomy (1)</li>
<li>BIOL 281 Human Physiology (3)</li>
<li>FCS 207 Nutrition for Life (3)</li>
<li>KIN 337/L Prevention and Care of Athletic Injuries and Lab (3/1)</li>
<li>MATH 140 Introductory Statistics (4)</li>
<li>PSY 150 Introduction to Psychology (3)</li>
<li>Alternatively, students may take the following courses to fulfill the General Biology and Human Anatomy requirement for the major. This pathway is recommended for students interested in pursuing graduate study in allied health-related programs, such as physical therapy or medicine.</li>
<li>BIOL 106 Biological Principles I (3)</li>
<li>BIOL 106L Biological Principles I Lab (1)</li>
<li>BIOL 107 Biological Principles II (3)</li>
<li>BIOL 107L Biological Principles II Lab (1)</li>
<li>BIOL 382/L Human Anatomy and Physiology I and Lab (3/1)</li>
<li>BIOL 383/L Human Anatomy and Physiology II and Lab (3/1)</li>
</ul>
<div style={redBoldStyle}>2. Lower Division Kinesiology Core (6 units)</div>
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
<li>KIN 172 Ultimate Frisbee (1)</li>
<li>KIN 185A Tennis I (1)</li>
<li>KIN 185B Tennis II (1)</li>
<li>KIN 191A Track and Field I (1)</li>
<li>KIN 195A Volleyball I (1)</li>
</ul>
<div style={redBoldStyle}>3. Upper Division Kinesiology Core Courses (21 units)</div>
<ul style={list_style}>
<li>KIN 300 Foundations and Analysis of Human Movement (3)</li>
<li>KIN 305 Historical and Philosophical Bases of Kinesiology (4)</li>
<li>KIN 306 Socio-Psychological Aspects of Physical Activity (3)</li>
<li>KIN 345/L Biomechanics and Lab (3/1)</li>
<li>KIN 346/L Physiology of Exercise and Lab (3/1)</li>
<li>KIN 377 Motor Learning (3)</li>
</ul>
<div style={redBoldStyle}>4. Upper Division Athletic Training Required Courses (38 units)</div>
<ul style={list_style}>
<ul style={option_style}>
<li>HSCI 336 Health Aspects of Drug Use (3)</li>
<li>or HSCI 345 Public Health Issues (3)</li>
</ul>
<li>KIN 331 Introduction to Athletic Training Clinical Experience (1)</li>
<li>KIN 332 Evidence Based Practice in Athletic Training (3)</li>
<li>KIN 333 Injury Prevention Clinical Reasoning (2)</li>
<li>KIN 334 Evaluation and Rehabilitation Clinical Reasoning (2)</li>
<li>KIN 338/L Lower Extremity Injury Evaluation Techniques and Lab (2/1)</li>
<li>KIN 339/L Upper Extremity Injury Evaluation and Lab (2/1)</li>
<li>KIN 340 Medical Documentation (1)</li>
<li>KIN 341 Prevention and Evaluation Clinical Experience (1)</li>
<li>KIN 342 Rehabilitation and Evaluation Clinical Experience (1)</li>
<li>KIN 349 General Medical Conditions (2)</li>
<li>KIN 349L General Medical Conditions Laboratory (1)</li>
<li>KIN 437 Athletic Training Administration (3)</li>
<li>KIN 441 Administration and Treatment Clinical Experience (1)</li>
<li>KIN 442 Advanced Clinical Experience Techniques (1)</li>
<li>KIN 443 Advanced Activities Clinical Reasoning (2)</li>
<li>KIN 444 Professional Preparation (2)</li>
<li>KIN 457/L Therapeutic Modalities in Sports Medicine and Lab (2/1)</li>
<li>KIN 467/L Therapeutic Exercise Techniques and Lab (2/1)</li>
</ul>
<div style={redBoldStyle}>5. General Education (48 units)</div>
<ul style={list_style}>
<li>Undergraduate students must complete 48 units of General Education as described in this Catalog, including 3 units of coursework meeting the Ethnic Studies (ES) graduation requirement.</li>
<li>18 units are satisfied by the following courses in the major: BIOL 101 or BIOL 106 satisfies B2 Life Science; BIOL 101L or BIOL 106L satisfies B3 Science Laboratory Activity; MATH 140 satisfies Basic Skills B4 Mathematics/Quantitative Reasoning; KIN 345/L satisfies B5 Scientific Inquiry and Quantitative Reasoning; PSY 150 and KIN 306 satisfy D1 Social Sciences; and FCS 207 satisfies E Lifelong Learning and fulfills the Information Competence requirement.</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Major: 89-95</li>
<li>General Education Units: 30</li>
<li>Additional Units: 0-1</li>
<li>Total Units Required for the B.S. Degree: 120-125</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _BEC8