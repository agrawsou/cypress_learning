describe('My Suite', () => {
    it('Screenshots and videos', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.screenshot("homepage")

        cy.get("img[src$='logo.png']").screenshot("logo")

        cy.contains("Log in").click()
        cy.get(".page.login-page>div>h1").should('have.text','Welcome, Please')
    })
})