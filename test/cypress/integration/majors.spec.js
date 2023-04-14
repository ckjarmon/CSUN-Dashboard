/// <reference types="cypress"/>
describe("Majors Test Cases", function () {
    before(function () {
        this.major_names = [
            'B.A., Biology',
            'B.A., Chemistry',
            'B.A., Economics',
            'B.A., English: Creative Writing',
            'B.A., History',
            'B.A., History: Four-Year Integrated (FYI) History Subject Matter Program for the Single Subject Credential',
            'B.A., History: Junior-Year Integrated (JYI) History Subject Matter Program for the Single Subject Credential',
            'B.A., Interdisciplinary Studies',
            'B.A., Linguistics',
            'B.A., Mathematics: Four-Year Integrated (FYI) Mathematics Subject Matter Program for the Single Subject Credential',
            'B.A., Mathematics: General',
            'B.A., Mathematics: Junior-Year Integrated (JYI) Mathematics Subject Matter Program for the Single Subject Credential',
            'B.A., Political Science: Law and Society',
            'B.A., Spanish: Hispanic Linguistics',
            'B.S., Chemistry',
            'B.S., Computer Engineering',
            'B.S., Computer Information Technology',
            'B.S., Computer Science',
            'B.S., Construction Management',
            'B.S., Electrical Engineering']

        cy.viewport(1920, 1080);
        cy.visit('/majors');
    })


    it("Can Visit All Majors", function () {
        this.major_names.forEach((major) => {
            cy.contains(major).click()
            cy.contains(major).should('be.visible')
            cy.url().should((url) => {
                expect(url).to.match(/\/majors\/[a-z0-9]{4}/)
            })
            cy.go('back')
        })
    })
})