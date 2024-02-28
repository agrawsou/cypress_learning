describe("My Test Suite", () => {
    let userData
  before(() => {
    cy.fixture("orangehrm").then((data) => {
        userData = data;
    });
  });

  it("Fixtures Demo", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
      cy.get('input[name="username"]').type(userData[0].username);
      cy.get('input[name="password"]').type(userData[0].password);
      cy.get('button[type="submit"]').click();
      cy.get(".oxd-userdropdown-name").should("have.text", userData[0].expected);
  });
});
