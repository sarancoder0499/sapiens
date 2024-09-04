describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-testid="cy-view-users"]').should('exist').should('have.text',"View Users")
  })
})