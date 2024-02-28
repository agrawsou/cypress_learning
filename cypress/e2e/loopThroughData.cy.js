describe("My Test Suite", () => {
  let userData;
  before(() => {
    cy.fixture("orangehrm").then((data) => {
      userData = data;
    });
  });

  it("Fixtures Demo", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    for (let myData of userData) {
      cy.get('input[name="username"]').type(myData.username);
      cy.get('input[name="password"]').type(myData.password);
      cy.get('button[type="submit"]').click();

      if (
        myData.username == "Admin" &&
        myData.password == "admin123"
      ) {
        cy.get(".oxd-userdropdown-name").should(
          "have.text",
          myData.expected
        );
        cy.get(".oxd-userdropdown-name").click();
        cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
      } else {
        cy.get('.oxd-alert-content > .oxd-text').should('have.text',myData.expected)
      }
    }
  });
});
