/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress"/>

describe("Ratings Test Cases", function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit(Cypress.config("baseUrl") + '/faculty');
    })


    it("Can View Ratings", function () {
        cy.contains('Select Subject').next().click()
        cy.wait(10)
        cy.get(`[data-value="COMP"]`).click()

        cy.contains('Edmund Dantes').prev().click()
        cy.contains('Professor Ratings').invoke('attr', 'href').then((link) => {
            cy.visit(link)
        })

        cy.contains('button', 'Rate Professor Dantes').should('exist')
        cy.wait(1000)
    })

    it("Can Add Rating", function () {
        cy.contains('Select Subject').next().click()
        cy.wait(10)
        cy.get(`[data-value="COMP"]`).click()

        cy.contains('Edmund Dantes').prev().click()
        cy.contains('Professor Ratings').invoke('attr', 'href').then((link) => {
            cy.visit(link)
        })

        cy.contains('button', 'Rate Professor Dantes').should('exist')
        cy.contains('button', 'Rate Professor Dantes').click()

        cy.contains('Course Code')
        .next().children().next().children().first().type('COMP 490')

        cy.contains('Rate your professor').next().click('right')
        // .children().eq(2).children('input').invoke('attr', 'aria-valuempw', "5")

        cy.contains('How difficult was this professor?').next().click('right')

        cy.contains('Would you take this professor again?')
        .next().children().children().first().click()

        cy.contains('Did this professor use textbooks?')
        .next().children().children().first().click()

        cy.contains('Was attendance mandatory?')
        .next().children().children().first().click()

        cy.contains('Select Grade').next().children().first().click()
        cy.get('ul.MuiList-root').children().first().click()

        cy.contains('p', 'Class Type').next().click()
        cy.get('ul.MuiList-root').children().first().click()

        const now = new Date().getTime()
        cy.get('textarea').type(`This rating was made by Cypress :)\nCurrent time ` +  now)

        cy.contains('button', 'Post').click()

        cy.contains(now).should('be.visible')
    })

    it("Can Add Rating [Negative]", function () {
        cy.contains('Select Subject').next().click()
        cy.wait(10)
        cy.get(`[data-value="COMP"]`).click()

        cy.contains('Edmund Dantes').prev().click()
        cy.contains('Professor Ratings').invoke('attr', 'href').then((link) => {
            cy.visit(link)
        })

        cy.contains('button', 'Rate Professor Dantes').should('exist')
        cy.contains('button', 'Rate Professor Dantes').click()

        cy.contains('Course Code')
        .next().children().next().children().first().type('COMP 490')

        cy.contains('Rate your professor').next().click('right')
        // .children().eq(2).children('input').invoke('attr', 'aria-valuempw', "5")

        cy.contains('How difficult was this professor?').next().click('right')

        cy.contains('Would you take this professor again?')
        .next().children().children().first().click()

        cy.contains('Did this professor use textbooks?')
        .next().children().children().first().click()

        cy.contains('Was attendance mandatory?')
        .next().children().children().first().click()

        cy.contains('Select Grade').next().children().first().click()
        cy.get('ul.MuiList-root').children().first().click()

        cy.contains('p', 'Class Type').next().click()
        cy.get('ul.MuiList-root').children().first().click()

        cy.contains('button', 'Post').click()

        // Indicated failure
        cy.contains('All Fields Are Required').should('be.visible')

        cy.contains('Post New Rating for Edmund Dantes').should('be.visible')

    })

})