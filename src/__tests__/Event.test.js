import { getEvents } from "../api";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";

describe("<Event /> Component", () => {
  let EventComponent;
  let allEvents;
  let event;

  beforeEach(async () => {
    allEvents = await getEvents(); // Fetch the data once before running any test
    event = allEvents[0];
    EventComponent = render(<Event event={event} />);
  });

  // unit test cases that test the event information displays correctly (i.e., to verify whether all the necessary elements have been rendered.)

  test("renders the event's title", () => {
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test("doesn't render the 'event created' node by default", () => {
    expect(EventComponent.queryByText(event.created)).not.toBeInTheDocument();
  });

  test("renders the event's location", () => {
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  // unit test cases that check if the event’s detail’s section is shown or hidden when a user clicks on a show details button (or hide details, when the details are shown)

  test("by default, event's details section should be hidden", () => {
    const hideDetailsButton = EventComponent.queryByText("Hide Details");
    expect(hideDetailsButton).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText("Show Details");
    await user.click(button);

    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const button = EventComponent.queryByText("Show Details");
    const eventDOM = EventComponent.container.firstChild;
    await userEvent.click(button);

    const hideButton = EventComponent.queryByText("Hide Details");
    await userEvent.click(hideButton);

    const details = eventDOM.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });
});
