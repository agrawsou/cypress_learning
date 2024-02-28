describe("Check UI Elements", () => {
    // it("Checking radio buttons", () => {
    //   cy.visit("https://artoftesting.com/samplesiteforselenium");
    //   cy.get("#male").should('be.visible')
    //   cy.get("#female").should('be.visible')
    //   cy.get("#female").check().should('be.checked')
    //   cy.get("#male").should('not.be.checked')
    // });

    it("Checking checkboxes", () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium");
        cy.get(".Automation").should('be.visible')
        cy.get(".Performance").should('be.visible')
        cy.get(".Automation").check().should('be.checked')
        cy.get(".Automation").uncheck().should('not.be.checked')

        //Selecting all checkboxes

        cy.get("input[type='checkbox']").check().should('be.checked')
        cy.get("input[type='checkbox']").uncheck().should('not.be.checked')

      });
  });