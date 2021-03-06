describe('Without user afterEach', () => {
  beforeEach(function openUrl () {
    cy.visit('/')
  })

  // this test fails on purpose
  it('finds aliens 2', () => {
    cy.contains('a', 'videos')
      .click()
      .wait(100)

    cy.url()
      .should('contain', 'videos')

    cy.contains('Aliens')
      .should('be.visible')
  })
})
