import Home from './pageObject/home'
import Shoes from './pageObject/shoes'
describe("page object model",function(){
     it("searching women shoes",function(){
         var home=new Home
         var shoes_s=new Shoes
         home.visitLink();
         home.Shoes(".prdctfltr_ft_mens-shoes");
         cy.wait(9000)
         home.selectShoes('Diadora Mythos Fast Racer 2')
          cy.url().should('include','/product')
//shoes_s.colorOfShoes("Yellow Fluo/Pink Fluo")
       shoes_s.sizeOfShoes('8')
         //shoes_s.widthOfShoes('D');
        shoes_s.addCart();
        
         //navigate
       //  cy.go('back')
         cy.screenshot('capturing screenshot')
        })
})