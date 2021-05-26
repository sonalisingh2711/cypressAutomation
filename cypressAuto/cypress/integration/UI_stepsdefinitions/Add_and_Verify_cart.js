import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Home from '../UI_PageObject/HomePage'
import Productdescription from '../UI_PageObject/Productdescription'
import ProductFunction from '../UI_PageObject/ProductFunction'
const home= new Home
const productdescription=new Productdescription
const productfunction=new ProductFunction
Given('I am at {string} website',(website)=>{
cy.visit(website)
})
When('I select gift Card option',()=>{
home.selectOption()
})
When('I select the product in home page',()=>{
    home.getItem()
})
When('I enter the amount for gift card',()=>{
   productdescription.inputAmount() 
})
When('I add product to cart',()=>{
    productdescription.addToCart()
})
Then('I verify the added product success message',()=>{

    productfunction.verifyProduct()
})
   