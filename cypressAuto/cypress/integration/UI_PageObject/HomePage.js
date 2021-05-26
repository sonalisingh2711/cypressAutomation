const _item="p.woocommerce-loop-product__title a"
const _checkboxes="div.prdctfltr_checkboxes label span"
import fixtures from '../Ui_data/UI_data.json'
class Home{
    selectOption(){
        cy.get(_checkboxes).contains(fixtures.checkboxName).click()
        cy.wait(6000)
    }
    getItem(){
        cy.get(_item).eq(0).invoke('text').as('ele')
        cy.get(_item).eq(0).click()
    }

     getproductname(){
return cy.get('@ele')
     }
    }
export default Home