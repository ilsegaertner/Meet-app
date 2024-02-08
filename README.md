### Meet app: A Serverless Progressive Web Application with React

## Objective

Meet App is a serverless, progressive web application (PWA) developed using React with a focus on test-driven development (TDD) techniques. The application uses the Google Calendar API to fetch upcoming events.

<img width="223" alt="Screenshot 1 from app" src="https://github.com/ilsegaertner/Meet-app/blob/main/img/screen1.png"><img width="223" alt="Screenshot 4 from app" src="https://github.com/ilsegaertner/Meet-app/blob/main/img/screen4.png"><img width="223" alt="Screenshot 3 from app" src="https://github.com/ilsegaertner/Meet-app/blob/main/img/screen3.png">

## Context

The idea behind this project lies in creating an app along serverless and PWA paradigms.

- Serverless: No backend maintenance, ensures scalability, always available, no cost for idle time.
- PWAs: Offers instant loading, offline support, push notifications, “add to home screen” prompt,responsive design, and cross-platform compatibility.

## Approach

- Test-Driven Development TDD: Prioritizing test-writing before code implementation to ensure robustness and reliability.
- Visual Context Through Graphs: Utilizing graphical representations to present various data and output formats. The app allows users to search for events in a city and visualize event data through intuitive charts

To access the hosted App, click <a href="https://ilsegaertner.github.io/Meet-app/" target="_blank">here</a>.

 <!-- [here](https://ilsegaertner.github.io/Meet-app/). -->

<img width="1023" alt="Screenshot 2 from app" src="https://github.com/ilsegaertner/Meet-app/blob/main/img/screen2.png">

## Project requirements and features

Features:

- Filter Events by City: Users can filter events based on city.
- Show/Hide Event Details: Event details can be expanded or collapsed.
- Specify Number of Events: Users can customize the number of events displayed.
- Use the App When Offline: Cached data is accessible without an internet connection.
- Add an App Shortcut to the Home Screen: Installable as a shortcut on device home screens.
- Display Charts Visualizing Event Details: Visual representation of event data, including the number of upcoming events in each city.

## Technical facts:

- Built with React: Leveraging TDD principles, OAuth2 authentication and the Google Calendar API.
- Serverless Functions (AWS Lambda): Empowering authorization server functionality without traditional backend infrastructure.
- Full Compatibility: Ensuring compatibility with IE11 and responsiveness across all screen sizes.
- Passes Lighthouse's PWA Checklist: Compliant with PWA standards for optimal user experience.
- Offline Functionality: Service workers enable offline access.
- User Installation: Users can add the app to their home screen on mobile and desktop devices.
- Object-Oriented Programming (OOP): Utilized for handling alerts and enhancing user interactions.
- Test Coverage: Comprehensive test coverage with a rate of >= 90%.
- Performance Monitoring: Monitored using online performance monitoring tools for continuous optimization.

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

In the Meet app, serverless functions play a pivotal role in handling the backend business logic. Initially, I developed serverless functions to facilitate navigation between the OAuth Server and the app. This enabled the app to request the Google OAuth consent modal and manage the redirection between Google and the app. In subsequent stages, these serverless functions will be responsible for managing the exchange of authorization codes and, upon successful authentication by the OAuth Provider, obtaining the final access token necessary for users to utilize the Google Calendar App. Additionally, AWS Lambda functions will be employed to ensure the successful retrieval and rendering of events to users within the app.
