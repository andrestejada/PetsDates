describe('My First Test', () => {

  beforeEach(()=>{
    cy.visit('/');
  });

    it('check the principal title', () => {
      cy.get('h1').should('have.text','Bienvenido a PetsApp');
    });

    it('go to the pages citas ', () => {
      cy.get('[href="/citas"]').click();
      cy.get('h2').contains('Gestiona tus citas');
      cy.get('h2').contains('Consulta tus citas');
    });

  });