
import Home from './HomePage'
const _verificationmessage='//div[@style="text-align:center;vertical-align: middle"] //i/following-sibling::span'
const home=new Home
class ProductFunction{
    verifyProduct(){
home.getproductname().then((ele)=>{
       cy.xpath(_verificationmessage).should('contain',ele)
    
     }) }
}
export default ProductFunction