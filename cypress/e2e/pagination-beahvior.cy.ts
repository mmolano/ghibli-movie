describe('Pagination usage', () => {
  it('Usage of pagination buttons and visibility -> no films are found', () => {
    cy.visit('http://localhost:3000')

    cy.get('#cypress-pagination', { timeout: 2000 }).should('be.visible')
    cy.get('#cypress-prev-button').should('be.disabled')
    cy.get('#cypress-next-button').click()

    cy.get('input#search')
      .type('castle in the sky')
    
    cy.get('input#search')
      .should('have.value', 'castle in the sky')
    
    cy.get('#cypress-next-button').should('be.disabled')
    cy.get('#cypress-prev-button').should('be.disabled')

    cy.get('input#search')
      .clear()
    
    cy.get('#cypress-prev-button').should('be.disabled')
  })
})