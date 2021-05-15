import { it } from "mocha"

describe("test suite for conditional testing", function () {
    it("checking for classes", function () {
        cy.visit("https://pacers.fitted.dev/")
        cy.get('body').then(($btn) => {
            if ($btn.find(".prdctfltr_ft_mens-shoes")) {
                cy.get(".prdctfltr_ft_mens-shoes ").click()
            }
            else {
                console.log("false")
            }
        })
    })
    it("checking for visibility",function(){
         cy.visit("https://pacers.fitted.dev/")
         
    })
})