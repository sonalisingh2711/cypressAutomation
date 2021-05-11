
class Home {
    visitLink() {
        cy.visit('https://shoeshoprunning.fitted.dev/')
    }
    Shoes(value) {
        const find = cy.get(value)
        find.click()
    }
}
export default Home