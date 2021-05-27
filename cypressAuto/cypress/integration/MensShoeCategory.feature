Feature:Verify product image and mens shoe category
    Scenario Outline: Verify product images on all the pages on <website>
        Given I am at '<website>' website
        Then I verify the product images on home page
        When I select mens shoes category
        When I select the product in home page
        Then I verify the images on product description page
        When I click on add to cart button
        Then I verify the added product success message
        When I click on view cart button
        Then I verify product image on cart page
        Examples:
            | website                             |
            | https://shoeshoprunning.fitted.dev/ |



