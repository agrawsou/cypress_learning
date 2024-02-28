describe("Handle Dropdowns", () => {
  it("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country")
      .select("Italy")
      .should("have.value", "Italy");
  });
  it("Bootstrap dropdown", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type("Italy").type("{Enter}");
    cy.get("#select2-billing_country-container").should("have.text", "Italy");
  });
  it("Autosuggestion dropdown", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("Delhi");
    cy.get("h3.suggestion-title").contains("Delhi University").click();
  });
  it("Dynamic dropdown", () => {
    cy.visit("https://www.google.com/");
    cy.get('textarea[title="Search"]').type("cypress automation");
    cy.wait(3000);
    cy.get("div.wM6W7d>span").should("have.length", 13);
    cy.get("div.wM6W7d>span").each(($e1, index, $list) => {
      if ($e1.text() == "cypress automation tool") {
        cy.wrap($e1).click();
      }
    });
    cy.get('textarea[type="search"]').should('have.value','cypress automation tool')
  });
});
