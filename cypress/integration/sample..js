// sample..js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("my first test suite",function(){
    it("nothing much",function(){
        cy.visit("https://example.cypress.io")
      //  cy.pause()
        cy.contains('type').click()
        
        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
    it("interacting Dom elements",function(){
        cy.visit("https://example.cypress.io")
        cy.contains('type').click()
        cy.get('.action-email')
        .type('fake@email.com').clear()
        .type("sonali@gmail.com")
    
    })
    it("select element",function(){
        cy.visit("https://example.cypress.io")
        cy.get('.dropdown-toggle').click()
        cy.contains('contains').click()
        .get('#query-btn').trigger('mouseover') 
    })

})