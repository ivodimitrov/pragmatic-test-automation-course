Feature: Customer Transfer's Fund
       As a customer,
       I want to transfer funds 
       so that I can send money to my friends and family
 
Scenario: Valid Payee
       Given the user is on Fund Transfer Page
       When he enters "Jim" as payee name
      And he enters "100" as amount
       And he Submits request for Fund Transfer
       Then ensure the fund transfer is complete with "$100 transferred successfully to Jim!!" message
 
Scenario: Invalid Payee
      Given the user is on Fund Transfer Page
      When he enters "John" as payee name 
      And he enters "100" as amount
      And he Submits request for Fund Transfer
      Then ensure a transaction failure message "Transfer failed!! 'John' is not approved. Please contact your branch" is displayed
 
Scenario: Account is overdrawn past the overdraft limit
      Given the user is on Fund Transfer Page
      When he enters "Tim" as payee name
      And he enters "1000000" as amount
      And he Submits request for Fund Transfer
      Then ensure a transaction failure message "Transfer failed!! account cannot be overdrawn" is displayed

Scenario: Neshto drugo ime na test case-a
	Given the user is on Fund Transfer Page
	When he enters "Tim" as payee name
	And he enters "2001" as amount
	And he Submits request for Fund Transfer
    Then ensure a transaction failure message "Transfer failed!! account cannot be overdrawn" is displayed

Scenario Outline: datadriven negative
	  Given the user is on Fund Transfer Page
      When he enters "<payee>" as payee name
      And he enters "<amount>" as amount
      And he Submits request for Fund Transfer
      Then ensure a transaction failure message "<expected_failure_message>" is displayed
	Examples:
	 	|  payee | amount | expected_failure_message |
	 	| John   | 100000 | Transfer failed!! 'John' is not approved. Please contact your branch |
	 	| Tim    | 2001   | Transfer failed!! account cannot be overdrawn |
      
