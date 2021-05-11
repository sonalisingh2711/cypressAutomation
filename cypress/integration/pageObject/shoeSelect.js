class Shoeselection {
    selectShoes(value) {
        const clickShoe = cy.contains(value)
        clickShoe.click()
    }
}
export default Shoeselection