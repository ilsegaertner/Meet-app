import { render } from "@testing-library/react";
import EventList from "../components/eventList";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  });

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", () => {
    EventListComponent.rerender(
      // same component but with the new props
      <EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
    );
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
  });

  // missing from Scenario 1: test for populating the events props when the application state is updated with events (the global state that should be defined in <App/> is updated)
});
