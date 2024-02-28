describe('My Test Suite', () => {
    before(() => {
        cy.log("*********** Launch App  ***************")
    })
    after(() => {
        cy.log("*********** Close App  ***************")
    })
    beforeEach(() => {
        cy.log("*********** Login to the app  ***************")
    })
    afterEach(() => {
        cy.log("*********** Logout from the app  ***************")
    })
    it('search', () => {
        cy.log("***********  searching  ************")
    })
    it.skip('advanced search', () => {
        cy.log("***********  advanced searching  ************")
    })
    it.only('listing products', () => {
        cy.log("***********  List products  ************")
    })
})