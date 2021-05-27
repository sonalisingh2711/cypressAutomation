Feature:check product images and verify the success message
Scenario Outline: Add Gift Card to cart, and verify on Cart page on <website>
    Given I am at '<website>' website
    When I select gift Card option
    When I select the product in home page
    When I enter the amount for gift card
    When I add product to cart
    Then I verify the added product success message
    Examples:
             |website|
            |https://shoeshoprunning.fitted.dev/|
 @focus
Scenario Outline: Verify product images on all the pages on <website>
        Given I am at '<website>' website
        When I select mens shoes category
        When I select the product in home page
        Then I verify the images on product description page
        When I click on add to cart button
        Then I verify the added product success message
        When I click on view cart button
        Then I verify product image on cart page
    Examples:
             |website|
             |https://shoeshoprunning.fitted.dev/|

    
    
    