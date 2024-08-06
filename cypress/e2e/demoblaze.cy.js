describe('Demoblaze End-to-End Tests', () => {
    const username = `testuser${Math.floor(Math.random() * 1000) + 1}`;
    const password = 'testpassword';
  
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/');
    });
  
    it('should register a new user', () => {
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').clear().type(username);
      cy.get('#sign-password').should('be.visible').clear().type(password);
      cy.get('#signInModal .btn-primary').click();
      cy.wait(2000);
    });
  
    it('should login with the registered user', () => {
      cy.get('#login2').click();
      cy.get('#loginusername').clear().type(username);
      cy.get('#loginpassword').clear().type(password);
      cy.get('#logInModal .btn-primary').click();
      cy.wait(2000);
      cy.get('#logout2').should('be.visible');
    });
  
    it('should add Samsung Galaxy S6 to the cart', () => {
      cy.contains('Samsung Galaxy S6', { timeout: 10000 }).click();
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
      cy.get('.col-sm-12 > .btn').click();
      cy.on('window:alert', (text) => { 
        expect(text).to.contains('Product added');
      });
    });
});
