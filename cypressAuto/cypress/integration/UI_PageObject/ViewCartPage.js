import fixtures from'../../fixtures/constantValues.json'
const _image="td.product-thumbnail img"
class ViewCart{
    imageVerification(){
        cy.get(_image).invoke('attr','src').should('contains',fixtures.image_text)
    }
}
export default ViewCart