describe('when visit the first time the page /citas did`nt have any date ', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[href="/citas"]').click();
  });
  it('should be have the message about there is any date', () => {
    cy.intercept('/dates', {
      fixture: 'anyDate.json',
    });

    cy.get('[data-testid="empty-dates"]').should(
      'contain.text',
      'No hay citas aun, empieza creando una'
    );
  });
});
