describe("use assertion", function () {
    it(".should assertion", function () {
        cy.visit("https://shoeshoprunning.fitted.dev/")
        cy.get(".woocommerce-store-notice__dismiss-link").should('have.text', 'Dismiss').should('contain', "Dismiss")
        cy.get(".prdctfltr_sub").invoke(show).should("be.visible")
        cy.get('.woocommerce-loop-product__title>a').should("have.attr", "href")
        
    })
        
})