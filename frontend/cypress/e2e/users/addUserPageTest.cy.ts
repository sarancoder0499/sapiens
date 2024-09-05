describe('Error display test', () => {
  beforeEach(() => {
    // Visit the initial page where the button is located
    cy.visit('/users/add');
  });

  it('should throw error message if form submitted without provide input', () => { 
    const buttonSelector = '[data-testid="cy-add-user-button"]';
    cy.get(buttonSelector).should('be.visible').and('not.be.disabled').click();
    cy.get('body').should('contain.text', 'First name is required');
    cy.get('body').should('contain.text', 'Last name is required');
    cy.get('body').should('contain.text', 'Invalid email address');
  })
})

describe('User creation test', () => {
    beforeEach(() => {
      // Visit the initial page where the button is located
      cy.visit('/users/add');
    });
  
    it('should show User created toast', () => { 
        const inputFirstNameValue = 'firstname';
        const inputLastNameValue = 'lastname';
        const inputEmailIdValue = 'emailid@gmail.com';
        const inputFirstNameSelector = '[data-testid="cy-add-user-firstname"]';
        const inputLastNameSelector = '[data-testid="cy-add-user-lastname"]';
        const inputEmailIdSelector = '[data-testid="cy-add-user-emailid"]';      
        const buttonSelector = '[data-testid="cy-add-user-button"]';
      cy.get(inputFirstNameSelector).should('be.visible').and('not.be.disabled').type(inputFirstNameValue).should('have.value',inputFirstNameValue)  
      cy.get(inputLastNameSelector).should('be.visible').and('not.be.disabled').type(inputLastNameValue).should('have.value',inputLastNameValue)  
      cy.get(inputEmailIdSelector).should('be.visible').and('not.be.disabled').type(inputEmailIdValue).should('have.value',inputEmailIdValue)  
      cy.get(buttonSelector).should('be.visible').and('not.be.disabled').click();
      cy.get('body').should('contain.text', 'User Created');
    })
  })


  describe('Button click Navigation test', () => {
    beforeEach(() => {
      // Visit the initial page where the button is located
      cy.visit('/users/add');
    });
  
    it('should navigate to the List User Page when button is clicked', () => {
      const buttonSelector = '[data-testid="cy-view-users"]';
      const expectedUrl = '/users';
      cy.get(buttonSelector).should('be.visible').and('not.be.disabled').click();
      cy.url().should('include',expectedUrl);
      cy.get('h1').should('contain.text','Total Users');
    })
  })