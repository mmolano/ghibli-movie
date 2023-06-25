describe('Search and load', () => {
  it('Visits localhost and searches for "castle", then clicks on the first card and go back main page', () => {
    cy.visit('http://localhost:3000')

    cy.get('section .aspect-w-3', { timeout: 2000 }).should('be.visible')

    cy.get('input#search')
      .type('cAstleintheSky')

    cy.get('input#search')
      .should('have.value', 'cAstleintheSky')
    
    cy.get('section .aspect-w-3', { timeout: 2000 }).should('be.visible')

    cy.get('h2.cypress-card-title').should('have.contain', 'Castle in the Sky')

    cy.get('section .aspect-w-3').first().click()

    cy.get('h2.cypress-card-title').should('have.contain', 'Castle in the Sky')

    cy.get('#cypress-return-button').first().click()
  })
})