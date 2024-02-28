describe('My First Test', () => {
    it('Positive Title Test', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
      cy.title().should('eq','OrangeHRM')
    })

    it('Negative Title Test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.title().should('eq','OrangeHRM123')
      })
  })