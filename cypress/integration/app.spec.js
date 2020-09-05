describe('App', () => {
  it('successfully loads', () => {
    cy.visit('/');
  })

  it('displays content', () => {
    cy.get('#MainContent').should("be.visible");
  })
})
