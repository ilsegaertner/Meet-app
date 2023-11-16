import { loadFeature, defineFeature } from "jest-cucumber";
import { getEvents } from "../api";
import { waitFor, render, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given(
      "the user has not specified a limit in the number of events shown",
      async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector("#event-list");
        const CitySearchDOM = AppDOM.querySelector("#city-search");
        const citySearchInput = within(CitySearchDOM).queryByRole("textbox");
        await userEvent.clear(citySearchInput);
      }
    );

    when("the user browses through the events page", () => {
      AppComponent = render(<App />);
    });

    then(
      /^the page limits the amount of events visible to (\d+) events$/,
      async (arg0) => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector("#event-list");

        await waitFor(() => {
          const allEvents = getEvents();
          const EventListItems =
            within(EventListDOM).queryAllByRole("listitem");

          expect(EventListItems).toHaveLength(32);
        });
      }
    );
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given(
      "the user wants to change the number of events displayed",
      async () => {
        AppComponent = render(<App />);
      }
    );

    when("the user enters a specific number in a text box", async () => {
      waitFor(() => {
        // AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const CitySearchDOM = AppDOM.querySelector("#city-search");
        const citySearchInput = within(CitySearchDOM).queryByRole("textbox");
        const EventListDOM = AppDOM.querySelector("#event-list");
        const allEvents = getEvents();
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        userEvent.clear(citySearchInput);
        userEvent.type(citySearchInput, "16");
      });
    });

    then("the number of displayed events gets updated", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const CitySearchDOM = AppDOM.querySelector("#city-search");
      const numbersInput = within(CitySearchDOM).queryByRole("textbox");
      const NumberOfEventsComponent = render(
        <NumberOfEvents setCurrentNOE={() => {}} />
      );
      userEvent.clear(numbersInput);
      await userEvent.type(numbersInput, "{backspace}{backspace}10");
      expect(numbersInput.value).toBe("10");
    });
  });
});
