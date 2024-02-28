describe('Custom commands', () => {
    it('Handling Links', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get(".product-name>h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    it('Login Command', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Log in")
        cy.loginApp("sourabh.agrawal200.sa@gmail.com","Bleedblue@01")
        cy.get(".ico-account").should('have.text','My account')
    })
})