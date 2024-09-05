describe('Button click Navigation test', () => {
  beforeEach(() => {
    // Visit the initial page where the button is located
    cy.visit('/');
  });

  it('should navigate to the List User Page when button is clicked', () => {
    const buttonSelector = '[data-testid="cy-view-users"]';
    const expectedUrl = '/users';
    cy.get(buttonSelector).should('be.visible').and('not.be.disabled').click();
    cy.url().should('include',expectedUrl);
    cy.get('h1').should('contain.text','Total Users');
  })
})