import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Productdescription from '../UI_PageObject/ProductDescriptionPage'
const productdescription = new Productdescription
When('I enter the amount for gift card', () => {
    productdescription.inputAmount()
});

When('I add product to cart', () => {
    productdescription.addToCart()
});

Then('I verify the added product success message', () => {

    productdescription.verifyProductName()
});

Then('I verify the images on product description page', () => {
    productdescription.imageVerification()
});

When('I click on add to cart button', () => {
    productdescription.addToCart()
});

Then('I verify the added product success message', () => {
    productdescription.verifyProductName()
});

When('I click on view cart button', () => {
    productdescription.viewCart()
});