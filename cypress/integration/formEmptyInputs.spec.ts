describe('testing in the citas page about form validation', () => {
    beforeEach(()=>{
        cy.visit('/',);
        cy.get('[href="/citas"]').click();
        cy.fixture('newDate.json').then((date)=>this.date=date);     
        cy.intercept('GET', '/dates', { fixture: 'anyDate.json' });  
      });
    it('verify error mesage when the form is empty', () => {
        cy.get('[data-testid="submit"]').click(); 
        cy.get('[data-testid="alerta"]').should('contain','Todos los campos son obligatorios');
    });

    it('verify error mesage when the form is with some fill inputs', () => {
        cy.get('[name="nombrePropietario"]').type(this.date.nombrePropietario);
        cy.get('[name="nombreMascota"]').type(this.date.nombreMascota);
        cy.get('[name="tipoServicio"]').select(this.date.tipoServicio);
        cy.get('[data-testid="submit"]').click(); 
        cy.get('[data-testid="alerta"]').should('contain','Todos los campos son obligatorios');
    });
});