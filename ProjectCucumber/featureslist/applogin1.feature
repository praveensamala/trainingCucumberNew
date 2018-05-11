Feature: login feature of the application

  Scenario Outline: Should be able to login to facebook application with valid user credentials
    Given that the facebook web application is available
    When I try to login using "<username>" and "<password>"
    Then I should be able to login to the application

    Examples: 
      | username               | password  |
      | gamecheck280@gmail.com | system123 |
#      | gamecheck380@gmail.com | system123 |
#      | gamecheck480@gmail.com | system123 |
