import Home from './pageObject/home'
describe("page object model",function(){
     it("searching women shoes",function(){
         var home=new Home
         home.visitLink();
         home.Shoes(".prdctfltr_ft_mens-shoes");
         cy.wait(9000)
         home.selectShoes('ASICS GEL-Kayano 27')
          cy.url().should('include','/product')
         //navigate
         cy.go('back')
         cy.screenshot('capturing screenshot')
        })

})