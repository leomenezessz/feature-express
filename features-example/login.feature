Feature: Login

Scenario: Valid Login
Given iam in login screen 
When insert a valid user
Then show welcome user name!

Scenario: Login with a invalid user
Given iam in login screen
When insert a invalid user
Then show login or password invalid