describe('My First Test', () => {

  beforeEach(()=>{
    cy.visit('/',);
    cy.fixture('date').then((date)=>this.date=date);
  });

    it('check the principal title', () => {
      cy.get('h1').should('have.text','Bienvenido a PetsApp');
    });

    it('go to the pages citas ', () => {
      cy.get('[href="/citas"]').click();
      cy.get('h2').contains('Gestiona tus citas');
      cy.get('h2').contains('Consulta tus citas');
    });

    it('fill the form',()=>{
      cy.get('[href="/citas"]').click();
      cy.get('[name="nombrePropietario"]').type(this.date.nombrePropietario);
      cy.get('[name="nombreMascota"]').type(this.date.nombreMascota);
      cy.get('[name="tipoServicio"]').select(this.date.tipoServicio);
      cy.get('[name="fechaHora"]').type(this.date.fechaHora);
      cy.get('[name="observaciones"]').type(this.date.observaciones);      
      cy.scrollTo('top');
    });

    it('funciton ', () => {
      cy.get('[href="/citas"]').click();
      cy.FillForm(this.date);      
    });
  });