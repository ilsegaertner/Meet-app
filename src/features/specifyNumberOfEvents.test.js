import { loadFeature, defineFeature } from "jest-cucumber";
import { getEvents } from "../api";
import { waitFor, render, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppComponent;
  beforeEach(() => {
    AppComponent = render(<App />);
  });

  test("When user hasn't specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    given(
      "the user has not specified a limit in the number of events shown",
      () => {}
    );

    when("the user browses through the events page", () => {});

    then(
      /^the page limits the amount of events visible to (\d+) events$/,
      (arg0) => {}
    );
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    given("the user wants to change the number of events displayed", () => {});

    when("the user enters a specific number in a text box", () => {});

    then("the number of displayed events gets updated", () => {});
  });
});
