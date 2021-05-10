
class Home {
    visitLink() {
        cy.visit('https://shoeshoprunning.fitted.dev/')
    }
    Shoes(value) {
        const find = cy.get('input[type=checkbox]')
        find.check(value,{ force: true })
    }
}
export default Home