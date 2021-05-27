import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Home from '../UI_PageObject/HomePage'
import fixtures from '../../fixtures/constantValues.json'
const home = new Home
When('I select gift Card option', () => {
    home.selectOption(fixtures.checkboxName)
});

When('I select the product in home page', () => {
    home.getItem()
});

Then('I verify the product images on home page', () => {
    home.imageVerification()
});

When('I select mens shoes category', () => {
    home.selectOption(fixtures.checkboxName2)
});

When('I select the product in home page', () => {
    home.getItem()
});

