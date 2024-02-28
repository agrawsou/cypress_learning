class Login {
  setUserName(username) {
    cy.get("input[name='username']").type(username);
  }

  setPassword(password) {
    cy.get("input[name='password']").type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  verifyLogin() {
    cy.get(".oxd-userdropdown-name").should("have.text", "Susmit Surwade");
  }
}

export default Login;
