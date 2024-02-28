import "cypress-iframe";
require("@4tw/cypress-drag-drop");
describe("Handle mouse actions", () => {
  it("Mouse Hover", () => {
    cy.visit("https://demo.opencart.com/");
    cy.xpath("//a[text()='Mac (1)']").should("not.be.visible");
    cy.xpath("//a[text()='Desktops']").trigger("mouseover").click();
    cy.xpath("//a[text()='Mac (1)']").should("be.visible");
  });
  it("Right click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    //Approach 1
    // cy.xpath("//span[text()='right click me']").trigger('contextmenu')
    // cy.xpath("//span[text()='Copy']").should('be.visible')
    //Approach 2
    cy.xpath("//span[text()='right click me']").rightclick();
    cy.xpath("//span[text()='Copy']").should("be.visible");
  });
  it("Double click", () => {
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    );
    cy.frameLoaded("#iframeResult");
    cy.iframe("#iframeResult").xpath("//button[text()='Copy Text']").dblclick();
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");
  });
  it("Drag and drop using plugin", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.xpath("//div[text()='Rome']").drag("#box106", { force: true });
  });
  it.only("Scroll options", () => {
    cy.visit(
      "https://www.countries-ofthe-world.com/flags-of-the-world.html"
    );
    //India Flag
    cy.xpath("//td[text()='India']").scrollIntoView({duration:2000})
    cy.xpath("//td[text()='India']").should('be.visible')
    cy.xpath("//td[text()='Algeria']").scrollIntoView({duration:2000})
    cy.xpath("//td[text()='Algeria']").should('be.visible')
    cy.get("#footer").scrollIntoView({duration:2000})
  });
});
