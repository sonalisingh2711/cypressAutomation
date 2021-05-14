describe("use assertion", function () {
    it("css selector", function () {
        cy.visit("https://www.w3schools.com/cssref/css_selectors.asp")
        cy.pause()
        cy.get("#leftmenuinnerinner >a").each($a => {
            expect($a).to.have.attr('href')})

    })
})