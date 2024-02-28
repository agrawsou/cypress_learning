class Login {

    userNameEle = "input[name='username']"
    passwordEle = "input[name='password']"
    submitEle = 'button[type="submit"]'
    verifyEle = ".oxd-userdropdown-name"


    setUserName(username) {
      cy.get(this.userNameEle).type(username);
    }
  
    setPassword(password) {
      cy.get(this.passwordEle).type(password);
    }
  
    clickLogin() {
      cy.get(this.submitEle).click();
    }
  
    verifyLogin() {
      cy.get(this.verifyEle).should("have.text", "Paul Collings");
    }
  }
  
  export default Login;