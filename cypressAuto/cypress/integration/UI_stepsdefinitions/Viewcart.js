import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ViewCart from '../UI_PageObject/ViewCartPage'
const viewcart = new ViewCart
Then('I verify product image on cart page', () => {
    viewcart.imageVerification()
});
