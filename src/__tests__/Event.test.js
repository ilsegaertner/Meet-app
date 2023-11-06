import { getEvents } from "../api";
import { render } from "react-dom";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";

describe("<Event /> Component", () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    EventComponent = render(<Event />);
    allEvents = await getEvents(); // Fetch the data once before running any test
  });

  // unit test cases that test the event information displays correctly (i.e., to verify whether all the necessary elements have been rendered.)

  test("renders the event's title", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  // test("renders the event's start time", () => {
  //   expect(
  //     EventComponent.queryByText(allEvents[0].created)
  //   ).toBeInTheDocument();
  // });

  // test("renders the event's location", () => {
  //   expect(
  //     EventComponent.queryByText(allEvents[0].location)
  //   ).toBeInTheDocument();
  // });

  // test("renders event detailes button with the title (show details)", () => {
  //   expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  // });

  // // unit test cases that check if the event’s detail’s section is shown or hidden when a user clicks on a show details button (or hide details, when the details are shown)

  // test("by default, event's details section should be hidden", () => {
  //   const detailsSection = EventComponent.querySelector(".show-details");
  //   expect(detailsSection).not.toBeInTheDocument();
  // });
  // test("shows the details section when the user clicks on the 'show details' button", async () => {
  //   const user = userEvent.setup();
  //   const detailsButton = EventComponent.queryByText("show details");
  //   const detailsSection = EventComponent.querySelector(".show-details");

  //   // Verify that the details section is initially hidden
  //   expect(detailsSection).not.toBeInTheDocument();

  //   // Check that the "show details" button is present
  //   expect(detailsButton).toBeInTheDocument();

  //   await user.click(detailsButton);
  //   expect(detailsSection).toBeInTheDocument();
  //   expect(detailsSection).toBeVisible();
  //   expect(detailsSection).toHaveClass("show-details");
  // });

  // test("hides the details section when the user clicks on the 'hide details' button", async () => {
  //   const user = userEvent.setup();
  //   const showDetailsButton = EventComponent.queryByText("show details");
  //   const hideDetailsButton = EventComponent.queryByText("hide details");
  //   const detailsSection = EventComponent.querySelector(".show-details");

  //   expect(detailsSection).toBeInTheDocument();
  //   expect(hideDetailsButton).toBeInTheDocument();

  //   await user.click(hideDetailsButton);
  //   expect(detailsSection).not.toBeInTheDocument();
  //   expect(detailsSection).toHaveClass(".hide-details");
  // });
});
