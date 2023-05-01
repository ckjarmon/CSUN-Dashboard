/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress"/>
describe("Faculty Test Cases", function () {
    before(function () {
        cy.intercept('GET', '/*/professors').as('professors')
        cy.viewport(1920, 1080);
        cy.visit('/faculty');

        this.class_codes = ["BIOL", "BLAW", "BUS", "CE", "CHEM", "CIT", "COMP",
            "ECE", "ECON", "EDUC", "ELPS", "ENGL", "HIST", "ME", "MATH"]
    })


    it("Can View Faculty Members", function () {
        this.class_codes.forEach((code) => {
            cy.contains('Select Subject').next().click()

            cy.get(`[data-value="${code}"]`).click()

            cy.wait('@professors').then((res) => {
                expect(res.response.statusCode).eql(200)
                // cy.request(`${Cypress.config("apiUrl")}/${code}/professors`).then((api_res) => {
                //     expect(res.response.body).eql(api_res.body)
                // })
            })
        })
    })
})