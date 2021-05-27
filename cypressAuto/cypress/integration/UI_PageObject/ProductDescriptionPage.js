import fixtures from '../../fixtures/constantValues.json'
import Home from './HomePage'
const _verificationmessage = '//div[@style="text-align:center;vertical-align: middle"] //i/following-sibling::span'
const _viewcarbutton = '//a//*[text()="View Cart"]'
const _inputamount = "input.input-text.amount"
const _addtocart = "button.single_add_to_cart_button"
const _image = "div.woocommerce-product-gallery__image img"
const home = new Home

class Productdescription {
    inputAmount() {
        cy.get(_inputamount).type(fixtures.amount).type('{enter}')
    }

    addToCart() {
        cy.get(_addtocart).click()
    }

    imageVerification() {
        cy.get(_image).invoke('attr', "src").should("contains", fixtures.image_text)
    }

    verifyProductName() {
        home.getproductname().then((name) => {
        cy.xpath(_verificationmessage).should('contain',name)
        })
      }

      viewCart() {
        cy.xpath(_viewcarbutton).click()
      }
    }

    export default Productdescription