/// <reference types="cypress" />

Cypress.Commands.add('Login', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    // cy.contains('button', 'ENTRAR').click();
    cy.get('#login').click();

    cy.location().should((loc) => {
        expect(loc.pathname).to.eql('/login');
    })

    cy.get('body > nav > button').should('be.visible');
});

Cypress.Commands.add('MsgLoginFalho', () => {
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible');
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text', 'E-mail e/ou senha inválidos');
});

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