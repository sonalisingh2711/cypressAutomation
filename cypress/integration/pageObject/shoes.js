class Shoes{
  colorOfShoes(value){
    const color=cy.get("#pa_color")
    color.select(value)
    }
    sizeOfShoes(value){
        const size=cy.get("#pa_size")
        size.select(value)
    }
    widthOfShoes(value){
        const width=cy.get("#pa_width")
        width.select(value)
    }
    addCart(){
const cart=cy.get("button.single_add_to_cart_button")
cart.click()
    }
}
export default Shoes