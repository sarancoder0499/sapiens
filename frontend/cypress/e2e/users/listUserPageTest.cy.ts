describe('Button click Navigation test', () => {
  beforeEach(() => {
    // Visit the initial page where the button is located
    cy.visit('/users');
  });

  it('should navigate to the Add User Page when button is clicked', () => {
    const buttonSelector = '[data-testid="cy-add-users"]';
    const expectedUrl = '/users/add';
    cy.get(buttonSelector).should('be.visible').and('not.be.disabled').click();
    cy.url().should('include',expectedUrl);
    cy.get('h1').should('contain.text','Add New User');
  })
})