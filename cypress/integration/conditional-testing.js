describe("test suite for conditional testing", function () {
    it("checking checkboxes", function () {
        cy.visit("https://pacers.fitted.dev/").debug()
        cy.get('body').then(($btn) => {
            if ($btn.find(".prdctfltr_ft_mens-shoes")) {
                cy.get(".prdctfltr_ft_mens-shoes ").click()
            }
            else {
                console.log("false")
            }
        })
    })
})