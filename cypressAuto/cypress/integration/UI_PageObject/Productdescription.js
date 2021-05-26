import fixtures from '../Ui_data/UI_data.json'
const _inputamount="input.input-text.amount"
const _addtocart="button.single_add_to_cart_button"
class Productdescription{
    inputAmount(){
     cy.get(_inputamount).type(fixtures.amount).type('{enter}')
 }
 addToCart(){
cy.get(_addtocart).click()
 }
}
export default Productdescription