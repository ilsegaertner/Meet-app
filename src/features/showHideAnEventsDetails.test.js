import { loadFeature, defineFeature } from "jest-cucumber";
import { within, waitFor, render } from "@testing-library/react";
import App from "../App";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("Event element is collapsed by default.", ({ given, when, then }) => {
    given("the user is browsing events in a city", () => {});

    when("the user views the events page", () => {});

    then(
      "the details of a specific event should be hidden by default.",
      () => {}
    );
  });

  test("User can expand event details.", ({ given, when, then }) => {
    given("the user is viewing the eventspage", () => {});

    when("the user clicks on the detail button of an event", () => {});

    then("the event details should be displayed around the button.", () => {});
  });

  test("User can collapse event details.", ({ given, when, then }) => {
    given(
      "the user is viewing the events page and some event details are expanded",
      () => {}
    );

    when(/^the user clicks on "(.*)" for that event$/, (arg0) => {});

    then("the event details should be collapsed and hidden.", () => {});
  });
});
