Feature: Show and hide event details
  Scenario: Event element is collapsed by default.
    Given the user is browsing events in a city
    When the user views the events page
    Then the details of a specific event should be hidden by default.
  Scenario: User can expand event details.
    Given the user is viewing the eventspage
    When the user clicks on the detail button of an event
    Then the event details should be displayed around the button.
  Scenario: User can collapse event details.
    Given the user is viewing the events page 
    And some event details are expanded
    When the user clicks on "Hide details" for that event
    Then the event details should be collapsed and hidden.
