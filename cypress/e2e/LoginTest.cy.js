import Login from "../PageObjects/LoginPage2.js"

describe('pom', () => {
    it('MyLoginTest', () => {
        cy.visit(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
          );

          const ln = new Login();
          ln.setUserName("Admin")
          ln.setPassword("admin123")
          ln.clickLogin()
          ln.verifyLogin()
    })
})