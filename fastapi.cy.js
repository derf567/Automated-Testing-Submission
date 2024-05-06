// cypress/integration/login.spec.js
describe('Login Page', () => {
  beforeEach(() => {
    // Set the viewport to 1920x1080
    cy.viewport(1920, 1080);

    cy.visit('https://micah-orig-marinay.netlify.app/login');
  });

  it('should display error message when clicking login without filling in any fields', () => {
    
    cy.get('#login-button').click();
   
    cy.contains('Please fill in all fields').should('be.visible');
  });
  it('should display error message after 5 incorrect attempts', () => {
    
    for (let i = 0; i < 5; i++) {
   
      cy.get('.inside-box').clear();
      cy.get('.inside-box').type('invalidusername');
      cy.get('.inside-password').clear();
      cy.get('.inside-password').find('input').type('invalidpassword'); 
      
      cy.get('#login-button').click();
      
      cy.contains('Invalid ID or password').should('be.visible');
    }

    cy.get('.inside-box').clear();
    cy.get('.inside-box').type('invalidusername'); 
    cy.get('.inside-password').clear();
    cy.get('.inside-password').find('input').type('invalidpassword'); 
    cy.get('#login-button').click();
 
    cy.contains('Maximum attempts reached. Please try again later.').should('be.visible');
    
  });
});
