/// <reference types="cypress"/>
describe("Home Test Cases", function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit(Cypress.config("baseUrl"));
    
    })


    it("Can see home page", function () {
        cy.contains("The CSUN course planner you've been looking for")
        cy.contains("Get Started").should('be.visible').click()
        cy.url().should('eq', Cypress.config("baseUrl") + '/planner')
    })
})