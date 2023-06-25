import SearchFilm from './SearchFilm.vue'

describe('<SearchFilm />', () => {
  beforeEach(() => {
    cy.mount(SearchFilm)
  })

  it('should be able to type', () => {
    cy.get('input#search')
      .should('be.visible')

    // Typing test
    cy.get('input#search')
      .as('searchInput')
      .type('castle')

    cy.get('@searchInput')
      .should('have.value', 'castle')

    // Input Clearing Test
    cy.get('@searchInput')
      .clear()

    cy.get('@searchInput')
      .should('have.value', '')
  })
})