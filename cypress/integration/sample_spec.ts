describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('/');
      cy.get('h1').should('have.text','Bienvenido a PetsApp');
    });
  });