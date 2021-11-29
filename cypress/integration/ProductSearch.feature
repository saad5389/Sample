Feature: Product Search

    Search any Product

    Scenario: Search the product 'Dell'
        Given Navigate to iPrice Malaysia
        And I do the assertion on Homepage
        When I do the search for Dell
        Then I do the verification on the searched page contains Dell
