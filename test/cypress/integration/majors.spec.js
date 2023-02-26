/// <reference types="cypress"/>
describe("Majors Test Cases", function () {
    beforeEach(function () {
        this.major_names = ['B.A., Africana Studies: African and African-American Humanities and Cultural Studies',
            'B.A., Africana Studies: African and African-American Social Sciences',
            'B.A., Africana Studies: African-American Urban Education',
            'B.A., Anthropology',
            'B.A., Art',
            'B.A., Asian American Studies: Double Major',
            'B.A., Asian American Studies: Standard Major',
            'B.A., Biology',
            'B.A., Central American Studies: Double Major',
            'B.A., Central American Studies: Standard Major',
            'B.A., Chemistry',
            'B.A., Chicano and Chicana Studies: Chicana/o Studies Social Science Subject Matter Waiver Program',
            'B.A., Chicano and Chicana Studies: Double Major',
            'B.A., Chicano and Chicana Studies: Single Major',
            'B.A., Child and Adolescent Development: Applied Developmental Science',
            'B.A., Child and Adolescent Development: Early Childhood Development',
            'B.A., Cinema and Television Arts: Emerging Media Production',
            'B.A., Cinema and Television Arts: Entertainment Media Management',
            'B.A., Cinema and Television Arts: Film Production',
            'B.A., Cinema and Television Arts: Media Theory and Criticism',
            'B.A., Cinema and Television Arts: Screenwriting',
            'B.A., Cinema and Television Arts: Television Production',
            'B.A., Communication Studies',
            'B.A., Communicative Disorders',
            'B.A., Criminology and Justice Studies',
            'B.A., Deaf Studies',
            'B.A., Economics',
            'B.A., English: Creative Writing',
            'B.A., English: Four-Year Integrated (FYI) English Subject Matter Program for the Single Subject Credential',
            'B.A., English: Honors',
            'B.A., English: Junior-Year Integrated (JYI) English Subject Matter Program for the Single Subject Credential',
            'B.A., English: Literature',
            'B.A., English: Subject Matter Program for the Single Subject Credential',
            'B.A., Environmental Science',
            'B.A., Gender and Womens Studies',
            'B.A., Gender and Womens Studies: Double Major',
            'B.A., History',
            'B.A., History: Four-Year Integrated (FYI) History Subject Matter Program for the Single Subject Credential',
            'B.A., History: Junior-Year Integrated (JYI) History Subject Matter Program for the Single Subject Credential',
            'B.A., Interdisciplinary Studies',
            'B.A., Jewish Studies',
            'B.A., Journalism',
            'B.A., Journalism: Broadcast',
            'B.A., Journalism: Public Relations',
            'B.A., Languages and Cultures: Armenian',
            'B.A., Languages and Cultures: French',
            'B.A., Languages and Cultures: Italian',
            'B.A., Languages and Cultures: Japanese',
            'B.A., Liberal Studies: Integrated Teacher Education Program (ITEP) Freshman',
            'B.A., Liberal Studies: Integrated Teacher Education Program (ITEP) Junior',
            'B.A., Liberal Studies: Pre-Credential Program',
            'B.A., Linguistics',
            'B.A., Mathematics: Four-Year Integrated (FYI) Mathematics Subject Matter Program for the Single Subject Credential',
            'B.A., Mathematics: General',
            'B.A., Mathematics: Junior-Year Integrated (JYI) Mathematics Subject Matter Program for the Single Subject Credential',
            'B.A., Mathematics: Secondary Teaching',
            'B.A., Music: Breadth Studies Option',
            'B.A., Music: Music Education Option',
            'B.A., Music: Music Industry Studies Option',
            'B.A., Music: Music Therapy Option',
            'B.A., Philosophy',
            'B.A., Philosophy: Double Major',
            'B.A., Physics',
            'B.A., Political Science: Law and Society',
            'B.A., Political Science: Politics and Government',
            'B.A., Political Science: Public Policy and Management',
            'B.A., Psychology',
            'B.A., Psychology: Honors',
            'B.A., Public Sector Management',
            'B.A., Religious Studies',
            'B.A., Religious Studies: Double Major',
            'B.A., Sociology',
            'B.A., Spanish: Hispanic Linguistics',
            'B.A., Spanish: Language and Culture',
            'B.A., Spanish: Literature',
            'B.A., Spanish: Translation and Interpretation',
            'B.A., Theatre',
            'B.A., Urban Studies and Planning',
            'B.M., Music: Composition/Commercial and Media Writing Option',
            'B.M., Music: Jazz Studies Option',
            'B.M., Music: Keyboard Option',
            'B.M., Music: Percussion Option',
            'B.M., Music: Strings Option',
            'B.M., Music: Vocal Arts Option',
            'B.M., Music: Winds Option',
            'B.S., Accountancy: Information Systems',
            'B.S., Accountancy: Professional Accountancy',
            'B.S., Athletic Training',
            'B.S., Biochemistry',
            'B.S., Biology: Biotechnology/Medical Technology',
            'B.S., Biology: Cell and Molecular Biology',
            'B.S., Biology: Ecology and Evolutionary Biology',
            'B.S., Biology: Marine Biology',
            'B.S., Biology: Microbiology',
            'B.S., Business Administration: Business Analytics',
            'B.S., Business Administration: Business Law',
            'B.S., Business Administration: Financial Analysis',
            'B.S., Business Administration: Financial Planning',
            'B.S., Business Administration: Global Supply Chain Management',
            'B.S., Business Administration: Management',
            'B.S., Business Administration: Marketing',
            'B.S., Business Administration: Real Estate',
            'B.S., Business Administration: Risk Management and Insurance',
            'B.S., Business Administration: Systems and Operations Management',
            'B.S., Chemistry',
            'B.S., Civil Engineering',
            'B.S., Computer Engineering',
            'B.S., Computer Information Technology',
            'B.S., Computer Science',
            'B.S., Construction Management',
            'B.S., Electrical Engineering',
            'B.S., Engineering Management Technology',
            'B.S., Environmental and Occupational Health',
            'B.S., Environmental and Occupational Health: Industrial Hygiene',
            'B.S., Family and Consumer Sciences: Apparel Design and Merchandising',
            'B.S., Family and Consumer Sciences: Consumer Affairs',
            'B.S., Family and Consumer Sciences: Family and Consumer Sciences Education',
            'B.S., Family and Consumer Sciences: Family Studies',
            'B.S., Geographic Information Science',
            'B.S., Geography and Environmental Studies',
            'B.S., Geology: Geology',
            'B.S., Geology: Geophysics',
            'B.S., Health Administration',
            'B.S., Information Systems: Business Systems',
            'B.S., Information Systems: Computer Information Technology',
            'B.S., Information Systems: Health Systems',
            'B.S., Information Systems: Software Technology',
            'B.S., Interior Design',
            'B.S., Kinesiology: Applied Fitness and Active Lifestyle Development',
            'B.S., Kinesiology: Dance',
            'B.S., Kinesiology: Exercise Science',
            'B.S., Kinesiology: Physical Education',
            'B.S., Kinesiology: Sport Studies',
            'B.S., Manufacturing Systems Engineering',
            'B.S., Mathematics: Applied Mathematical Sciences',
            'B.S., Mathematics: Mathematics',
            'B.S., Mathematics: Statistics',
            'B.S., Mechanical Engineering',
            'B.S., Nursing: Accelerated',
            'B.S., Nursing: RN to BSN',
            'B.S., Nutrition, Dietetics and Food Science: Food Science',
            'B.S., Nutrition, Dietetics and Food Science: Nutrition and Dietetics',
            'B.S., Physics: Astrophysics',
            'B.S., Physics: Physics',
            'B.S., Public Health',
            'B.S., Radiologic Sciences',
            'B.S., Tourism, Hospitality, and Recreation Management']

        cy.viewport(1920, 1080);
        cy.visit(Cypress.config("baseUrl") + '/majors');
    })


    it("Can Visit All Majors", function () {
        this.major_names.forEach((major) => {
            cy.contains(major).click()
            cy.contains(major).should('be.visible')
            cy.url().should((url) => {
                expect(url).to.match(/https:\/\/csundash.kyeou.xyz\/majors\/[a-z0-9]{4}/)
            })
            cy.go('back')
        })
    })
})