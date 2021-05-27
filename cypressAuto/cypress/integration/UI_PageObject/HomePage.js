import fixtures from '../../fixtures/constantValues.json'
const _item="p.woocommerce-loop-product__title a"
const _checkboxes="div.prdctfltr_checkboxes label span"
const _image='div.box-image a img'

class Home{
    selectOption(value){
       return cy.get(_checkboxes).contains(value).click()
    }

    getItem(){
        cy.wait(6000)
        cy.get(_item).eq(0).invoke('text').as('name')
        cy.get(_item).eq(0).click()
    }

     getproductname(){
        return cy.get('@name')
     }

     imageVerification(){
         cy.get(_image).invoke("attr","src").should("contains",fixtures.image_text)
     }
    }

    export default Home