/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress"/>

describe("Planner Test Cases", function () {
    beforeEach(function () {
        cy.intercept('GET', '/*/classes').as('classes')
        cy.intercept('GET', '/*/schedule').as('schedule')

        this.class_codes = ["AE", "AM", "AAS", "ACCT", "AFRS", "AIS", "ANTH", "ARAB", "ARMN", "ART", 
        "ASTR", "ATHL", "BANA", "BIOL", "BLAW", "BUS", "CE", "CADV", "CAS", "CCE", "CD", "CECS", "CHS", 
        "CHEM", "CHIN", "CIT", "CJS", "CLAS", "CM", "COMP", "COMS", "CTVA", "DEAF", "EED", "ECE", "ECON", 
        "EDUC", "ELPS", "ENGL", "EOH", "EPC", "FCS", "FIN", "FLIT", "FREN", "GBUS", "GEOG", "GEOL", "GWS", 
        "HEBR", "HIST", "HSCI", "HUM", "INDS", "IS", "ITAL", "JS", "JAPN", "JOUR", "KIN", "KOR", "LING", 
        "LRS", "ME", "MATH", "MCOM", "MGT", "MKT", "MSE", "MUS", "NURS", "PERS", "PHIL", "PHSC", "PHYS", 
        "POLS", "PSY", "PT", "QS", "RS", "RE", "RTM", "RUSS", "SED", "SCI", "SCM", "SOC", "SOM", "SPAN", 
        "SPED", "SUST", "SWRK", "TH", "UNIV", "URBS"]

        cy.viewport(1920, 1080);
        cy.visit(Cypress.config("baseUrl") + '/planner');
    })


    it("Can Select Subject and Term", function () {

        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)
        this.class_codes.forEach((code) => {
            cy.contains('Subject').next().click()
            cy.wait(10)
            cy.get(`[data-value="${code}"]`).click()
            cy.wait(10)
        })
    })

    it("Sections Show Up When Term Selected", function () {
        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)
        this.class_codes.forEach((code) => {
            // Looking for IS selects AIS 
            cy.log(code)
            cy.contains('Subject').next().click()
            cy.wait(10)
            cy.get(`[data-value="${code}"]`).click()
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

    it("Can Add Classes", function () {
        cy.contains('Term').next().click()
        cy.get('[role="listbox"]').children().first().click()
        cy.get('input').should('have.length', 2)

        cy.contains('Subject').next().click()
        cy.wait(10)
        cy.get(`[data-value="COMP"]`).click()

        cy.get('@classes').then((res) => {
            cy.request(`https://api.kyeou.xyz/COMP/classes`).then((api_res) => {
                expect(res.response.body).eql(api_res.body)
            })
        })
        cy.get('@schedule').then((res) => {
            cy.request(`https://api.kyeou.xyz/COMP/schedule`).then((api_res) => {
                expect(res.response.body).eql(api_res.body)
            })
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
        cy.wait(10)
        cy.get(`[data-value="COMP"]`).click()

        cy.get('@classes').then((res) => {
            cy.request(`https://api.kyeou.xyz/COMP/classes`).then((api_res) => {
                expect(res.response.body).eql(api_res.body)
            })
        })
        cy.get('@schedule').then((res) => {
            cy.request(`https://api.kyeou.xyz/COMP/schedule`).then((api_res) => {
                expect(res.response.body).eql(api_res.body)
            })
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
        cy.wait(10)
        cy.get(`[data-value="COMP"]`).click()

        cy.get('@classes').then((res) => {
            cy.request(`https://api.kyeou.xyz/COMP/classes`).then((api_res) => {
                expect(res.response.body).eql(api_res.body)
            })
        })
        cy.get('@schedule').then((res) => {
            cy.request(`https://api.kyeou.xyz/COMP/schedule`).then((api_res) => {
                expect(res.response.body).eql(api_res.body)
            })
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
        cy.wait(10)
        cy.get(`[data-value="COMP"]`).click()
        cy.wait(10)

        cy.get('@classes').then((res) => {
            cy.request(`https://api.kyeou.xyz/COMP/classes`).then((api_res) => {
                expect(res.response.body).eql(api_res.body)
            })
        })
        cy.get('@schedule').then((res) => {
            cy.request(`https://api.kyeou.xyz/COMP/schedule`).then((api_res) => {
                expect(res.response.body).eql(api_res.body)
            })
        })


        cy.contains("100 - Computers: Their Impact and Use")
        .click()

        cy.contains("16185")
        .prev().click()

        cy.contains("Class Has Been Added To Planner")
        .should('exist')

        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div[2]')
        .should('contain.text', '16185')

        cy.contains('Semester Cost').next().children()
            .should('contain.text', 'Units: 3')
            .should('contain.text', 'Cost: $2326')
    })

})