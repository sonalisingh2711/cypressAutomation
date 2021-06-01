import constantValues from '../../fixtures/constantValues.json'
import Home from './HomePage'
const _verificationMessage = 'i+span'
const _viewCartButton = '//a//*[text()="View Cart"]'
const _giftCardAmount = "input.input-text.amount"
const _addToCart = "button.single_add_to_cart_button"
const _productImage = "div.woocommerce-product-gallery__image img"

class ProductDescription {
  static giftCardAmount() {
    cy.get(_giftCardAmount).type(constantValues.amount).type('{enter}')
  }

  static addToCart() {
    cy.get(_addToCart).click()
  }

  static imageVerification() {
    cy.get(_productImage).invoke('attr', "src").should("contains", constantValues.image_Url)
  }

  static verifySuccessProductMessage() {
    Home.returnProductName().then((name) => {
      cy.get(_verificationMessage).should('contain', name)
    })
  }

  static viewCart() {
    cy.xpath(_viewCartButton).click()
  }
}

export default ProductDescription