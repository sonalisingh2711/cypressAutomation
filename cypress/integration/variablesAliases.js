describe("implementing variable anad aliases",function(){
    beforeEach(function(){
        cy.visit('https://example.cypress.io/commands/aliasing')
    })
    it("testing buttons",function(){
        cy.get('.as-table').find('tbody>tr')
      .first().find('td').first()
      .find('button').as('firstBtn')
      cy.get('@firstBtn').click()
    })
})
