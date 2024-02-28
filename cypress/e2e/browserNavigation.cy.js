describe('Browser Navigation', () => {
    it('Navigation Test', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.contains("Log in").click()
        cy.go('back')
        cy.go('forward')
        cy.reload()
    })
})