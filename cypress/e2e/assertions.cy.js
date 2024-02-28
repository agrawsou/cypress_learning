describe('Assertions demo', () => {
    it('Implicit Assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrmlive.com').and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').and('include','orangehrmlive.com')
        .and('not.contain','greenhrm')
        cy.title().should('include','Orange').and('eq','OrangeHRM').and('contain','HRM')
        cy.xpath("//img[@alt='company-branding']").should('be.visible').and('exist')

        cy.xpath("//a").should('have.length',5)
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='username']").should('have.value','Admin')
    })

    it('Explicit Assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get(".orangehrm-login-button").click()

        let expName = "Paul Collings";

        cy.get(".oxd-userdropdown-name").then((e) => {
            expect(e.text()).to.eq(expName)

            //TDD style
            assert.equal(e.text(),expName)
        })
    })
})