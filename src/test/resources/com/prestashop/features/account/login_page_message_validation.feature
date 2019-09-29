Feature: Error messages on the login page 
@ahmed 
Scenario: Invalid email 
	Given the user is on the login page 
	When the user tries to register an invalid email 
	Then the system should display error message "Invalid email address." 
@ahmed 
Scenario: blank email 
	Given the user is on the login page 
	When the user tries to register blank email 
	Then the system should display error message "Invalid email address." 
	
	
@ahmed 
Scenario Outline: multiple logins 
	Given the user is on the login page 
	When the user enters "<username>" and "<password>" 
	And the user clicks on submit button 
	Then the user should be logged in 
	
	Examples: 
		|username |password |
		|kamal@fr.com| lalala|
		|ahmed@trk.com| blabla| 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		#Scenario: existing email 
		#	Given there is an existing user 
		#	And the user is on the login page 
		#	When the user tries to register the same email 
		#	Then the system should display error message "An account using this email address has already been registered. Please enter a valid password or request a new one." 
		#	
		
	