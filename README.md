### Meet app

## Objective

The objective of this app is a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

<img width="223" alt="Screenshot 1 from app" src="https://github.com/ilsegaertner/Meet-app/blob/main/img/screen1.png"><img width="223" alt="Screenshot 4 from app" src="https://github.com/ilsegaertner/Meet-app/blob/main/img/screen4.png"><img width="223" alt="Screenshot 3 from app" src="https://github.com/ilsegaertner/Meet-app/blob/main/img/screen3.png">

## Context

The idea behind this project lies in creating an app in the context of serverless and PWAs which are both considered to
be the future of web development.

- Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.
- PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt,
  responsive design, and cross-platform compatibility.

## Approach

- TDD: Writing tests before implementing code.
- visual context through graphs to display any type of data and produce a variety of output formats:
  The app will allow users to search for a city and get a list of events hosted in that city. Two charts shows how many events will take place in each location, as well as the popularity of event genres.

To see the hosted App, click <a href="https://ilsegaertner.github.io/Meet-app/" target="_blank">here</a>.

 <!-- [here](https://ilsegaertner.github.io/Meet-app/). -->

<img width="1023" alt="Screenshot 2 from app" src="https://github.com/ilsegaertner/Meet-app/blob/main/img/screen2.png">

## Project requirements and features

Features:

- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

## Technical facts:

- The app is built in React using
  - the TDD technique.
  - the Google Calendar API and OAuth2 authentication flow.
  - serverless functions (AWS lambda) for the authorization server instead of using a traditional server.
- Full compatibility, inclusive of IE11.
- The app displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- The app passes Lighthouse’s PWA checklist.
- Service workers ensure offline functionality
- Users may be able to install the app on desktop and add the app to their home screen on
  mobile.
- Object-Oriented Programming (OOP) for alerts
- The app visualizes the data of events in comparison.
- The app is covered by tests with a coverage rate >= 90%.
- The app is monitored using an online performance monitoring tool.

## User Stories:

### Feature 1: Filter Events By City

###### 1.Scenario: When user hasn’t searched for a specific city, show upcoming events from all cities.

- _Given_ user hasn’t searched for any city. _When_ the user opens the app, _then_ the user should see a list of upcoming events.

###### 2.Scenario: User should see a list of suggestions when they search for a city.

- _Given_ the main page is open. _When_ user starts typing in the city textbox, _then_ the user should receive a list of cities (suggestions) that match what they’ve typed.

###### 3.Scenario: User can select a city from the suggested list.

- _Given_ user was typing “Berlin” in the city textbox AND the list of suggested cities is showing. _When_ the user selects a city (e.g., “Berlin, Germany”) from the list, _then_ their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature 2: Show/Hide Event Details

###### 1.Scenario: Event element is collapsed by default.

- _Given_ the user is browsing events in a city. _When_ the user views the events page, _then_ the details of a specific event should be hidden by default.

###### 2.Scenario: User can expand event details.

- _Given_ the user is viewing the eventspage. _When_ the user clicks on the detail button of an event, _then_ the event details should be displayed around the button.

###### 3.Scenario: User can collapse event details.

- _Given_ the user is viewing the events page and some event details are expanded. _When_ the user clicks on "Hide details" for that event, _then_ the event details should be collapsed and hidden.

### Feature 3: Specify Number of Events

###### 1.Scenario: When user hasn't specified a number, 32 events are shown by default.

- _Given_ the user has not specified a limit in the number of the events shown. _When_ the user browses through the events page, _then_ the page limits the amount of events visible to 32 events.

###### 2.Scenario: User can change the number of events displayed.

- _Given_ the user wants to change the number of events displayed. _When_ the user enters a specific number in a text box, _then_ the number of displayed events gets updated.

### Feature 4: Use the App When Offline

###### 1.Scenario: Show cached data when there's no internet connection.

- _Given_ the user wants to access the app, but has no internet connection. _When_ the user browses through the events page, _then_ he can still access the details of the events that were last cached.

###### 2.Scenario: Show error when user changes search settings (city, number of events).

- _Given_ the user wants to access the app, but has no internet connection. _When_ the user wants to change the search settings, _then_ an error message pops up.

### Feature 5: Add an App Shortcut to the Home Screen

###### 1.Scenario: User can install the meet app as a shortcut on their device home screen.

- _Given_ the user wants to access the app from outside the web. _When_ the user selects to install the app locally, _then_ a shortcut is created on their device home screen.

### Feature 6: Display Charts Visualizing Event Details

###### 1.Scenario: Show a chart with the number of upcoming events in each city.

- _Given_ the user is on the eventpage. _When_ the user scrolls down, _then_ a a chart with the number of upcoming events in each city is visible.

## Usage of serverless functions

#####

My meet app will use serverless functions for the business logic of my backend. As step 1, I will create serverless functions to navigate between the OAuth Server and my app to be able to request the Google OAuth consent modal, as well as the redirection between Google and the app. In the second step, my serverless functions handle the exchange of Authorization code and - if successfully granted by OAuth Provide - the final access Access token that enables the user to use the Google Calendar App. The last step also includes the AWS Lambda functions that communicate the successful returning and rendering of the events to the user in the app.
