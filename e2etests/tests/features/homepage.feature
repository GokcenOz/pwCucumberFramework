Feature: test home page functionality

  Scenario: to test home page
    Given User is on payment page
    When User enter user email
    When User enter amount
    Then User enter credit card details
    And User click payment button
