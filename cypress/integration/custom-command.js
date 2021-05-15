describe('Cypress Custom Commands', function() {
    before(function(){
    cy.fixture('example1').then(function(data)
    {
        this.data=data ;
    })
    })
    it('Cypress Test Case', function() {
    cy.visit('https://shop.demoqa.com/my-account/');
    cy.get('#reg_username').type(this.data.Username);
    cy.get('#reg_email').type(this.data.Email);
    cy.get('#reg_password').type(this.data.NewPassword);
    cy.get('.woocommerce-Button').click();
    cy.get('#username').should('have.value',this.data.Username);
    
    this.data.productName.forEach(function(element){
        cy.selectProduct(element[0],element[1],element[2]);
   })
})
})