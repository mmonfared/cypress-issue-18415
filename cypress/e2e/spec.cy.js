/// <reference types='cypress' />

it('Should validate cypress.io title', () => {
    cy.visit("https://cypress.io")
    cy.title().should('include', 'JavaScript Web Testing')
})
