describe('in the test the user fill the form, and add a new date with the same hour time of an already assigned date', () => {
  const newDate = {
    nombrePropietario: 'Carolina Gutierrez',
    nombreMascota: 'lasie',
    tipoServicio: 'regular',
    tarifa: 20000,
    fechaHora: '2021-12-09T08:00',
    observaciones: 'aplicarle locion',
  };
  before(() => {
    cy.visit('/');
    cy.get('[href="/citas"]').click();
    cy.intercept('GET', '/dates', { fixture: 'datesSameDay' });
    
  });
  it('shoul be fill the form with the same time to other exist date and show alert error', () => {
    cy.FillForm(newDate);
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="alerta"]')
      .should('exist', true)
      .and(
        'contain.text',
        'No puedes agregar 2 citas a la misma hora,recuerda que cada cita tiene una duración de 2 horas.'
      );
    cy.scrollTo('top');
  });
  it('change the time half an hour later and show the alert again ', () => {
    cy.get('#datetime-local').type('2021-12-09T08:30');
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="alerta"]')
      .should('exist', true)
      .and(
        'contain.text',
        'No puedes agregar 2 citas a la misma hora,recuerda que cada cita tiene una duración de 2 horas.'
      );
    cy.get('.sc-AxgMl > div').should(($date) => {
      expect($date).not.have.length(5);
    });
    cy.scrollTo('top');
  });
  it('change the time in range of time free and add a new date to the list', () => {
    cy.get('#datetime-local').type('2021-12-09T14:02');
    cy.intercept('POST', '/dates', { body: { ...newDate, id: 5 } }).as(
        'newDate'
      );
    cy.get('[data-testid="submit"]').click();
    cy.wait('@newDate');
    cy.get('.sc-AxgMl > div').should(($date=>{
        expect($date).to.have.length(5);
    }));
    cy.scrollTo('top');
  });
});
