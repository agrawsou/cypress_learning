describe("Alerts", () => {
  it("Js alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get('button[onclick="jsAlert()"]').click();
    cy.on("window:alert", (t) => {
      expect(t).to.contain("I am a JS Alert");
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("Js confirm alert-OK", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("Js confirm alert-Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });
    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("Js prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome");
    });
    cy.get('button[onclick="jsPrompt()"]').click();
    cy.get("#result").should("have.text", "You entered: welcome");
  });

  it("Authenticated alert1", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: { username: "admin", password: "admin" },
    });
    cy.get('div[class="example"] p').should(
      "contain",
      "Congratulations! You must have the proper credentials."
    );
  });
  it.only("Authenticated alert2", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get('div[class="example"] p').should(
      "contain",
      "Congratulations! You must have the proper credentials."
    );
  });
});
