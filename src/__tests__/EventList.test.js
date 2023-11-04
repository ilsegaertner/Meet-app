import { render } from "@testing-library/react";
import EventList from "../components/eventList";
import { getEvents } from "../api";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  });

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(
      allEvents.length
    );
    // missing from Scenario 1: test for populating the events props when the application state is updated with events (the global state that should be defined in <App/> is updated)
  });
});
