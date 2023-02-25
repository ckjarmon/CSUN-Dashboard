/// <reference types="cypress"/>
describe("Planner Test Cases", function () {
    beforeEach(function () {
        cy.intercept('GET', '/*/professors').as('professors')
        cy.viewport(1920, 1080);
        cy.visit(Cypress.config("baseUrl") + '/professor-search');

        this.class_codes = ["AE", "AM", "AAS", "ACCT", "AFRS", "AIS", "ANTH", "ARAB", "ARMN", "ART",
            "ASTR", "ATHL", "BANA", "BIOL", "BLAW", "BUS", "CE", "CADV", "CAS", "CCE", "CD", "CECS", "CHS",
            "CHEM", "CHIN", "CIT", "CJS", "CLAS", "CM", "COMP", "COMS", "CTVA", "DEAF", "EED", "ECE", "ECON",
            "EDUC", "ELPS", "ENGL", "EOH", "EPC", "FCS", "FIN", "FLIT", "FREN", "GBUS", "GEOG", "GEOL", "GWS",
            "HEBR", "HIST", "HSCI", "HUM", "INDS", "IS", "ITAL", "JS", "JAPN", "JOUR", "KIN", "KOR", "LING",
            "LRS", "ME", "MATH", "MCOM", "MGT", "MKT", "MSE", "MUS", "NURS", "PERS", "PHIL", "PHSC", "PHYS",
            "POLS", "PSY", "PT", "QS", "RS", "RE", "RTM", "RUSS", "SED", "SCI", "SCM", "SOC", "SOM", "SPAN",
            "SPED", "SUST", "SWRK", "TH", "UNIV", "URBS"]
    })


    it("Can view faculty members", function () {

        this.class_codes.forEach((code) => {
            cy.contains('Select Subject').next().click()
            cy.wait(10)
            cy.get(`[data-value="${code}"]`).click()
            cy.wait(10)


            cy.get('@professors').then((res) => {
                cy.request(`https://api.kyeou.xyz/${code}/professors`).then((api_res) => {
                    expect(res.response.body).eql(api_res.body)
                })
            })
        })
    })


})