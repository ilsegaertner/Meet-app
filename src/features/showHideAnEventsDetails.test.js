import { loadFeature, defineFeature } from "jest-cucumber";
import { within, waitFor, render } from "@testing-library/react";
import App from "../App";
import { getEvents } from "../api";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppComponent;
  let AppDOM;
  let EventListDOM;
  beforeEach(async () => {
    AppComponent = render(<App />);
    AppDOM = AppComponent.container.firstChild;
    EventListDOM = AppDOM.querySelector("#event-list");
  });

  test("Event element is collapsed by default.", ({ given, when, then }) => {
    // let AppComponent;
    // let AppDOM;

    given("the user is browsing events in a city", async () => {
      // AppComponent = render(<App />);
      // AppDOM = AppComponent.container.firstChild;
      // const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
      });
    });

    when("the user views the events page", async () => {
      // AppComponent = render(<App />);
      // AppDOM = AppComponent.container.firstChild;
      // const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems).toHaveLength(32);
      });
    });

    then(
      "the details of a specific event should be hidden by default.",
      async () => {
        // AppComponent = render(<App />);
        // AppDOM = AppComponent.container.firstChild;
        let EventComponent;
        let allEvents;
        let event;
        allEvents = await getEvents(); // Fetch the data once before running any test
        event = allEvents[0];
        EventComponent = render(<Event event={event} />);
        const hideDetailsButton = EventComponent.queryByText("Hide Details");
        expect(hideDetailsButton).not.toBeInTheDocument();
      }
    );
  });

  test("User can expand event details.", ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let EventComponent;
    given("the user is viewing the eventspage", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems).toHaveLength(32);
      });
    });

    when("the user clicks on the detail button of an event", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
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
        AppComponent = render(<App />);
        AppDOM = AppComponent.container.firstChild;

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
    let AppComponent;
    let AppDOM;
    let event;
    let allEvents;
    let EventComponent;
    let EventListDOM;

    given("the user is viewing the events page", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
      allEvents = await getEvents();
    });

    and("some event details are expanded", async () => {
      allEvents = await getEvents(); // Fetch the data once before running any test
      event = allEvents[0];
      EventComponent = render(<Event event={event} />);
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
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const user = userEvent.setup();
        const button = within(EventListDOM).queryByText("Show Details");
        user.click(button);
      });
    });

    then("the event details should be collapsed and hidden.", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;

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
