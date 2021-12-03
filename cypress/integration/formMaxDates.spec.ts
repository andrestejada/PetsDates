describe('testing about form validation , 5 day per day', () => {
   
      before(()=>{
        cy.visit('/');
        cy.get('[href="/citas"]').click();
        cy.fixture('newDate.json').then((date) => {
          this.date = date;
        });
        cy.intercept('GET', '/dates', { fixture: 'datesSameDay' });
      });
    it('should be fill the form with a date that complete more that 5 dates with the same Date Time', () => {
        cy.FillForm(this.date);
        cy.intercept('POST', '/dates', { body: { ...this.date, id: 5 } }).as(
            'newDate'
          );
        cy.get('[data-testid="submit"]').click();
        cy.wait('@newDate');
        cy.get(':nth-child(5) > .MuiCardContent-root')
            .should('exist',true)
            .and('contain.text',this.date.observaciones);
    });
    it('should be fill the form with a date , have to show alert and dont allow add the  new date ', () => {
        cy.FillForm(this.date);
        cy.get('[data-testid="submit"]').click();
        cy.get('[data-testid="alerta"]')
            .should('exist',true)
            .and('contain.text','Solo puedes agregar 5 citas que corresponda al mismo dia');
        cy.get('.sc-AxgMl > div').should(($date=>{
            expect($date).to.have.length(5);
        }));
        cy.scrollTo('top');
    });
    it('should be fill the form with a date , have to show alert and dont allow add the  new date ', () => {
        cy.get('#datetime-local').type('2021-12-10T18:00');
        cy.intercept('POST', '/dates',(req)=>{
          req.reply({body:{...req.body,id:6}});
        }).as('saveDate');
        cy.get('[data-testid="submit"]').click();
        cy.wait('@saveDate');
        cy.get('.sc-AxgMl > div').should(($date=>{
            expect($date).to.have.length(6);
        }));
        cy.scrollTo('top');
    });
    
});