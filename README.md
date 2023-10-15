### Meet app

## Objective

The objective of this app is a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

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
- The app works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
- The app displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- The app passes Lighthouse’s PWA checklist.
- The app works offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on
  mobile.
- The app implements an alert system using an OOP approach to show information to the
  user.
- The app makes use of data visualization.
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

###### 1.Scenario: An event element is collapsed by default.

- _Given_ the user is browsing through the events of a city. _When_ the user tries to access the details of an event of a city,_then_ the information inside the button/link is toggling, showing or hiding additional information about the event, depending on its initial state (expanded/collapsed).

###### 2.Scenario: User can expand an event to see details.

- _Given_ the user tries to get information on a event
- _When_ the user clicks on the event
- _Then_ the details of the events are expanded

###### 3.Scenario: User can collapse an event to hide details.

- _Given_
- _When_
- _Then_
