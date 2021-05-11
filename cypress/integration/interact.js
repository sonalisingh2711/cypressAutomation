
describe("interacting with elements",function(){
    it("adding product in cart",function(){
         cy.visit("https://shoeshoprunning.fitted.dev/")
         cy.get('.prdctfltr_ft_mens-shoes').click() 
         cy.wait(9000)
         cy.contains('Diadora Mythos Fast Racer 2').click()
         cy.get('.single_add_to_cart_button').click()
     })
    })