Feature: test payment page functionality

  # Scenario:User enter credit cards and make payment successfully

  #   Given User is on payment page
  #   When User enter user email as "aa@a.com"
  #   When User enter amount as 40
  #   Then User enter credit card details
  #   And User click payment button
  #   #Then Verify payment result page is seen  (test ortamı SSO gecisi sonrası stepler guncellenecek.)
  #   #Then This is a dummy step to fail


  Scenario: User enter invalid values and get input error

    Given User is on payment page
    When User enter user email as "aa@com"
    When User enter amount as 40
    Then Verify "//span[.='Please type a valid email address']" is visible
    When User enter user email as "aa@a.comx"
    Then User enter credit card details
    And User click payment button
    Then Verify "//input[@id='profile-name-input']//following::span[1]" is visible and text includes "Please type a value"
    Then Verify "//input[@id='profile-surname-input']//following::span[1]" is visible and text includes "Please type a value"
    When Clear "//input[@id='amount-input']" input
    Then Verify "//input[@id='amount-input']//following::span[1]" is visible and text includes "Please type a value"
    When User enter amount as 0
    Then Verify "//input[@id='amount-input']//following::span[1]" is visible and text includes "Please enter a number greater than 0"
    When Clear "//input[@id='amount-input']" input
    When User enter amount as 74
    #When User enter phone as "23"
    When User enter name and surname randomly
    Then Verify "Please type a value" text value is not visible


  Scenario: When User click garanti pay button without user details should be able to see error msg
    Given User is on payment page
    When User click garanti pay button
    And User click payment button garanti pay
    Then Verify "//div[@class='simprakit-dialog-title danger']" is visible






