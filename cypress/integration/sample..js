
describe("my first test suite",function(){
    before("fixtures",function(){
        cy.fixture('example').then(function(data){
              this.data=data
        })
    })
    it("nothing much",function(){
        cy.visit("https://example.cypress.io")
      //  cy.pause()
        cy.contains('type').click()
        
        cy.get('.action-email')
        .type(this.data.email)
        .should('have.value', this.data.email)
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