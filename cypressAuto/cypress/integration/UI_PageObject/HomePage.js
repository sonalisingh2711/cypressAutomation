const _item="p.woocommerce-loop-product__title a"
const _checkboxes="div.prdctfltr_checkboxes label span"
//import fixtures from '../Ui_data/UI_data.json'
class Home{
    selectOption(){
       return cy.get(_checkboxes)
        
    }
    getItem(){
        cy.wait(6000)
        cy.get(_item).eq(0).invoke('text').as('ele')
        cy.get(_item).eq(0).click()
    }

     getproductname(){
return cy.get('@ele')
     }
    }
export default Home