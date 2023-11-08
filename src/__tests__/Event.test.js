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

  test("renders the event's start time", () => {
    expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
  });

  test("renders the event's location", () => {
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  // unit test cases that check if the event’s detail’s section is shown or hidden when a user clicks on a show details button (or hide details, when the details are shown)

  test("by default, event's details section should be hidden", () => {
    const hideDetailsButton = EventComponent.queryByText("hide details");
    expect(hideDetailsButton).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText("show details");
    const detailsSection = EventComponent.queryByRole("listitem");

    //    Verify that the details section is initially hidden
    expect(detailsSection).toHaveClass("details-hidden");
    expect(showDetailsButton).toBeInTheDocument();

    await user.click(showDetailsButton);
    const updatedDetailsSection = EventComponent.queryByRole("listitem");
    // expect(updatedDetailsSection).toBeDefined();
    // expect(updatedDetailsSection).toBeInTheDocument();
    expect(updatedDetailsSection).toHaveClass("details-shown");
    expect(updatedDetailsSection).toBeVisible();
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const user = userEvent.setup();
    const hideDetailsButton = EventComponent.queryByText("hide details");
    const detailsSection = EventComponent.queryByRole("listitem");
    await user.click(hideDetailsButton);
    EventComponent.rerender(<Event event={event} />);
    const updatedDetailsSection = EventComponent.queryByRole("listitem");
    expect(updatedDetailsSection).toHaveClass("details-hidden");
  });
});
