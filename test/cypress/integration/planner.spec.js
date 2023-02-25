/// <reference types="cypress"/>

describe("Planner Test Cases", function () {
    beforeEach(function () {
        cy.intercept('GET', '/*/classes').as('classes')
        cy.intercept('GET', '/*/schedule').as('schedule')
        this.class_codes = ["AE", "AM", "AAS", "ACCT", "AFRS", "AIS", "ANTH", "ARAB", "ARMN", "ART", "ASTR", "ATHL", "BANA", "BIOL", "BLAW", "BUS", "CE", "CADV", "CAS", "CCE", "CD", "CECS", "CHS", "CHEM", "CHIN", "CIT", "CJS", "CLAS", "CM", "COMP", "COMS", "CTVA", "DEAF", "EED", "ECE", "ECON", "EDUC", "ELPS", "ENGL", "EOH", "EPC", "FCS", "FIN", "FLIT", "FREN", "GBUS", "GEOG", "GEOL", "GWS", "HEBR", "HIST", "HSCI", "HUM", "INDS", "IS", "ITAL", "JS", "JAPN", "JOUR", "KIN", "KNFC", "KOR", "LING", "LRS", "ME", "MATH", "MCOM", "MGT", "MKT", "MSE", "MUS", "NURS", "PERS", "PHIL", "PHSC", "PHYS", "POLS", "PSY", "PT", "QS", "RS", "RE", "RTM", "RUSS", "SED", "SCI", "SCM", "SOC", "SOM", "SPAN", "SPED", "SUST", "SWRK", "TH", "UNIV", "URBS"]
        cy.viewport(1920, 1080);
        cy.visit(Cypress.config("baseUrl") + '/planner');
    })


    it("Can select subject and term", function () {

        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)
        this.class_codes.forEach((code) => {
            cy.contains('Subject').next().click()
            cy.wait(10)
            cy.contains(code).click()
            cy.wait(10)
        })
    })

    it("Sections show up when subject and term selected", function () {
        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)
        this.class_codes.forEach((code) => {

            cy.contains('Subject').next().click()
            cy.wait(10)
            cy.contains(code).click()
            cy.wait(10)
            cy.wait(1000)
            cy.get('@classes').then((res) => {
                cy.request(`https://api.kyeou.xyz/${code}/classes`).then((api_res) => {
                    expect(res.response.body).eql(api_res.body)
                })
            })
            cy.get('@schedule').then((res) => {
                cy.request(`https://api.kyeou.xyz/${code}/schedule`).then((api_res) => {
                    expect(res.response.body).eql(api_res.body)
                })
            })

        })
    })
    /* it("Add Classes", function () {})
 
     it("Add Classes [Conflict", function () {})
 
     it("Cost", function () {})
    */
})