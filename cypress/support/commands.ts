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
Cypress.Commands.add('FillForm',(data)=>{
    cy.get('[name="nombrePropietario"]').type(data.nombrePropietario);
    cy.get('[name="nombreMascota"]').type(data.nombreMascota);
    cy.get('[name="tipoServicio"]').select(data.tipoServicio);
    cy.get('[name="fechaHora"]').type(data.fechaHora);
    cy.get('[name="observaciones"]').type(data.observaciones); 
});

