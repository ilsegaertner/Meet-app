import { loadFeature, defineFeature } from "jest-cucumber";
import { within, waitFor, render } from "@testing-library/react";
import App from "../App";
import { getEvents } from "../api";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("Event element is collapsed by default.", ({ given, when, then }) => {
    given("the user is browsing events in a city", async () => {
      const AppComponent = render(<App />);
    });

    when("the user views the events page", async () => {
      const AppComponent = render(<App />);
      // const AppDOM = AppComponent.container.firstChild;
      // const EventListDOM = AppDOM.querySelector("#event-list");
      // await waitFor(() => {
      //   const EventListItems = within(EventListDOM).queryAllByRole("listitem");
      // });
    });

    then(
      "the details of a specific event should be hidden by default.",
      async () => {
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const allEvents = await getEvents(); // Fetch the data once before running any test
        const event = allEvents[0];
        const EventComponent = render(<Event event={event} />);
        const hideDetailsButton = EventComponent.queryByText("Hide Details");
        expect(hideDetailsButton).not.toBeInTheDocument();
      }
    );
  });

  test("User can expand event details.", ({ given, when, then }) => {
    given("the user is viewing the eventspage", async () => {
      const AppComponent = render(<App />);
    });

    when("the user clicks on the detail button of an event", async () => {
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const user = userEvent.setup();
        const button = within(EventListDOM).queryByText("Show Details");
        user.click(button);
      });
    });

    then(
      "the event details should be displayed around the button.",
      async () => {
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector("#event-list");

        await waitFor(() => {
          const allEvents = getEvents();
          const EventListItems =
            within(EventListDOM).queryAllByRole("listitem");
          const firstEventListItem = EventListItems[0];
          const button = within(firstEventListItem).queryByText("Show Details");
          userEvent.click(button);
          const details = firstEventListItem.querySelector(".details");
          expect(details).toBeInTheDocument();
        });
      }
    );
  });

  test("User can collapse event details.", ({ given, and, when, then }) => {
    given("the user is viewing the events page", async () => {
      const AppComponent = render(<App />);
    });

    and("some event details are expanded", async () => {
      const allEvents = await getEvents(); // Fetch the data once before running any test
      const event = allEvents[0];
      const EventComponent = render(<Event event={event} />);
      await waitFor(() => {
        const EventDOM = EventComponent.container.firstChild;
        const EventListItems = within(EventDOM).queryAllByRole("listitem");
        const detailsButton = within(EventDOM).queryByText("Show Details");
        const details = EventDOM.querySelector(".details");
        userEvent.click(detailsButton);
        expect(details).toBeInTheDocument();
      });
    });

    when(/^the user clicks on "(.*)" for that event$/, async (arg0) => {
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const user = userEvent.setup();
        const button = within(EventListDOM).queryByText("Show Details");
        user.click(button);
      });
    });

    then("the event details should be collapsed and hidden.", async () => {
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const allEvents = getEvents();
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        const firstEventListItem = EventListItems[0];
        const button = within(firstEventListItem).queryByText("Show Details");
        userEvent.click(button);
        const details = firstEventListItem.querySelector(".details");
        userEvent.click(button);
        expect(details).not.toBeInTheDocument();
      });
    });
  });
});
