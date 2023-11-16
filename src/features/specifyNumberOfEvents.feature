Feature: Specify Number of Events
  Scenario: When user hasn't specified a number, 32 events are shown by default.
    Given the user has not specified a limit in the number of events shown
    When the user browses through the events page
    Then the page limits the amount of events visible to 32 events
  Scenario: User can change the number of events displayed.
    Given the user wants to change the number of events displayed
    When the user enters a specific number in a text box
    Then the number of displayed events gets updated
