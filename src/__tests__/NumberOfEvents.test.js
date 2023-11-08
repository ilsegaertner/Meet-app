// import { getEvents } from "../api";
import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> Component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />):
  });

  test("renders numbers input", () => {
    const numbersInput = NumberOfEventsComponent.queryByRole("number");
    expect(numbersInput).toBeInTheDocument();
    expect(numbersInput).toHaveClass("event-number");
  });

  test("renders 32 as default value"), () => {
    const numbersInput = NumberOfEventsComponent.queryByRole("number");
    expect(numbersInput.value).toBe("32");

  }
});