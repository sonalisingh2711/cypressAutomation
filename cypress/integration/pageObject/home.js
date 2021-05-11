
class Home {
    visitLink() {
        cy.visit('https://shoeshoprunning.fitted.dev/')
    }
    Shoes(value) {
        const find = cy.get(value)
        find.click()
    }
    selectShoes(value) {
        const clickShoe = cy.contains(value)
        clickShoe.click()
    }
}
export default Home