// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

Cypress.Commands.add("getIFrame", (loc) => {
  cy.get(loc).its("0.contentDocument.body").should("be.visible").then(cy.wrap);
});

Cypress.Commands.add("clickLink", (label) => {
  cy.contains(label).click();
});

Cypress.Commands.add("loginApp", (email,password) => {
    cy.get("#Email").type(email)
    cy.get("#Password").type(password)
    cy.get(".login-button").click()
  });

