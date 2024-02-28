describe("Signup Test", () => {
  it("Count the number of header links", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.xpath("//div[contains(@class,'shop-menu')]/ul").find
    ("li").should('have.length',8)
  });
});
