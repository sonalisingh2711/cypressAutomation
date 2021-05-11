import Home from './pageObject/home'
import Shoeselection from './pageObject/shoeSelect'
describe("page object model",function(){
     it("searching women shoes",function(){
         var home=new Home
         var shoe_s=new Shoeselection
         home.visitLink();
         home.Shoes(".prdctfltr_ft_mens-shoes");
         cy.wait(9000)
         shoe_s.selectShoes('ASICS GEL-Kayano 27')
          cy.url().should('include','/product')
         //navigate
         cy.go('back')
         cy.screenshot('capturing screenshot')
        })

})