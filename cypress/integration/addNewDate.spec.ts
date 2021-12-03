describe('adding a new date', () => {
    beforeEach(()=>{
        cy.visit('/',);
        cy.get('[href="/citas"]').click(); 
        cy.fixture('date.json').then((date)=>{
            this.date=date;
        });
        cy.intercept('GET','/dates',{fixture:'anyDate.json'});
      });
    it('should ', () => {
        cy.FillForm(this.date);
        cy.intercept('POST','/dates',{body:{...this.date,id:1}}).as('newDate');
        cy.get('[data-testid="submit"]').click();
        //cy.get('@PostNewDate').should('equal',this.date);
        cy.wait('@newDate').then( inter=> {
            const nombre = inter.response.body.nombrePropietario;
            const observaciones = inter.response.body.observaciones;
            cy.log(observaciones);
            cy.get('.MuiCardContent-root')
                .should('contain.text',nombre)
                .and('contain.text',observaciones);
            
        });
        cy.get('.MuiCardContent-root').should('exist',true);
        cy.get('.sc-AxhUy > .MuiButtonBase-root').should('exist',true);
        //cy.get('.MuiCardContent-root').contains(this.date.);
    });
   
});