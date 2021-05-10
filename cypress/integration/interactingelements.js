import Home from './pageObject/home'
import Shoeselection from './pageObject/shoeSelect'
describe("page object model",function(){
     it("searching women shoes",function(){
         var home=new Home
         var shoe_s=new Shoeselection
         home.visitLink();
         home.Shoes('mens-shoes');
         shoe_s.selectShoes('ASICS GEL-Kayano 27')
        })

})