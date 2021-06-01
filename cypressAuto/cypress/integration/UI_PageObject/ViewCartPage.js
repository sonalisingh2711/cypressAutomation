import constantValues from '../../fixtures/constantValues.json'
const _productImage = "td.product-thumbnail img"
class ViewCart {
    static imageVerification() {
        cy.get(_productImage).invoke('attr', 'src').should('contains',constantValues.image_Url)
    }
}
export default ViewCart