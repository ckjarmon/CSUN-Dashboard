/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress"/>

describe("Planner Test Cases", function () {
    beforeEach(function () {
        cy.intercept('GET', '/*/classes').as('classes')
        cy.intercept('GET', '/*/schedule').as('schedule')

        this.class_codes = ["BIOL", "BLAW", "BUS", "CE", "CHEM", "CIT", "COMP",
            "ECE", "ECON", "EDUC", "ELPS", "ENGL", "HIST", "ME", "MATH"]

        cy.viewport(1920, 1080);
        cy.visit('/planner');
    })


    it("Can Select Subject and Term", function () {
        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)
        this.class_codes.forEach((code) => {
            cy.contains('Subject').next().click()

            cy.get(`[data-value="${code}"]`).click()

        })
    })

    it("Sections Show Up When Term Selected", function () {
        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)
        this.class_codes.forEach((code) => {

            cy.log(code)
            cy.contains('Subject').next().click()

            cy.get(`[data-value="${code}"]`).click()

            cy.wait('@classes').then((res) => {
                expect(res.response.statusCode).eql(200)
            })
            cy.wait('@schedule').then((res) => {
                expect(res.response.statusCode).eql(200)
            })
        })
    })

    it("Can Add Classes", function () {
        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)

        cy.contains('Subject').next().click()

        cy.get(`[data-value="COMP"]`).click()

        cy.wait('@classes').then((res) => {
            expect(res.response.statusCode).eql(200)
        })
        cy.wait('@schedule').then((res) => {
            expect(res.response.statusCode).eql(200)
        })


        cy.contains("100 - Computers: Their Impact and Use").click()
        cy.contains("16185").prev().click()
        cy.contains("Class has been added to your planner.").should('exist')

        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div[2]').should('contain.text', '16185')
    })

    it("Can't Add Classes If It Conflicts", function () {
        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)

        cy.contains('Subject').next().click()

        cy.get(`[data-value="COMP"]`).click()

        cy.wait('@classes').then((res) => {
            expect(res.response.statusCode).eql(200)
        })
        cy.wait('@schedule').then((res) => {
            expect(res.response.statusCode).eql(200)
        })

        cy.contains("100 - Computers: Their Impact and Use")
            .click()

        cy.contains("16185")
            .prev().click()

        cy.contains("Class has been added to your planner.")
            .should('exist')

        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div[2]')
            .should('contain.text', '16185')

        cy.contains("100 - Computers: Their Impact and Use")
            .click()

        cy.contains("16186")
            .prev().click()

        cy.contains("This class conflicts with current schedule!")
            .should('exist')

        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div[2]')
            .should('not.contain.text', '16186')
    })

    it("Can Remove Classes", function () {
        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)

        cy.contains('Subject').next().click()

        cy.get(`[data-value="COMP"]`).click()

        cy.wait('@classes').then((res) => {
            expect(res.response.statusCode).eql(200)
        })
        cy.wait('@schedule').then((res) => {
            expect(res.response.statusCode).eql(200)
        })

        cy.contains("100 - Computers: Their Impact and Use")
            .click()

        cy.contains("16185")
            .prev().click()

        cy.contains("Class has been added to your planner.")
            .should('exist')

        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div[2]')
            .should('contain.text', '16185')

        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div[2]')
            .children().contains('16185').prev().click()

        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div[2]')
            .should('not.contain.text', '16185')
    })

    it("Cost", function () {
        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)

        cy.contains('Subject').next().click()

        cy.get(`[data-value="COMP"]`).click()


        cy.wait('@classes').then((res) => {
            expect(res.response.statusCode).eql(200)
        })
        cy.wait('@schedule').then((res) => {
            expect(res.response.statusCode).eql(200)
        })


        cy.contains("100 - Computers: Their Impact and Use")
            .click()

        cy.contains("16185")
            .prev().click()

        cy.contains("Class has been added to your planner.")
            .should('exist')

        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div[2]')
            .should('contain.text', '16185')

        cy.contains('Semester Cost').next().children()
            .should('contain.text', 'Units: 3')
            .should('contain.text', 'Cost: $2326')
    })
})